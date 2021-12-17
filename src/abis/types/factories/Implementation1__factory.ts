/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Implementation1,
  Implementation1Interface,
} from "../Implementation1";

const _abi = [
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
  "0x608060405234801561001057600080fd5b50610270806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063552410771461003b5780638129fc1c14610057575b600080fd5b61005560048036038101906100509190610159565b610061565b005b61005f61006b565b005b8060018190555050565b600060019054906101000a900460ff1680610091575060008054906101000a900460ff16155b6100d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100c7906101e8565b60405180910390fd5b60008060019054906101000a900460ff161590508015610120576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b80156101415760008060016101000a81548160ff0219169083151502179055505b50565b60008135905061015381610223565b92915050565b60006020828403121561016b57600080fd5b600061017984828501610144565b91505092915050565b600061018f602e83610208565b91507f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008301527f647920696e697469616c697a65640000000000000000000000000000000000006020830152604082019050919050565b6000602082019050818103600083015261020181610182565b9050919050565b600082825260208201905092915050565b6000819050919050565b61022c81610219565b811461023757600080fd5b5056fea26469706673582212209383589b828b6424a97e407073c840dc0342ee4d435b550e6b108da4fc04dcd464736f6c63430008000033";

export class Implementation1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Implementation1> {
    return super.deploy(overrides || {}) as Promise<Implementation1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Implementation1 {
    return super.attach(address) as Implementation1;
  }
  connect(signer: Signer): Implementation1__factory {
    return super.connect(signer) as Implementation1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Implementation1Interface {
    return new utils.Interface(_abi) as Implementation1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Implementation1 {
    return new Contract(address, _abi, signerOrProvider) as Implementation1;
  }
}
