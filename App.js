// src/app.js
import './App.css';
import {ethers} from 'ethers'
import { useState } from 'react';

import TokenArtifact from './artifacts/contracts/Token.sol/Token.json'
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"


function App() {
 const [tokenData, setData] = useState({})
 const [amount, setAmount] = useState()
 const [userAccountId, setUserAccountId] = useState()
 const [atm, setATM] = useState(undefined);
 const [balance, setBalance] = useState(undefined);

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://8545-sk4518-ethavaxmodule2fi-rbo1gjrugea.ws-us102.gitpod.io");
  const [deployer] = await provider.getSigners();
  // Now you can use the deployer account for deployment or transactions
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

 const provider = new ethers.providers.Web3Provider(window.ethereum);
 const signer = provider.getSigner();
 async function _intializeContract(init) {
  // We first initialize ethers by creating a provider using window.ethereum
  // When, we initialize the contract using that provider and the token's
  // artifact. You can do this same thing with your contracts.
  const contract = new ethers.Contract(
    tokenAddress,
    TokenArtifact.abi,
    init
  );

  return contract
}
if (typeof process !== 'undefined') {
  // Code running in Node.js environment
  console.log('Running in Node.js environment');
  console.log('Node.js version:', process.version);
  console.log('Node.js platform:', process.platform);
} else {
  // Code running in browser or client-side JavaScript
  console.log('Running in browser or client-side JavaScript');
}
 async function _getData() {
  const contract = await _intializeContract(signer)
  const name = await contract.name();
  const symbol = await contract.symbol();
  const tokenData = {name, symbol}
  setData(tokenData);
}
const deposit = async () => {
  if (atm) {
    let tx = await atm.deposit(1);
    await tx.wait();
    getBalance();
  }
};
async function sendToken() {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    const contract = await _intializeContract(signer)
    const transaction = await contract.transfer(userAccountId, amount);
    await transaction.wait();
    console.log(`${amount} Token has been sent to ${userAccountId}`);
  }
}
async function getBalance() {
  if (typeof window.ethereum !== 'undefined') {
    const contract = await _intializeContract(signer)
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const balance = await contract.balanceOf(account);
    console.log("Balance of the Account: ", balance.toString());
  }
}
  return (
    <div className="App">
      <header className="App-header">
      <header><h1>Token Management System</h1></header>
      <button onClick={_getData}>Retrieve Token Details</button>
      <h1>{tokenData.name}</h1>
      <h1>{tokenData.symbol}</h1>
      <button onClick={getBalance}>Get Balance of Account</button>
      <button onClick={deposit}>Deposit 1 ETH</button>
      <button onClick={sendToken}>Transfer Custom Tokens</button>
      <input onChange={e => setUserAccountId(e.target.value)} placeholder="Account Address" />
      <input onChange={e => setAmount(e.target.value)} placeholder="Token to be Transfered " />
      </header>
    </div>
  );
}
export default App;
