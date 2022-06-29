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

/// wallet can call majorly all functions that provider does like getBalance , getTransactionCount

const main = async () => {
  const balance1 = await provider.getBalance(sender);
  const balance2 = await provider.getBalance(recepient);

  console.log(
    `Balance Before the transaction \n Sender:${ethers.utils.formatEther(
      balance1
    )} \n Recepient:${ethers.utils.formatEther(balance2)}`
  );

  /// creating a send transaction that sends the ether value from the wallet to the to account
  const tx = await wallet.sendTransaction({
    to: recepient,
    value: ethers.utils.parseEther("0.025"),
  });

  /// waiting for the transaction to be mined
  await tx.wait();
  console.log(tx);

  const balance3 = await provider.getBalance(sender);
  const balance4 = await provider.getBalance(recepient);

  console.log(
    `Balance After the transaction \n Sender:${ethers.utils.formatEther(
      balance3
    )} \n Recepient:${ethers.utils.formatEther(balance4)}`
  );
};

main();
