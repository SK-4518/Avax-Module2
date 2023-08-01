//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
contract Token {
    string public name = "Sehaj's Customized Token";
    string public symbol = "SCT";
    uint256 public totalSupply = 10000;
    address public owner;
    mapping(address => uint256) balances;

    event Deposit(uint256 amount);
   
    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }
 
    function transfer(address to, uint256 amount) external {
        
        require(msg.sender == owner, "You are not the owner of this account");
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
    function deposit(uint256 amount) public payable {
        uint previousBalance = totalSupply;

        require(msg.sender == owner, "You are not the owner of this account");
        previousBalance+=amount;
        emit Deposit(amount);
    }
    function balanceOfAccount(address account) external view returns (uint256) {
        require(msg.sender == owner, "You are not the owner of this account");
        return balances[account];
    }
}
