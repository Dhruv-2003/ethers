/// importing ethers library here
const { ethers } = require("ethers");

const INFURA_ID = "";
/// getting a provider with json rpc using any node provider
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

//  address for which the balance is fetched
const address = "";
const main = async () => {
  /// fetching balance from mainnet

  const balance = await provider.getBalance(address);
  console.log(
    `\n ETH Balance of ${address} --> ${ethers.utils.formatEther(
      balance
    )} ETH \n`
  );

  const txcount = await provider.getTransactionCount(address);
  console.log(
    `\n The Number of transactions sent from this account are ${txcount} \n`
  );

  /// format ethers so as to get the ether in form of eth
};

main();
