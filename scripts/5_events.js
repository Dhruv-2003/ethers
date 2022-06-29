const { ethers } = require("ethers");

const INFURA_ID = "";
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

/// storing private key
const priv1 = "";

/// intializing wallet so that we could sign any transaction
const wallet = new ethers.Wallet(priv1, provider);

/// contract address and ABI
const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const abi = [
  "function name() view returns (string)",
  "event Transfer(address indexed from , address indexed to , uint amount)",
];

const contract = new ethers.Contract(address, abi, provider);

const main = async () => {
  const block = await provider.getBlockNumber();
  /// it requires the name of the event and the range of BlockNo between which logged events are to be fetched
  const transferEvents = await contract.queryFilter(
    "Transfer",
    block - 30,
    block
  );

  console.log(transferEvents);
};

main();
