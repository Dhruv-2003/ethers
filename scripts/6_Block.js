const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

/// concepts
///  getBlock -->  info of the block just mined
///  getBlockNumbe --> current block number of the block mined
/// getBlockWithTransactions --> the transactions in the particular block

const main = async () => {
  const block = await provider.getBlockNumber();
  const blockInfo = await provider.getBlock(block);

  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);
  console.log(transactions[0]);
};
main();