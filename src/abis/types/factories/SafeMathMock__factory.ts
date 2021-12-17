/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMathMock, SafeMathMockInterface } from "../SafeMathMock";

const _abi = [
  {
    inputs: [],
    name: "addMemoryCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "mem",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "divMemoryCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "mem",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "errorMessage",
        type: "string",
      },
    ],
    name: "divWithMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "doAdd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "doDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "doMod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "doMul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "doSub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "modMemoryCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "mem",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "errorMessage",
        type: "string",
      },
    ],
    name: "modWithMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "mulMemoryCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "mem",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "subMemoryCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "mem",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "errorMessage",
        type: "string",
      },
    ],
    name: "subWithMessage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "tryAdd",
    outputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "tryDiv",
    outputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "tryMod",
    outputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "tryMul",
    outputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "trySub",
    outputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f0e806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80639f5cec89116100a2578063dcc721d211610071578063dcc721d21461035a578063fb1191981461038a578063fb24c860146103ba578063fb999ded146103d8578063fc0ce503146103f657610116565b80639f5cec89146102ab578063a155bd62146102db578063a29962b11461030b578063c460ae041461033c57610116565b80636f91e802116100e95780636f91e802146101dd578063736ecb18146101fb5780637e86d25c1461022c578063869f602f1461024a578063884557bf1461027a57610116565b80633449b5fb1461011b57806338dc08671461014b5780636281efa41461017c5780636c7ac637146101ad575b600080fd5b61013560048036038101906101309190610a9b565b610426565b6040516101429190610ba4565b60405180910390f35b61016560048036038101906101609190610a5f565b61043c565b604051610173929190610b59565b60405180910390f35b61019660048036038101906101919190610a5f565b610454565b6040516101a4929190610b59565b60405180910390f35b6101c760048036038101906101c29190610a5f565b61046c565b6040516101d49190610ba4565b60405180910390f35b6101e5610480565b6040516101f29190610ba4565b60405180910390f35b61021560048036038101906102109190610a5f565b6104c0565b604051610223929190610b59565b60405180910390f35b6102346104d8565b6040516102419190610ba4565b60405180910390f35b610264600480360381019061025f9190610a5f565b610518565b6040516102719190610ba4565b60405180910390f35b610294600480360381019061028f9190610a5f565b61052c565b6040516102a2929190610b59565b60405180910390f35b6102c560048036038101906102c09190610a9b565b610544565b6040516102d29190610ba4565b60405180910390f35b6102f560048036038101906102f09190610a9b565b61055a565b6040516103029190610ba4565b60405180910390f35b61032560048036038101906103209190610a5f565b610570565b604051610333929190610b59565b60405180910390f35b610344610588565b6040516103519190610ba4565b60405180910390f35b610374600480360381019061036f9190610a5f565b6105c8565b6040516103819190610ba4565b60405180910390f35b6103a4600480360381019061039f9190610a5f565b6105dc565b6040516103b19190610ba4565b60405180910390f35b6103c26105f0565b6040516103cf9190610ba4565b60405180910390f35b6103e0610630565b6040516103ed9190610ba4565b60405180910390f35b610410600480360381019061040b9190610a5f565b610670565b60405161041d9190610ba4565b60405180910390f35b6000610433848484610684565b90509392505050565b600080610449848461070c565b915091509250929050565b6000806104618484610769565b915091509250929050565b600061047883836107e3565b905092915050565b60008060209050604051915060005b818110156104b4576104a26001806107f9565b50806104ad90610da9565b905061048f565b50816040510391505090565b6000806104cd848461080f565b915091509250929050565b60008060209050604051915060005b8181101561050c576104fa60018061086c565b508061050590610da9565b90506104e7565b50816040510391505090565b600061052483836107f9565b905092915050565b6000806105398484610882565b915091509250929050565b60006105518484846108b1565b90509392505050565b6000610567848484610906565b90509392505050565b60008061057d848461098e565b915091509250929050565b60008060209050604051915060005b818110156105bc576105aa6001806109b6565b50806105b590610da9565b9050610597565b50816040510391505090565b60006105d483836109cc565b905092915050565b60006105e8838361086c565b905092915050565b60008060209050604051915060005b81811015610624576106126001806109cc565b508061061d90610da9565b90506105ff565b50816040510391505090565b60008060209050604051915060005b81811015610664576106526001806107e3565b508061065d90610da9565b905061063f565b50816040510391505090565b600061067c83836109b6565b905092915050565b600080831182906106cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c29190610b82565b60405180910390fd5b50828481610702577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0490509392505050565b60008060008314156107245760008091509150610762565b600183858161075c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b06915091505b9250929050565b60008060008414156107825760016000915091506107dc565b60008385029050838582816107c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b04146107d35760008092509250506107dc565b60018192509250505b9250929050565b600081836107f19190610d1d565b905092915050565b600081836108079190610df2565b905092915050565b60008060008314156108275760008091509150610865565b600183858161085f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b04915091505b9250929050565b6000818361087a9190610cc3565b905092915050565b60008060008385019050848110156108a15760008092509250506108aa565b60018192509250505b9250929050565b60008383111582906108f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f09190610b82565b60405180910390fd5b5082840390509392505050565b6000808311829061094d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109449190610b82565b60405180910390fd5b50828481610984577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b0690509392505050565b600080838311156109a557600080915091506109af565b6001838503915091505b9250929050565b600081836109c49190610c92565b905092915050565b600081836109da9190610c3c565b905092915050565b60006109f56109f084610bf0565b610bbf565b905082815260208101848484011115610a0d57600080fd5b610a18848285610d67565b509392505050565b600082601f830112610a3157600080fd5b8135610a418482602086016109e2565b91505092915050565b600081359050610a5981610ec1565b92915050565b60008060408385031215610a7257600080fd5b6000610a8085828601610a4a565b9250506020610a9185828601610a4a565b9150509250929050565b600080600060608486031215610ab057600080fd5b6000610abe86828701610a4a565b9350506020610acf86828701610a4a565b925050604084013567ffffffffffffffff811115610aec57600080fd5b610af886828701610a20565b9150509250925092565b610b0b81610d51565b82525050565b6000610b1c82610c20565b610b268185610c2b565b9350610b36818560208601610d76565b610b3f81610eb0565b840191505092915050565b610b5381610d5d565b82525050565b6000604082019050610b6e6000830185610b02565b610b7b6020830184610b4a565b9392505050565b60006020820190508181036000830152610b9c8184610b11565b905092915050565b6000602082019050610bb96000830184610b4a565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610be657610be5610e81565b5b8060405250919050565b600067ffffffffffffffff821115610c0b57610c0a610e81565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610c4782610d5d565b9150610c5283610d5d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c8757610c86610e23565b5b828201905092915050565b6000610c9d82610d5d565b9150610ca883610d5d565b925082610cb857610cb7610e52565b5b828204905092915050565b6000610cce82610d5d565b9150610cd983610d5d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610d1257610d11610e23565b5b828202905092915050565b6000610d2882610d5d565b9150610d3383610d5d565b925082821015610d4657610d45610e23565b5b828203905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610d94578082015181840152602081019050610d79565b83811115610da3576000848401525b50505050565b6000610db482610d5d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610de757610de6610e23565b5b600182019050919050565b6000610dfd82610d5d565b9150610e0883610d5d565b925082610e1857610e17610e52565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610eca81610d5d565b8114610ed557600080fd5b5056fea2646970667358221220e4fd045e6a2eca1016bb5beaa7fde846cb60e6e0fef8a6a3513e51d901deeee264736f6c63430008000033";

export class SafeMathMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeMathMock> {
    return super.deploy(overrides || {}) as Promise<SafeMathMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafeMathMock {
    return super.attach(address) as SafeMathMock;
  }
  connect(signer: Signer): SafeMathMock__factory {
    return super.connect(signer) as SafeMathMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeMathMockInterface {
    return new utils.Interface(_abi) as SafeMathMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMathMock {
    return new Contract(address, _abi, signerOrProvider) as SafeMathMock;
  }
}