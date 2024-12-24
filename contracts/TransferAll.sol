// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract TransferAll {
    function transferAllTokens(address token, address recipient) external {
        uint256 balance = IERC20(token).balanceOf(msg.sender);
        require(balance > 0, "Insufficient token balance");
        IERC20(token).transferFrom(msg.sender, recipient, balance);
    }

    function transferNativeCurrency(address recipient) external payable {
        require(address(this).balance > 0, "Insufficient native currency balance");
        payable(recipient).transfer(address(this).balance);
    }
}
