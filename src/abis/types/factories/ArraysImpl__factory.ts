/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ArraysImpl, ArraysImplInterface } from "../ArraysImpl";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "element",
        type: "uint256",
      },
    ],
    name: "findUpperBound",
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
  "0x608060405234801561001057600080fd5b5060405161060238038061060283398181016040528101906100329190610164565b806000908051906020019061004892919061004f565b5050610252565b82805482825590600052602060002090810192821561008b579160200282015b8281111561008a57825182559160200191906001019061006f565b5b509050610098919061009c565b5090565b5b808211156100b557600081600090555060010161009d565b5090565b60006100cc6100c7846101d6565b6101a5565b905080838252602082019050828560208602820111156100eb57600080fd5b60005b8581101561011b5781610101888261014f565b8452602084019350602083019250506001810190506100ee565b5050509392505050565b600082601f83011261013657600080fd5b81516101468482602086016100b9565b91505092915050565b60008151905061015e8161023b565b92915050565b60006020828403121561017657600080fd5b600082015167ffffffffffffffff81111561019057600080fd5b61019c84828501610125565b91505092915050565b6000604051905081810181811067ffffffffffffffff821117156101cc576101cb61020c565b5b8060405250919050565b600067ffffffffffffffff8211156101f1576101f061020c565b5b602082029050602081019050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61024481610202565b811461024f57600080fd5b50565b6103a1806102616000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806333e3a58a14610030575b600080fd5b61004a600480360381019061004591906101de565b610060565b6040516100579190610216565b60405180910390f35b600061007682600061007d90919063ffffffff16565b9050919050565b60008083805490501415610094576000905061019d565b600080848054905090505b8082101561011e5760006100b383836101a3565b9050848682815481106100ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154111561010857809150610118565b6001816101159190610231565b92505b5061009f565b60008211801561017c5750838560018461013891906102b8565b8154811061016f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154145b156101975760018261018e91906102b8565b9250505061019d565b81925050505b92915050565b600060028284186101b49190610287565b8284166101c19190610231565b905092915050565b6000813590506101d881610354565b92915050565b6000602082840312156101f057600080fd5b60006101fe848285016101c9565b91505092915050565b610210816102ec565b82525050565b600060208201905061022b6000830184610207565b92915050565b600061023c826102ec565b9150610247836102ec565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561027c5761027b6102f6565b5b828201905092915050565b6000610292826102ec565b915061029d836102ec565b9250826102ad576102ac610325565b5b828204905092915050565b60006102c3826102ec565b91506102ce836102ec565b9250828210156102e1576102e06102f6565b5b828203905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b61035d816102ec565b811461036857600080fd5b5056fea2646970667358221220fe9fe4c957b493f7229e3f3407701689f69713dea9c7247582869f927392437364736f6c63430008000033";

export class ArraysImpl__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    array: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ArraysImpl> {
    return super.deploy(array, overrides || {}) as Promise<ArraysImpl>;
  }
  getDeployTransaction(
    array: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(array, overrides || {});
  }
  attach(address: string): ArraysImpl {
    return super.attach(address) as ArraysImpl;
  }
  connect(signer: Signer): ArraysImpl__factory {
    return super.connect(signer) as ArraysImpl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArraysImplInterface {
    return new utils.Interface(_abi) as ArraysImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArraysImpl {
    return new Contract(address, _abi, signerOrProvider) as ArraysImpl;
  }
}