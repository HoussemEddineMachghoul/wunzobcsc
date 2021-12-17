// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "./contracts/access/Ownable.sol";
import "./contracts/security/ReentrancyGuard.sol";
import "./contracts/utils/Context.sol";
import "./contracts/token/ERC20/utils/SafeERC20.sol";
import "./contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "./contracts/token/ERC20/extensions/ERC20Capped.sol";
import "./contracts/token/ERC20/IERC20.sol";
import "./contracts/utils/math/SafeMath.sol";

contract WunzoTokenCrowdsale is Context, Ownable, ReentrancyGuard {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    enum Phases {
        PRIVATE_SELL,
        PRE_SELL,
        ICO
    }
    event TokensPurchased(
        address indexed purchaser,
        address indexed beneficiary,
        uint256 value,
        uint256 amount
    );
    event PayOuts(address indexed beneficiary, uint256 amount);
    mapping(address => uint256) private PrivateSelWhitList;
    mapping(address => bool) private Moderators;
    uint256 public PrivateSellRate;
    uint256 public PreSellRate;
    uint256 public ICORate;
    Phases public CurrentPhase = Phases.PRIVATE_SELL;
    IERC20 internal theToken;
    uint256 private comp1PRC = 65;
    uint256 private comp2PRC = 35;
    address payable private comp1Address;
    address payable private comp2Address;
    uint256 private _weiRaisedInPrivateSell;
    uint256 private _weiRaisedInPreSell;
    uint256 private _weiRaisedInICO;
    uint256 private MinValueToBuy = 30000000000000000;
    uint256 public maxPrivate = 8000000000000000000000000;
    uint256 public maxpre = 4000000000000000000000000;
    uint256 public maxICO = 13000000000000000000000000;
    uint256 private availablePayOut = 0;

    constructor(
        uint256 _PrivateSellRate,
        uint256 _PreSellRate,
        uint256 _ICORate,
        address payable _c1Address,
        address payable _c2Address,
        IERC20 _token
    ) {
        require(_PrivateSellRate > 0, "Crowdsale: rate is 0");
        require(_PreSellRate > 0, "Crowdsale: rate is 0");
        require(_ICORate > 0, "Crowdsale: rate is 0");
        require(
            _c1Address != address(0),
            "Crowdsale: _c1Address is the zero address"
        );
        require(
            _c2Address != address(0),
            "Crowdsale: _c2Address is the zero address"
        );
        require(
            address(_token) != address(0),
            "Crowdsale: token is the zero address"
        );
        theToken = _token;
        PrivateSellRate = _PrivateSellRate;
        PreSellRate = _PreSellRate;
        ICORate = _ICORate;
        comp1Address = _c1Address;
        comp2Address = _c2Address;
    }

    /**
     * @return the token being sold.
     */
    function getToken() public view returns (IERC20) {
        return IERC20(theToken);
    }

    /**
     * @return total wei raised in private sell
     */
    function weiRaisedInPrivateSell() public view returns (uint256) {
        return _weiRaisedInPrivateSell;
    }

    /**
     * @return total wei raised in Pre sell
     */
    function weiRaisedInPreSell() public view returns (uint256) {
        return _weiRaisedInPreSell;
    }

    /**
     * @return total wei raised in ICO
     */
    function weiRaisedInICO() public view returns (uint256) {
        return _weiRaisedInICO;
    }

    /**
     * @return available for payout.
     */
    function getAvailablePayOut() public view onlyOwner returns (uint256) {
        return availablePayOut;
    }

    /**
     * @dev Add new Moderator
     * @param moderatorAddress the address of the new moderator
     */
    function addModerator(address moderatorAddress) public onlyOwner {
        Moderators[moderatorAddress] = true;
    }

    /**
     * @dev Remove Moderator
     * @param moderatorAddress the address of the moderator
     */
    function removeModerator(address moderatorAddress) public onlyOwner {
        Moderators[moderatorAddress] = false;
    }

    /**
     * @dev Returns true if the caller is a moderator.
     */
    function isModerator() public view returns (bool) {
        return Moderators[_msgSender()];
    }

    /**
     * @dev whiteList an address for privateSell
     * @param _buyer the buyer wallet address
     * @param _weiToBuy amount of token in wei to add to the balance avalable to buyer
     */
    function whiteListPrivateBuyer(address _buyer, uint256 _weiToBuy)
        public
        onlyModerator
        nonReentrant
    {
        require(_weiToBuy > 0, "_weiToBuy is 0");
        require(_buyer != address(0), "Buyer Address Cant Be 0");
        PrivateSelWhitList[_buyer] = PrivateSelWhitList[_buyer].add(_weiToBuy);
    }

    /**
     * @dev remove an address from privateSell
     * @param _buyer the buyer wallet address
     */
    function removeWhiteListedBuyer(address _buyer) public onlyModerator {
        require(_isWhiteListed(_buyer), "Buyer Not WhiteListed");
        PrivateSelWhitList[_buyer] = 0;
    }

    /**
     * @dev Returns true if the caller is whiteListed.
     */
    function whiteListed() public view returns (bool) {
        return PrivateSelWhitList[_msgSender()] > 0;
    }

    /**
     * @dev change the Crowdsale Phase
     * @param _phase the new phase
     */
    function changeCrowdsalePhase(Phases _phase) public onlyOwner {
        CurrentPhase = _phase;
    }

    /**
     * @dev set Selling Rate For a phase
     * @param _phase the phase to edit
     * @param _rate the new Rate to set
     */
    function setRate(Phases _phase, uint256 _rate) public onlyOwner {
        require(_rate > 0, "_rate is 0");
        if (_phase == Phases.PRIVATE_SELL) {
            PrivateSellRate = _rate;
        } else if (_phase == Phases.PRE_SELL) {
            PreSellRate = _rate;
        } else if (_phase == Phases.ICO) {
            ICORate = _rate;
        }
    }

    /**
     * @dev redirection to DoBuy
     */
    receive() external payable {
        DoBuy();
    }

    /**
     * @dev buy token in the current phase
     */
    function DoBuy() public payable {
        if (CurrentPhase == Phases.PRIVATE_SELL) {
            buyInPrivateSell();
        } else if (CurrentPhase == Phases.PRE_SELL) {
            buyInPreSell();
        } else if (CurrentPhase == Phases.ICO) {
            buyInICO();
        }
    }

    /**
     * @dev set limit for payout
     * @param weiAmount new limit for payout
     */
    function SetPayOutLimit(uint256 weiAmount) public onlyOwner {
        availablePayOut = weiAmount;
    }

    /**
     * @dev getBalance avalable to buy in privatSell
     */
    function stillCanBuy() public view returns (uint256) {
        return PrivateSelWhitList[_msgSender()];
    }

    /**
     * @dev buy token in PrivateSell
     */
    function buyInPrivateSell() public payable onlyWhiteListed nonReentrant {
        uint256 weiAmount = msg.value;
        _preValidatePurchase(_msgSender(), weiAmount);
        uint256 tokens = _getTokenAmount(weiAmount, Phases.PRIVATE_SELL);
        _privateSellCanBuy(_msgSender(), tokens);
        _privateWeiLimit(tokens);
        _privateDeliverTokens(_msgSender(), tokens);
        _weiRaisedInPrivateSell = _weiRaisedInPrivateSell.add(weiAmount);

        emit TokensPurchased(_msgSender(), _msgSender(), weiAmount, tokens);
        _updatePrivateSellState(_msgSender(), tokens);
    }

    /**
     * @dev buy token in PreSell
     */
    function buyInPreSell() public payable nonReentrant PreSellOnly {
        uint256 weiAmount = msg.value;
        _preValidatePurchase(_msgSender(), weiAmount);
        uint256 tokens = _getTokenAmount(weiAmount, Phases.PRE_SELL);
        _preSellWeiLimit(tokens);
        _PreSellDeliverTokens(_msgSender(), tokens);
        _weiRaisedInPreSell = _weiRaisedInPreSell.add(weiAmount);

        emit TokensPurchased(_msgSender(), _msgSender(), weiAmount, tokens);
    }

    /**
     * @dev buy token in ICO
     */
    function buyInICO() public payable nonReentrant ICOOnly {
        uint256 weiAmount = msg.value;
        _preValidatePurchase(_msgSender(), weiAmount);
        uint256 tokens = _getTokenAmount(weiAmount, Phases.ICO);
        _ICOWeiLimit(tokens);
        _ICODeliverTokens(_msgSender(), tokens);
        _weiRaisedInICO = _weiRaisedInICO.add(weiAmount);

        emit TokensPurchased(_msgSender(), _msgSender(), weiAmount, tokens);
    }

    /**
     * @dev Send Token as paiment to an address
     * @param recipient the address that will recive the payment
     * @param weiAmount amount of token in wei to pay
     */
    function sendPayout(address payable recipient, uint256 weiAmount)
        public
        onlyModerator
        nonReentrant
    {
        require(
            recipient != address(0),
            "Crowdsale: recipient is the zero address"
        );
        require(weiAmount != 0, "Crowdsale: weiAmount is  01");
        require(weiAmount <= availablePayOut, "Not Enught PayOuts");
        _deliverTokens(recipient, weiAmount);
        availablePayOut = availablePayOut.sub(weiAmount);
        emit PayOuts(recipient, weiAmount);
    }

    /**
     * @dev withdrow bnb to company
     * @param weiAmount amount of bnb to withdrow
     */
    function withdrow(uint256 weiAmount) public onlyOwner nonReentrant {
        require(weiAmount > MinValueToBuy, "weiAmmount Too Low");
        require(
            address(this).balance >= weiAmount,
            "not enught balance to pay"
        );
        uint256 payc1 = weiAmount.mul(comp1PRC).div(100);
        uint256 payc2 = weiAmount - payc1;
        comp1Address.transfer(payc1);
        comp2Address.transfer(payc2);
    }

    /**
     * @dev Returns true if the address is whiteListed.
     * @param _buyer address to verify
     */
    function _isWhiteListed(address _buyer) private view returns (bool) {
        return PrivateSelWhitList[_buyer] > 0;
    }

    /**
     * @dev Throws if called by a non WhiteListed Address.
     */
    modifier onlyWhiteListed() {
        require(whiteListed(), "Caller is not White Listed");
        _;
    }

    /**
     * @dev Throws if called by any account other than a moderator.
     */
    modifier onlyModerator() {
        require(isModerator(), "Caller is not a moderator");
        _;
    }
    /**
     * @dev Throws if called by any account other than a moderator.
     */
    modifier PreSellOnly() {
        require(CurrentPhase == Phases.PRE_SELL, "Pre Sall Close");
        _;
    }
    /**
     * @dev Throws if called by any account other than a moderator.
     */
    modifier ICOOnly() {
        require(CurrentPhase == Phases.ICO, "ICO Close");
        _;
    }

    /**
     * @dev Override to extend the way in which ether is converted to tokens.
     * @param weiAmount Value in wei to be converted into tokens
     * @return Number of tokens that can be purchased with the specified _weiAmount
     */
    function _getTokenAmount(uint256 weiAmount, Phases _phase)
        private
        view
        returns (uint256)
    {
        require(weiAmount >= MinValueToBuy, "Min BNB To Buy is 0.03BNB");
        uint256 t = weiAmount.mul(getRate(_phase));
        require(
            ERC20Capped(address(theToken)).totalSupply().add(t) <=
                ERC20Capped(address(theToken)).cap(),
            "ERC20Capped: cap exceeded"
        );
        return t;
    }

    function getRate(Phases _phase) private view returns (uint256) {
        uint256 res = 0;
        if (_phase == Phases.PRIVATE_SELL) {
            res = PrivateSellRate;
        } else if (_phase == Phases.PRE_SELL) {
            res = PreSellRate;
        } else if (_phase == Phases.ICO) {
            res = ICORate;
        }
        return res;
    }

    /**
     * @dev verify private Limit not reached
     * @param weiAmount amount of token in wei user want to buy
     */
    function _privateWeiLimit(uint256 weiAmount) private view {
        require(
            _weiRaisedInPrivateSell.add(weiAmount) < maxPrivate,
            "this amount is not available to buy"
        );
    }

    /**
     * @dev verify private Limit not reached
     * @param weiAmount amount of token in wei user want to buy
     */
    function _preSellWeiLimit(uint256 weiAmount) private view {
        require(
            _weiRaisedInPreSell.add(weiAmount) < maxpre,
            "this amount is not available to buy"
        );
    }

    /**
     * @dev verify private Limit not reached
     * @param weiAmount amount of token in wei user want to buy
     */
    function _ICOWeiLimit(uint256 weiAmount) private view {
        require(
            _weiRaisedInICO.add(weiAmount) < maxICO,
            "this amount is not available to buy"
        );
    }

    /**
     * @dev Validation of an incoming purchase. Use require statements to revert state when conditions are not met.
     * @param beneficiary Address performing the token purchase
     * @param weiAmount Value in wei involved in the purchase
     */
    function _preValidatePurchase(address beneficiary, uint256 weiAmount)
        private
        view
    {
        require(
            beneficiary != address(0),
            "Crowdsale: beneficiary is the zero address"
        );
        require(weiAmount != 0, "Crowdsale: weiAmount is 02");
        this;
    }

    /**
     * @dev Validation of an incoming purchase. Use require statements to revert state when conditions are not met.
     * @param beneficiary Address performing the token purchase
     * @param tokenAmount Value in wei involved in the purchase
     */
    function _privateSellCanBuy(address beneficiary, uint256 tokenAmount)
        private
        view
    {
        require(
            PrivateSelWhitList[beneficiary] >= tokenAmount,
            "too Much to Buy"
        );
        this;
    }

    /**
     * @dev Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends
     * its tokens.
     * @param beneficiary Address performing the token purchase
     * @param tokenAmount Number of tokens to be emitted
     */
    function _deliverTokens(address beneficiary, uint256 tokenAmount) internal {
        ERC20PresetMinterPauser(address(theToken)).mint(
            beneficiary,
            tokenAmount
        );
    }

    function _ICODeliverTokens(address beneficiary, uint256 tokenAmount)
        internal
    {
        _deliverTokens(beneficiary, tokenAmount);
    }

    function _PreSellDeliverTokens(address beneficiary, uint256 tokenAmount)
        internal
        virtual
    {
        _deliverTokens(beneficiary, tokenAmount);
    }

    function _privateDeliverTokens(address beneficiary, uint256 tokenAmount)
        internal
        virtual
    {
        _deliverTokens(beneficiary, tokenAmount);
    }

    /**
     * @dev Override for extensions that require an private state to check for validity (current user contributions,
     * etc.)
     * @param beneficiary Address receiving the tokens
     * @param weiAmount Value in wei involved in the purchase
     */
    function _updatePrivateSellState(address beneficiary, uint256 weiAmount)
        private
    {
        PrivateSelWhitList[beneficiary] = PrivateSelWhitList[beneficiary].sub(
            weiAmount
        );
    }
}
