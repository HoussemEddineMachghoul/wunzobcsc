/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Holder, ERC721HolderInterface } from "../ERC721Holder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610316806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004a60048036038101906100459190610106565b610060565b6040516100579190610190565b60405180910390f35b600063150b7a0260e01b9050949350505050565b6000610087610082846101dc565b6101ab565b90508281526020810184848401111561009f57600080fd5b6100aa848285610274565b509392505050565b6000813590506100c1816102b2565b92915050565b600082601f8301126100d857600080fd5b81356100e8848260208601610074565b91505092915050565b600081359050610100816102c9565b92915050565b6000806000806080858703121561011c57600080fd5b600061012a878288016100b2565b945050602061013b878288016100b2565b935050604061014c878288016100f1565b925050606085013567ffffffffffffffff81111561016957600080fd5b610175878288016100c7565b91505092959194509250565b61018a8161021e565b82525050565b60006020820190506101a56000830184610181565b92915050565b6000604051905081810181811067ffffffffffffffff821117156101d2576101d1610283565b5b8060405250919050565b600067ffffffffffffffff8211156101f7576101f6610283565b5b601f19601f8301169050602081019050919050565b60006102178261024a565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102bb8161020c565b81146102c657600080fd5b50565b6102d28161026a565b81146102dd57600080fd5b5056fea264697066735822122085a9012223dd690c83c1798dfe5e5c69a1cefa59e95cf733c19a19def7dd242864736f6c63430008000033";

export class ERC721Holder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Holder> {
    return super.deploy(overrides || {}) as Promise<ERC721Holder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721Holder {
    return super.attach(address) as ERC721Holder;
  }
  connect(signer: Signer): ERC721Holder__factory {
    return super.connect(signer) as ERC721Holder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721HolderInterface {
    return new utils.Interface(_abi) as ERC721HolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Holder {
    return new Contract(address, _abi, signerOrProvider) as ERC721Holder;
  }
}
