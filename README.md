# Token Management System

This is a management working system that is developed after integrating an intelligent contract(token. sol) with the front end using the React application. It provides brief functions to help the user to connect their metamask wallet with the application to perform transactions.

**Code's Logic**

1. The contract Token consists of token's name and its symbol.

2. It has the initialization of the total supply of tokens present in the account.

3. We have an event Deposit which is triggered when we try to deposit the eth into our account.

4. The constructor makes the msg.sender as the owner and supplies the totalSupply to the sender's balance.

5. The transfer function checks the two require conditions and if they are met, it deducts the amount from the sender's balance and adds that same entered amount to the receiver's account.

6. The deposit function checks the condition if the msg.sender is the owner and if yes, it adds the amount to the  previousBalance and emits the deposit event.

7. Lastly, balanceOfAccount function returns the balance of the account.

# Steps to follow

The use of Hardhat and Ether.js, which are now the de facto tools for creating smart contract frameworks, will be covered in this module.

**Goal of the Project**

Using the Hardhat Ethereum development environment, we will design, execute, compile, and deploy the smart contracts in this lesson.

# Getting started with the project

1. Open the workspace's terminal and type "npx create-react-app mydapp" to create a starter template.

2. Install the project dependent libraries and modules => "npm install ethers@5.7 hardhat @nomiclabs/hardhat-waffle ethereum-waffle @nomiclabs/hardhat-ethers chai".

3. To create a basic setup with all the Hardhat configurations of the project, run the "npx hardhat" command in the terminal.

4. For getting the local node running, run the command: "npx hardhat node". 20 accounts with imaginary funds are provided to us by Hardhat so that we can conduct transactions.

5. Finally, we are running the command to deploy our contract=> "npx hardhat run --network localhost scripts/deploy.js".

6. Install the metamask, and add a localhost manual network. Also, import an account from the provided accounts to make transactions.

7. Subsequently, in order to connect the Smart Contract to  React frontend type "npm start".

# Frontend Application 

![image](https://github.com/SK-4518/Avax-Module2/assets/136696857/fab9b799-7485-4c97-b844-d33fffb41695)


# Conclusion

This learning experience has finally come to a close. Using the hardhat Ethereum development environment, we explored how to build, run, compile, and deploy smart contracts in the lesson. I hope this helps you begin your quest to create awesome things!

