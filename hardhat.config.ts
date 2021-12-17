import { task } from "hardhat/config"
import "@nomiclabs/hardhat-waffle"
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  defaultNetwork: "localhost",
  solidity: "0.8.0",
  paths: {
    artifacts: "./build",
  },
  typechain: {
    outDir: 'src/abis/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  },
  mocha: {
    timeout: 2000000
  }
};
