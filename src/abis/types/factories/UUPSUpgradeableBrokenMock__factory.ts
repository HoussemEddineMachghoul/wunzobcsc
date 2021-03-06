/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UUPSUpgradeableBrokenMock,
  UUPSUpgradeableBrokenMockInterface,
} from "../UUPSUpgradeableBrokenMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
    name: "current",
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
    name: "decrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610495806100206000396000f3fe6080604052600436106100555760003560e01c80632baeceb71461005a5780633659cfe6146100715780634f1ef2861461009a5780639fa6a6e3146100b6578063d09de08a146100e1578063d826f88f146100f8575b600080fd5b34801561006657600080fd5b5061006f61010f565b005b34801561007d57600080fd5b5061009860048036038101906100939190610255565b61011b565b005b6100b460048036038101906100af919061027e565b61011e565b005b3480156100c257600080fd5b506100cb610122565b6040516100d89190610341565b60405180910390f35b3480156100ed57600080fd5b506100f6610133565b005b34801561010457600080fd5b5061010d61013f565b005b610119600061014b565b565b50565b5050565b600061012e60006101a7565b905090565b61013d60006101b5565b565b61014960006101cb565b565b60008160000154905060008111610197576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018e90610321565b60405180910390fd5b6001810382600001819055505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000816000018190555050565b60006101eb6101e68461038d565b61035c565b90508281526020810184848401111561020357600080fd5b61020e84828561040a565b509392505050565b60008135905061022581610448565b92915050565b600082601f83011261023c57600080fd5b813561024c8482602086016101d8565b91505092915050565b60006020828403121561026757600080fd5b600061027584828501610216565b91505092915050565b6000806040838503121561029157600080fd5b600061029f85828601610216565b925050602083013567ffffffffffffffff8111156102bc57600080fd5b6102c88582860161022b565b9150509250929050565b60006102df601b836103bd565b91507f436f756e7465723a2064656372656d656e74206f766572666c6f7700000000006000830152602082019050919050565b61031b81610400565b82525050565b6000602082019050818103600083015261033a816102d2565b9050919050565b60006020820190506103566000830184610312565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561038357610382610419565b5b8060405250919050565b600067ffffffffffffffff8211156103a8576103a7610419565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b60006103d9826103e0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610451816103ce565b811461045c57600080fd5b5056fea2646970667358221220f96458c4910126ebb43c21c3405ab346ccb80029e09828c422da19d016f32c1864736f6c63430008000033";

export class UUPSUpgradeableBrokenMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UUPSUpgradeableBrokenMock> {
    return super.deploy(overrides || {}) as Promise<UUPSUpgradeableBrokenMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UUPSUpgradeableBrokenMock {
    return super.attach(address) as UUPSUpgradeableBrokenMock;
  }
  connect(signer: Signer): UUPSUpgradeableBrokenMock__factory {
    return super.connect(signer) as UUPSUpgradeableBrokenMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UUPSUpgradeableBrokenMockInterface {
    return new utils.Interface(_abi) as UUPSUpgradeableBrokenMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSUpgradeableBrokenMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UUPSUpgradeableBrokenMock;
  }
}
