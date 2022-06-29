const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(
  `https://kovan.infura.io/v3/${INFURA_ID}`
);

/// address of sender and recepient
const sender = "";
const recepient = "";

/// storing private key
const priv1 = "";

/// intializing wallet so that we could sign any transaction
const wallet = new ethers.Wallet(priv1, provider);

/// token to be sent address
const LINK = "0xa36085F69e2889c224210F603D836748e7dC0088";
const abi = [
  "function balanceOf(address) view returns(uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const contract = new ethers.Contract(LINK, abi, provider);

const main = async () => {
  const balance = await contract.balanceOf(sender);

  console.log(`Balance before of ${sender} :  ${balance}`);

  /// first wallet needs to be connected with the contract and then the new instance should be used to write in contract
  const contractwithWallet = contract.connect(wallet);

  const tx = await contractwithWallet.transfer(recepient, balance);
  await tx.wait();

  console.log(tx);

  const balnaceOfSender = await contract.balanceOf(sender);
  const balanceRecepient = await contract.balanceOf(recepient);

  console.log(
    `Balance after \n${sender} :  ${balnaceOfSender} \n${recepient}:${balanceRecepient}`
  );
};

main();
