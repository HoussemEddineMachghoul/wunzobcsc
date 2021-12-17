/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContextMock, ContextMockInterface } from "../ContextMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "integerValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "stringValue",
        type: "string",
      },
    ],
    name: "Data",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "Sender",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "integerValue",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "stringValue",
        type: "string",
      },
    ],
    name: "msgData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "msgSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061044d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063376bf2621461003b578063d737d0c714610057575b600080fd5b6100556004803603810190610050919061017a565b610061565b005b61005f6100a8565b005b7faf235354a0a47c91ee171961326335cb2d1a8e55b8a89859b0e61eb049e50ea061008a6100e8565b848460405161009c949392919061026d565b60405180910390a15050565b7fd6558c3ed910d959271054471fd1c326679d9fece99c5091b00ed89627cf2bfc6100d16100f5565b6040516100de9190610252565b60405180910390a1565b3660008036915091509091565b600033905090565b600061011061010b846102e5565b6102b4565b90508281526020810184848401111561012857600080fd5b61013384828561037e565b509392505050565b600082601f83011261014c57600080fd5b813561015c8482602086016100fd565b91505092915050565b60008135905061017481610400565b92915050565b6000806040838503121561018d57600080fd5b600061019b85828601610165565b925050602083013567ffffffffffffffff8111156101b857600080fd5b6101c48582860161013b565b9150509250929050565b6101d781610342565b82525050565b60006101e98385610320565b93506101f683858461037e565b6101ff836103ef565b840190509392505050565b600061021582610315565b61021f8185610331565b935061022f81856020860161038d565b610238816103ef565b840191505092915050565b61024c81610374565b82525050565b600060208201905061026760008301846101ce565b92915050565b600060608201905081810360008301526102888186886101dd565b90506102976020830185610243565b81810360408301526102a9818461020a565b905095945050505050565b6000604051905081810181811067ffffffffffffffff821117156102db576102da6103c0565b5b8060405250919050565b600067ffffffffffffffff821115610300576102ff6103c0565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061034d82610354565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156103ab578082015181840152602081019050610390565b838111156103ba576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61040981610374565b811461041457600080fd5b5056fea2646970667358221220e601480a12af95564a3f080c9d03b14b43e26e3983254e70fad7c084f6ca398264736f6c63430008000033";

export class ContextMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContextMock> {
    return super.deploy(overrides || {}) as Promise<ContextMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ContextMock {
    return super.attach(address) as ContextMock;
  }
  connect(signer: Signer): ContextMock__factory {
    return super.connect(signer) as ContextMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContextMockInterface {
    return new utils.Interface(_abi) as ContextMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContextMock {
    return new Contract(address, _abi, signerOrProvider) as ContextMock;
  }
}