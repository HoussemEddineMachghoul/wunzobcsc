/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradeableBeacon,
  UpgradeableBeaconInterface,
} from "../UpgradeableBeacon";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610a4c380380610a4c833981810160405281019061003291906101ed565b61004e61004361006360201b60201c565b61006b60201b60201c565b61005d8161012f60201b60201c565b506102f6565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610142816101c560201b6103781760201c565b610181576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101789061027c565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080823b905060008111915050919050565b6000815190506101e7816102df565b92915050565b6000602082840312156101ff57600080fd5b600061020d848285016101d8565b91505092915050565b600061022360338361029c565b91507f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60008301527f6e206973206e6f74206120636f6e7472616374000000000000000000000000006020830152604082019050919050565b6000602082019050818103600083015261029581610216565b9050919050565b600082825260208201905092915050565b60006102b8826102bf565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6102e8816102ad565b81146102f357600080fd5b50565b610747806103056000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610078578063715018a6146100965780638da5cb5b146100a0578063f2fde38b146100be575b600080fd5b610076600480360381019061007191906104f8565b6100da565b005b6100806101a5565b60405161008d919061063c565b60405180910390f35b61009e6101cf565b005b6100a8610257565b6040516100b5919061063c565b60405180910390f35b6100d860048036038101906100d391906104f8565b610280565b005b6100e261038b565b73ffffffffffffffffffffffffffffffffffffffff16610100610257565b73ffffffffffffffffffffffffffffffffffffffff1614610156576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014d90610697565b60405180910390fd5b61015f81610393565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101d761038b565b73ffffffffffffffffffffffffffffffffffffffff166101f5610257565b73ffffffffffffffffffffffffffffffffffffffff161461024b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024290610697565b60405180910390fd5b610255600061041f565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61028861038b565b73ffffffffffffffffffffffffffffffffffffffff166102a6610257565b73ffffffffffffffffffffffffffffffffffffffff16146102fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f390610697565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561036c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161036390610657565b60405180910390fd5b6103758161041f565b50565b600080823b905060008111915050919050565b600033905090565b61039c81610378565b6103db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d290610677565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506104f2816106fa565b92915050565b60006020828403121561050a57600080fd5b6000610518848285016104e3565b91505092915050565b61052a816106c8565b82525050565b600061053d6026836106b7565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006105a36033836106b7565b91507f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60008301527f6e206973206e6f74206120636f6e7472616374000000000000000000000000006020830152604082019050919050565b60006106096020836106b7565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006020820190506106516000830184610521565b92915050565b6000602082019050818103600083015261067081610530565b9050919050565b6000602082019050818103600083015261069081610596565b9050919050565b600060208201905081810360008301526106b0816105fc565b9050919050565b600082825260208201905092915050565b60006106d3826106da565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610703816106c8565b811461070e57600080fd5b5056fea26469706673582212209889e9361790458765eed4cd797875787fdf44398c9617dd27b0be93f119556764736f6c63430008000033";

export class UpgradeableBeacon__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    implementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpgradeableBeacon> {
    return super.deploy(
      implementation_,
      overrides || {}
    ) as Promise<UpgradeableBeacon>;
  }
  getDeployTransaction(
    implementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(implementation_, overrides || {});
  }
  attach(address: string): UpgradeableBeacon {
    return super.attach(address) as UpgradeableBeacon;
  }
  connect(signer: Signer): UpgradeableBeacon__factory {
    return super.connect(signer) as UpgradeableBeacon__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeableBeaconInterface {
    return new utils.Interface(_abi) as UpgradeableBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeableBeacon {
    return new Contract(address, _abi, signerOrProvider) as UpgradeableBeacon;
  }
}
