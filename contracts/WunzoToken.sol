// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "./contracts/token/ERC20/extensions/ERC20Capped.sol";
import "./contracts/access/Ownable.sol";

contract WunzoToken is ERC20Capped, ERC20PresetMinterPauser, Ownable {
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) ERC20PresetMinterPauser(_name, _symbol) ERC20Capped(50000000 * 10**18) {}

    function _mint(address account, uint256 amount)
        internal
        virtual
        override(ERC20, ERC20Capped)
    {
        require(
            ERC20.totalSupply() + amount <= cap(),
            "ERC20Capped: cap exceeded"
        );
        super._mint(account, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override(ERC20, ERC20PresetMinterPauser) {
        require(!paused(), "ERC20Pausable: token transfer while paused");
        super._beforeTokenTransfer(from, to, amount);
    }

    function addMinter(address minter) public onlyOwner {
        _setupRole(MINTER_ROLE, minter);
    }
}
