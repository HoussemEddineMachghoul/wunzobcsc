/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SupportsInterfaceWithLookupMock,
  SupportsInterfaceWithLookupMockInterface,
} from "../SupportsInterfaceWithLookupMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "INTERFACE_ID_ERC165",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100276301ffc9a760e01b61002c60201b60201c565b610198565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415610095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161008c90610167565b60405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600061010e602f83610187565b91507f455243313635496e7465726661636573537570706f727465643a20696e76616c60008301527f696420696e7465726661636520696400000000000000000000000000000000006020830152604082019050919050565b6000602082019050818103600083015261018081610101565b9050919050565b600082825260208201905092915050565b610212806101a76000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b57806334d7006c1461006b575b600080fd5b61005560048036038101906100509190610110565b610089565b6040516100629190610157565b60405180910390f35b6100736100f0565b6040516100809190610172565b60405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6301ffc9a760e01b81565b60008135905061010a816101c5565b92915050565b60006020828403121561012257600080fd5b6000610130848285016100fb565b91505092915050565b6101428161018d565b82525050565b61015181610199565b82525050565b600060208201905061016c6000830184610139565b92915050565b60006020820190506101876000830184610148565b92915050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6101ce81610199565b81146101d957600080fd5b5056fea26469706673582212209b65723c798267de5df9d0ce5ba155ab39f74a8a4ffe0f2d6be9fabea085249564736f6c63430008000033";

export class SupportsInterfaceWithLookupMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SupportsInterfaceWithLookupMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<SupportsInterfaceWithLookupMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SupportsInterfaceWithLookupMock {
    return super.attach(address) as SupportsInterfaceWithLookupMock;
  }
  connect(signer: Signer): SupportsInterfaceWithLookupMock__factory {
    return super.connect(signer) as SupportsInterfaceWithLookupMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SupportsInterfaceWithLookupMockInterface {
    return new utils.Interface(
      _abi
    ) as SupportsInterfaceWithLookupMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SupportsInterfaceWithLookupMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SupportsInterfaceWithLookupMock;
  }
}