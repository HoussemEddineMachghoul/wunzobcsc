// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./contracts/utils/math/SafeMath.sol";
import "./contracts/utils/Secondary.sol";
import "./WunzoTokenCrowdsale.sol";

contract VestingCrowdSell is WunzoTokenCrowdsale {
    using SafeMath for uint256;
    struct accounts {
        uint256 totalBalance;
        uint256 claimedBalance;
    }
    mapping(address => accounts) public PrivateVault;
    mapping(address => accounts) public FundersVault;
    uint256 public PrivateReleasePeriod = 30;
    uint256 public FundersReleasePeriod = 90;
    uint256 public PrivateReleasePRC = 10;
    uint256 public FundersReleasePRM = 125;
    uint256 public startDate;
    bool public open;
    __unstable__TokenVault private _vault;

    constructor(
        uint256 _PrivateSellRate,
        uint256 _PreSellRate,
        uint256 _ICORate,
        address payable _c1Address,
        address payable _c2Address,
        IERC20 _token
    )
        WunzoTokenCrowdsale(
            _PrivateSellRate,
            _PreSellRate,
            _ICORate,
            _c1Address,
            _c2Address,
            _token
        )
    {
        _vault = new __unstable__TokenVault();
    }

    function _privateDeliverTokens(address beneficiary, uint256 tokenAmount)
        internal
        override
    {
        PrivateVault[beneficiary].totalBalance = PrivateVault[beneficiary]
            .totalBalance
            .add(tokenAmount);
        _deliverTokens(address(_vault), tokenAmount);
    }

    function _PreSellDeliverTokens(address beneficiary, uint256 tokenAmount)
        internal
        override
    {
        PrivateVault[beneficiary].totalBalance = PrivateVault[beneficiary]
            .totalBalance
            .add(tokenAmount);
        _deliverTokens(address(_vault), tokenAmount);
    }

    function fundersDiposit(address beneficiary, uint256 tokenAmount)
        public
        onlyOwner
    {
        FundersVault[beneficiary].totalBalance = FundersVault[beneficiary]
            .totalBalance
            .add(tokenAmount);
        _deliverTokens(address(_vault), tokenAmount);
    }

    function privateVastingTotalBalance() public view returns (uint256) {
        return PrivateVault[_msgSender()].totalBalance;
    }

    function fundersVastingTotalBalance() public view returns (uint256) {
        return FundersVault[_msgSender()].totalBalance;
    }

    function privateWithdrawTokens() public {
        address beneficiary = _msgSender();
        uint256 amount = _privateStillDue(beneficiary);
        require(
            amount > 0,
            "PostDeliveryCrowdsale: beneficiary is not due any tokens"
        );

        PrivateVault[beneficiary].claimedBalance = PrivateVault[beneficiary]
            .claimedBalance
            .add(amount);
        _vault.transfer(theToken, beneficiary, amount);
    }

    function fundersWithdrawTokens() public {
        address beneficiary = _msgSender();
        uint256 amount = _fundersStillDue(beneficiary);
        require(
            amount > 0,
            "PostDeliveryCrowdsale: beneficiary is not due any tokens"
        );

        FundersVault[beneficiary].claimedBalance = FundersVault[beneficiary]
            .claimedBalance
            .add(amount);
        _vault.transfer(theToken, beneficiary, amount);
    }

    function privateCanWithdrow() public view returns (uint256) {
        address beneficiary = _msgSender();
        if (!open) return 0;
        return _privateStillDue(beneficiary);
    }

    function fundersCanWithdrow() public view returns (uint256) {
        address beneficiary = _msgSender();
        if (!open) return 0;
        return _fundersStillDue(beneficiary);
    }

    function _privateStillDue(address beneficiary)
        private
        view
        returns (uint256)
    {
        uint256 totalBalance = PrivateVault[beneficiary].totalBalance;
        uint256 claimedBalance = PrivateVault[beneficiary].claimedBalance;
        uint256 prc = getPrivateReleasablePRC();
        uint256 due = totalBalance.mul(prc).div(100);
        if (due <= claimedBalance) return 0;
        return due.sub(claimedBalance);
    }

    function _fundersStillDue(address beneficiary)
        private
        view
        returns (uint256)
    {
        uint256 totalBalance = FundersVault[beneficiary].totalBalance;
        uint256 claimedBalance = FundersVault[beneficiary].claimedBalance;
        uint256 prc = getFundersReleasablePRC();
        uint256 due = totalBalance.mul(prc).div(1000);
        if (due <= claimedBalance) return 0;
        return due.sub(claimedBalance);
    }

    function getPrivateReleasablePRC() public view returns (uint256) {
        if (!open) return 0;
        uint256 nbDays = getNbDaysSinceStarted();
        uint256 prc = nbDays.div(PrivateReleasePeriod).add(1).mul(
            PrivateReleasePRC
        );
        if (prc > 100) return 100;
        return prc;
    }

    function getFundersReleasablePRC() public view returns (uint256) {
        if (!open) return 0;
        uint256 nbDays = getNbDaysSinceStarted();
        uint256 prc = nbDays.div(FundersReleasePeriod).add(1).mul(
            FundersReleasePRM
        );
        if (prc > 1000) return 1000;
        return prc;
    }

    function getNbDaysSinceStarted() public view returns (uint256) {
        if (!open) return 0;
        return block.timestamp.sub(startDate).div(1 days);
    }

    function Start() public onlyOwner {
        require(!open, "Alredy Started");
        open = true;
        startDate = block.timestamp;
    }
}

contract __unstable__TokenVault is Secondary {
    function transfer(
        IERC20 token,
        address to,
        uint256 amount
    ) public onlyPrimary {
        token.transfer(to, amount);
    }
}
