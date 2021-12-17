import { ethers } from "hardhat"
import { existsSync, writeFileSync } from "fs"
const Ether = (ether: string) => { return ethers.utils.parseEther(ether) }
async function main() {
  const accounts = await ethers.getSigners();
  const _name = "Wunzo Token";
  const _symbol = "WNZ";
  const _NTF_name = "Wunzo Table";
  const _NTF_symbol = "WNZTBL";
  const _decimals = 18;
  const _privateSallRate = 2000;
  const _preSellrate = 1333;
  const _icoRate = 1000;
  const comp1 = accounts[1]
  const comp2 = accounts[2]

  const Token = await ethers.getContractFactory("WunzoToken")
  const Vesting = await ethers.getContractFactory("VestingCrowdSell")
  const token = await Token.deploy(_name, _symbol, _decimals);
  await token.deployed();
  await token.mint("0xD147806E665c20673B9abef9611e0F4fc05ca96f", Ether("50000"))
  await comp1.sendTransaction({
    to: "0xD147806E665c20673B9abef9611e0F4fc05ca96f",
    value: Ether("3")
  })
  const vesting = await Vesting.deploy(_privateSallRate, _preSellrate, _icoRate, comp1.address, comp2.address, token.address);
  await vesting.deployed()
  await token.addMinter(vesting.address)
  writeFileSync("src/abis/Addresses.json", JSON.stringify({
    WunzoToken: token.address,
    WunzoCrowdSale: vesting.address,
    comp1: comp1.address,
    comp2: comp2.address
  }))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
