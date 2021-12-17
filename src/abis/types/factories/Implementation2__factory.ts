/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Implementation2,
  Implementation2Interface,
} from "../Implementation2";

const _abi = [
  {
    inputs: [],
    name: "getValue",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102cd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063209652551461004657806355241077146100645780638129fc1c14610080575b600080fd5b61004e61008a565b60405161005b919061024a565b60405180910390f35b61007e6004803603810190610079919061018c565b610094565b005b61008861009e565b005b6000600154905090565b8060018190555050565b600060019054906101000a900460ff16806100c4575060008054906101000a900460ff16155b610103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fa9061022a565b60405180910390fd5b60008060019054906101000a900460ff161590508015610153576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156101745760008060016101000a81548160ff0219169083151502179055505b50565b60008135905061018681610280565b92915050565b60006020828403121561019e57600080fd5b60006101ac84828501610177565b91505092915050565b60006101c2602e83610265565b91507f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008301527f647920696e697469616c697a65640000000000000000000000000000000000006020830152604082019050919050565b61022481610276565b82525050565b60006020820190508181036000830152610243816101b5565b9050919050565b600060208201905061025f600083018461021b565b92915050565b600082825260208201905092915050565b6000819050919050565b61028981610276565b811461029457600080fd5b5056fea2646970667358221220d3733d3ddd8286b307ce6c77c16b13edd08c6d097e18c755dcb4c7cbabcf94ef64736f6c63430008000033";

export class Implementation2__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Implementation2> {
    return super.deploy(overrides || {}) as Promise<Implementation2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Implementation2 {
    return super.attach(address) as Implementation2;
  }
  connect(signer: Signer): Implementation2__factory {
    return super.connect(signer) as Implementation2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Implementation2Interface {
    return new utils.Interface(_abi) as Implementation2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Implementation2 {
    return new Contract(address, _abi, signerOrProvider) as Implementation2;
  }
}
