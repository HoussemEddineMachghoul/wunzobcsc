/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BadBeaconNotContract,
  BadBeaconNotContractInterface,
} from "../BadBeaconNotContract";

const _abi = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060dc8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c60da1b14602d575b600080fd5b60336047565b604051603e9190605d565b60405180910390f35b60006001905090565b6057816076565b82525050565b6000602082019050607060008301846050565b92915050565b6000607f826086565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff8216905091905056fea2646970667358221220b1d534d0c7d382891ff38834e1ba2627ff5f024d285b39716be6f1361a7d626564736f6c63430008000033";

export class BadBeaconNotContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BadBeaconNotContract> {
    return super.deploy(overrides || {}) as Promise<BadBeaconNotContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BadBeaconNotContract {
    return super.attach(address) as BadBeaconNotContract;
  }
  connect(signer: Signer): BadBeaconNotContract__factory {
    return super.connect(signer) as BadBeaconNotContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadBeaconNotContractInterface {
    return new utils.Interface(_abi) as BadBeaconNotContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadBeaconNotContract {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BadBeaconNotContract;
  }
}
