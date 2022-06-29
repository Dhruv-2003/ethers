/// importing ethers library here
const { ethers } = require("ethers");

const INFURA_ID = "";
/// getting a provider with json rpc using any node provider
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  /// first way of deploying the contract usin hardhat
  const contract = await ethers.getContractFactory("contractName");
  const deployedContract = await contract.deploy(...args);

  await deployedContract.deployed();

  console.log(`Contract Deployed to ${deployedContract.address}`);

  /// second way of deploying a contract

  /// storing private key
  const privkey = "";
  /// intializing wallet so that we could sign any transaction
  const signer = new ethers.Wallet(privkey, provider);
  const bytecode = "";
  const abi = [];
  const factory = new ethers.ContractFactory(abi, bytecode, signer);
  const contractdeploy = await factory.deploy(parseUnits("10")); /// way to send ether to the contract at time of deployement

  const info = await contractdeploy.deployTransaction.wait();

  console.log(info);
};
main();
