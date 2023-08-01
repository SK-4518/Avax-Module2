//hardhat.config.js
module.exports = {
  paths: {
    artifacts: '.src/artifacts',
  },
  networks: {
    localhost: {
      url: "https://8545-sk4518-ethavaxmodule2fi-rbo1gjrugea.ws-us102.gitpod.io", // Replace with your local Ethereum node URL
    }},
  solidity: "0.8.4",
};
