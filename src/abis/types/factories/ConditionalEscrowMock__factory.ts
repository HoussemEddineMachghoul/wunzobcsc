/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConditionalEscrowMock,
  ConditionalEscrowMockInterface,
} from "../ConditionalEscrowMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "depositsOf",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "setAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "payee",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "withdrawalAllowed",
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
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e758061010d6000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b14610126578063e3a9db1a14610151578063f2fde38b1461018e578063f340fa01146101b75761007b565b80634697f05d1461008057806351cff8d9146100a9578063685ca194146100d2578063715018a61461010f575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a291906109c4565b6101d3565b005b3480156100b557600080fd5b506100d060048036038101906100cb919061099b565b61022e565b005b3480156100de57600080fd5b506100f960048036038101906100f49190610972565b610282565b6040516101069190610c29565b60405180910390f35b34801561011b57600080fd5b506101246102d8565b005b34801561013257600080fd5b5061013b610360565b6040516101489190610c0e565b60405180910390f35b34801561015d57600080fd5b5061017860048036038101906101739190610972565b610389565b6040516101859190610ce4565b60405180910390f35b34801561019a57600080fd5b506101b560048036038101906101b09190610972565b6103d2565b005b6101d160048036038101906101cc9190610972565b6104ca565b005b80600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61023781610282565b610276576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026d90610ca4565b60405180910390fd5b61027f816105f3565b50565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6102e0610773565b73ffffffffffffffffffffffffffffffffffffffff166102fe610360565b73ffffffffffffffffffffffffffffffffffffffff1614610354576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034b90610cc4565b60405180910390fd5b61035e600061077b565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6103da610773565b73ffffffffffffffffffffffffffffffffffffffff166103f8610360565b73ffffffffffffffffffffffffffffffffffffffff161461044e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044590610cc4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b590610c44565b60405180910390fd5b6104c78161077b565b50565b6104d2610773565b73ffffffffffffffffffffffffffffffffffffffff166104f0610360565b73ffffffffffffffffffffffffffffffffffffffff1614610546576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053d90610cc4565b60405180910390fd5b600034905080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461059a9190610d1b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4826040516105e79190610ce4565b60405180910390a25050565b6105fb610773565b73ffffffffffffffffffffffffffffffffffffffff16610619610360565b73ffffffffffffffffffffffffffffffffffffffff161461066f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066690610cc4565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610721818373ffffffffffffffffffffffffffffffffffffffff1661083f90919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5826040516107679190610ce4565b60405180910390a25050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b80471015610882576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087990610c84565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516108a890610bf9565b60006040518083038185875af1925050503d80600081146108e5576040519150601f19603f3d011682016040523d82523d6000602084013e6108ea565b606091505b505090508061092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590610c64565b60405180910390fd5b505050565b60008135905061094281610dfa565b92915050565b60008135905061095781610e11565b92915050565b60008135905061096c81610e28565b92915050565b60006020828403121561098457600080fd5b600061099284828501610933565b91505092915050565b6000602082840312156109ad57600080fd5b60006109bb84828501610948565b91505092915050565b600080604083850312156109d757600080fd5b60006109e585828601610933565b92505060206109f68582860161095d565b9150509250929050565b610a0981610d71565b82525050565b610a1881610d95565b82525050565b6000610a2b602683610d0a565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610a91603a83610d0a565b91507f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008301527f6563697069656e74206d617920686176652072657665727465640000000000006020830152604082019050919050565b6000610af7601d83610d0a565b91507f416464726573733a20696e73756666696369656e742062616c616e63650000006000830152602082019050919050565b6000610b37603383610d0a565b91507f436f6e646974696f6e616c457363726f773a207061796565206973206e6f742060008301527f616c6c6f77656420746f207769746864726177000000000000000000000000006020830152604082019050919050565b6000610b9d602083610d0a565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000610bdd600083610cff565b9150600082019050919050565b610bf381610dc1565b82525050565b6000610c0482610bd0565b9150819050919050565b6000602082019050610c236000830184610a00565b92915050565b6000602082019050610c3e6000830184610a0f565b92915050565b60006020820190508181036000830152610c5d81610a1e565b9050919050565b60006020820190508181036000830152610c7d81610a84565b9050919050565b60006020820190508181036000830152610c9d81610aea565b9050919050565b60006020820190508181036000830152610cbd81610b2a565b9050919050565b60006020820190508181036000830152610cdd81610b90565b9050919050565b6000602082019050610cf96000830184610bea565b92915050565b600081905092915050565b600082825260208201905092915050565b6000610d2682610dc1565b9150610d3183610dc1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d6657610d65610dcb565b5b828201905092915050565b6000610d7c82610da1565b9050919050565b6000610d8e82610da1565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610e0381610d71565b8114610e0e57600080fd5b50565b610e1a81610d83565b8114610e2557600080fd5b50565b610e3181610d95565b8114610e3c57600080fd5b5056fea2646970667358221220dd99fe4a778b7402366a92aae294ff67cfb8da97ccddc7443a3dd4a07538695964736f6c63430008000033";

export class ConditionalEscrowMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConditionalEscrowMock> {
    return super.deploy(overrides || {}) as Promise<ConditionalEscrowMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ConditionalEscrowMock {
    return super.attach(address) as ConditionalEscrowMock;
  }
  connect(signer: Signer): ConditionalEscrowMock__factory {
    return super.connect(signer) as ConditionalEscrowMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConditionalEscrowMockInterface {
    return new utils.Interface(_abi) as ConditionalEscrowMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConditionalEscrowMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConditionalEscrowMock;
  }
}
