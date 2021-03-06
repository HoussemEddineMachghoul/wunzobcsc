/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MigratableMockV2,
  MigratableMockV2Interface,
} from "../MigratableMockV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "anotherValue",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "x",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "y",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610398806100206000396000f3fe60806040526004361061003f5760003560e01c80630c55699c146100445780633e54bacb1461006f578063a56dfe4a1461008b578063fe4b84df146100b6575b600080fd5b34801561005057600080fd5b506100596100d2565b6040516100669190610315565b60405180910390f35b61008960048036038101906100849190610244565b6100d8565b005b34801561009757600080fd5b506100a061011f565b6040516100ad9190610315565b60405180910390f35b6100d060048036038101906100cb919061021b565b610125565b005b60015481565b600260009054906101000a900460ff16156100f257600080fd5b81600181905550806003819055506001600260006101000a81548160ff0219169083151502179055505050565b60035481565b600060019054906101000a900460ff168061014b575060008054906101000a900460ff16155b61018a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610181906102f5565b60405180910390fd5b60008060019054906101000a900460ff1615905080156101da576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8160018190555080156102025760008060016101000a81548160ff0219169083151502179055505b5050565b6000813590506102158161034b565b92915050565b60006020828403121561022d57600080fd5b600061023b84828501610206565b91505092915050565b6000806040838503121561025757600080fd5b600061026585828601610206565b925050602061027685828601610206565b9150509250929050565b600061028d602e83610330565b91507f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008301527f647920696e697469616c697a65640000000000000000000000000000000000006020830152604082019050919050565b6102ef81610341565b82525050565b6000602082019050818103600083015261030e81610280565b9050919050565b600060208201905061032a60008301846102e6565b92915050565b600082825260208201905092915050565b6000819050919050565b61035481610341565b811461035f57600080fd5b5056fea2646970667358221220118626ea59d5c59d994ff9a5dca308202409e8b5af655b06cd507e3e0473506e64736f6c63430008000033";

export class MigratableMockV2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MigratableMockV2> {
    return super.deploy(overrides || {}) as Promise<MigratableMockV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MigratableMockV2 {
    return super.attach(address) as MigratableMockV2;
  }
  connect(signer: Signer): MigratableMockV2__factory {
    return super.connect(signer) as MigratableMockV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MigratableMockV2Interface {
    return new utils.Interface(_abi) as MigratableMockV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MigratableMockV2 {
    return new Contract(address, _abi, signerOrProvider) as MigratableMockV2;
  }
}
