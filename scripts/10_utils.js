/// importing ethers library here
const { ethers, utils } = require("ethers");

const main = async () => {
  /// converts DataHexString --> uint8array
  /// or toUtf8Bytes() can be used
  const uint8Array = ethers.utils.arrayify("0x1234");
  console.log(uint8Array);

  /// gwei --> ether
  const ValueinEther = ethers.utils.formatEther("1000000000000000000");
  console.log(Valueinether);

  /// eth --> gwei
  const ValueinGwei = ethers.utils.parseEther("1.0");
  console.log(ValueinGwei);

  /// getting keccak hashed result for a byte
  const keccak256hashed = ethers.utils.keccak256hash("0x1234");
  console.log(keccak256hashed);

  /// similarly sha256 and sha512 can be used for hashing

  ///  string --> bytes32
  const stringinBytes32 = ethers.utils.formatBytes32String("string");
  console.log(stringinBytes32);

  /// bytes32 --> string
  const bytes32ToString = ethers.parseBytes32String("bytes32");
  console.log(bytes32ToString);
};
main();
