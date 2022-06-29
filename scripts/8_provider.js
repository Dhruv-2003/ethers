/// importing ethers library here
const { ethers } = require("ethers");

const INFURA_ID = "";
/// getting a provider with json rpc using any node provider
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const main = async () => {
  const network = await provider.getNetwork();
  console.log(`\n ${network} \n`);
  console.log(network);

  const block = await provider.getBlock();
  console.log(`\n ${block} \n`);

  const gasPrice = await provider.getGasPrice();
  console.log(`\n ${gasPrice} \n`);
  console.log(gasPrice);

  const feeData = await provider.getFeeData();
  console.log(`\n ${feeData} \n`);
  console.log(feeData);

  const txhash = "";

  const transaction = await provider.getTransaction(txhash);

  console.log(transaction);

  const transactionReciept = await provider.getTransactionReceipt(txhash);

  console.log(transactionReciept);
};

main();
