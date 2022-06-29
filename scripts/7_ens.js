/// importing ethers library here
const { ethers } = require("ethers");

const INFURA_ID = "";
/// getting a provider with json rpc using any node provider
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ens = "";

const main = async () => {
  const address = await provider.resolveName(ens);
  console.log(`The address of ${ens} is ${address}`);

  const ensname = await provider.lookupAddress(address);
  console.log(`The ens of the address ${address} is ${ensname}`);

  const resolver = await provider.getResolver(ensname);

  const email = await resolver.getText("email");
  console.log(`The email of the ${ensname} is ${email}`);

  const avatar = await resolver.getAvatar();
  console.log(`The avatar of the ${ensname} is ${avatar}`);

  const contentHash = await resolver.getContentHash();
  console.log(`The content hash of ${ensname} is ${contentHash}`);
};

main();
