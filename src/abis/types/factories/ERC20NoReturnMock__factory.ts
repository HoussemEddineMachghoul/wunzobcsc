/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20NoReturnMock,
  ERC20NoReturnMockInterface,
} from "../ERC20NoReturnMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
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
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allowance_",
        type: "uint256",
      },
    ],
    name: "setAllowance",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103a3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063095ea7b31461005c57806323b872dd146100785780633ba93f2614610094578063a9059cbb146100b0578063dd62ed3e146100cc575b600080fd5b61007660048036038101906100719190610274565b6100fc565b005b610092600480360381019061008d9190610225565b610108565b005b6100ae60048036038101906100a991906102b0565b610115565b005b6100ca60048036038101906100c59190610274565b610162565b005b6100e660048036038101906100e191906101e9565b61016e565b6040516100f391906102e8565b60405180910390f35b60006001819055505050565b6000600181905550505050565b806000806101216101b7565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60006001819055505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b6000813590506101ce8161033f565b92915050565b6000813590506101e381610356565b92915050565b600080604083850312156101fc57600080fd5b600061020a858286016101bf565b925050602061021b858286016101bf565b9150509250929050565b60008060006060848603121561023a57600080fd5b6000610248868287016101bf565b9350506020610259868287016101bf565b925050604061026a868287016101d4565b9150509250925092565b6000806040838503121561028757600080fd5b6000610295858286016101bf565b92505060206102a6858286016101d4565b9150509250929050565b6000602082840312156102c257600080fd5b60006102d0848285016101d4565b91505092915050565b6102e281610335565b82525050565b60006020820190506102fd60008301846102d9565b92915050565b600061030e82610315565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61034881610303565b811461035357600080fd5b50565b61035f81610335565b811461036a57600080fd5b5056fea2646970667358221220decd31d9def0e2dbcaaaf9ff16dc6bec39ce0471dc24e469f83df728876bb4b464736f6c63430008000033";

export class ERC20NoReturnMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20NoReturnMock> {
    return super.deploy(overrides || {}) as Promise<ERC20NoReturnMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20NoReturnMock {
    return super.attach(address) as ERC20NoReturnMock;
  }
  connect(signer: Signer): ERC20NoReturnMock__factory {
    return super.connect(signer) as ERC20NoReturnMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20NoReturnMockInterface {
    return new utils.Interface(_abi) as ERC20NoReturnMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20NoReturnMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20NoReturnMock;
  }
}
