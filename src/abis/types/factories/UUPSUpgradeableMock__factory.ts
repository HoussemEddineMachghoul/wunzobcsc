/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UUPSUpgradeableMock,
  UUPSUpgradeableMockInterface,
} from "../UUPSUpgradeableMock";

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
        name: "newImplementation",
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
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
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
  "0x608060405234801561001057600080fd5b50610c74806100206000396000f3fe6080604052600436106100555760003560e01c80632baeceb71461005a5780633659cfe6146100715780634f1ef2861461009a5780639fa6a6e3146100b6578063d09de08a146100e1578063d826f88f146100f8575b600080fd5b34801561006657600080fd5b5061006f61010f565b005b34801561007d57600080fd5b5061009860048036038101906100939190610749565b61011b565b005b6100b460048036038101906100af9190610772565b610142565b005b3480156100c257600080fd5b506100cb61015b565b6040516100d89190610a94565b60405180910390f35b3480156100ed57600080fd5b506100f661016c565b005b34801561010457600080fd5b5061010d610178565b005b6101196000610184565b565b610124816101e0565b61013f816040518060200160405280600081525060006101e3565b50565b61014b826101e0565b610157828260016101e3565b5050565b600061016760006103b4565b905090565b61017660006103c2565b565b61018260006103d8565b565b600081600001549050600081116101d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c790610a14565b60405180910390fd5b6001810382600001819055505050565b50565b60006101ed6103e5565b90506101f88461043c565b6000835111806102055750815b156102165761021484846104f5565b505b60006102447f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b610522565b90508060000160009054906101000a900460ff166103ad5760018160000160006101000a81548160ff021916908315150217905550610310858360405160240161028e91906109d7565b6040516020818303038152906040527f3659cfe6000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506104f5565b5060008160000160006101000a81548160ff0219169083151502179055506103366103e5565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039a90610a34565b60405180910390fd5b6103ac8561052c565b5b5050505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6000816000018190555050565b60006104137f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61057b565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61044581610585565b610484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047b90610a54565b60405180910390fd5b806104b17f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61057b565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606061051a8383604051806060016040528060278152602001610c1860279139610598565b905092915050565b6000819050919050565b6105358161043c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6000819050919050565b600080823b905060008111915050919050565b60606105a384610585565b6105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990610a74565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161060a91906109c0565b600060405180830381855af49150503d8060008114610645576040519150601f19603f3d011682016040523d82523d6000602084013e61064a565b606091505b509150915061065a828286610665565b925050509392505050565b60608315610675578290506106c5565b6000835111156106885782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc91906109f2565b60405180910390fd5b9392505050565b60006106df6106da84610ae0565b610aaf565b9050828152602081018484840111156106f757600080fd5b610702848285610b7e565b509392505050565b60008135905061071981610c00565b92915050565b600082601f83011261073057600080fd5b81356107408482602086016106cc565b91505092915050565b60006020828403121561075b57600080fd5b60006107698482850161070a565b91505092915050565b6000806040838503121561078557600080fd5b60006107938582860161070a565b925050602083013567ffffffffffffffff8111156107b057600080fd5b6107bc8582860161071f565b9150509250929050565b6107cf81610b42565b82525050565b60006107e082610b10565b6107ea8185610b26565b93506107fa818560208601610b8d565b80840191505092915050565b600061081182610b1b565b61081b8185610b31565b935061082b818560208601610b8d565b61083481610bef565b840191505092915050565b600061084c601b83610b31565b91507f436f756e7465723a2064656372656d656e74206f766572666c6f7700000000006000830152602082019050919050565b600061088c602f83610b31565b91507f45524331393637557067726164653a207570677261646520627265616b73206660008301527f75727468657220757067726164657300000000000000000000000000000000006020830152604082019050919050565b60006108f2602d83610b31565b91507f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008301527f6f74206120636f6e7472616374000000000000000000000000000000000000006020830152604082019050919050565b6000610958602683610b31565b91507f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008301527f6e747261637400000000000000000000000000000000000000000000000000006020830152604082019050919050565b6109ba81610b74565b82525050565b60006109cc82846107d5565b915081905092915050565b60006020820190506109ec60008301846107c6565b92915050565b60006020820190508181036000830152610a0c8184610806565b905092915050565b60006020820190508181036000830152610a2d8161083f565b9050919050565b60006020820190508181036000830152610a4d8161087f565b9050919050565b60006020820190508181036000830152610a6d816108e5565b9050919050565b60006020820190508181036000830152610a8d8161094b565b9050919050565b6000602082019050610aa960008301846109b1565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610ad657610ad5610bc0565b5b8060405250919050565b600067ffffffffffffffff821115610afb57610afa610bc0565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610b4d82610b54565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610bab578082015181840152602081019050610b90565b83811115610bba576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610c0981610b42565b8114610c1457600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220f6274242e5b2ae29118709131e685e687c64a2ca56fa788cc96d6806077ae69764736f6c63430008000033";

export class UUPSUpgradeableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UUPSUpgradeableMock> {
    return super.deploy(overrides || {}) as Promise<UUPSUpgradeableMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UUPSUpgradeableMock {
    return super.attach(address) as UUPSUpgradeableMock;
  }
  connect(signer: Signer): UUPSUpgradeableMock__factory {
    return super.connect(signer) as UUPSUpgradeableMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UUPSUpgradeableMockInterface {
    return new utils.Interface(_abi) as UUPSUpgradeableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UUPSUpgradeableMock {
    return new Contract(address, _abi, signerOrProvider) as UUPSUpgradeableMock;
  }
}