/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimersBlockNumberImpl,
  TimersBlockNumberImplInterface,
} from "../TimersBlockNumberImpl";

const _abi = [
  {
    inputs: [],
    name: "getDeadline",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isExpired",
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
  {
    inputs: [],
    name: "isPending",
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
  {
    inputs: [],
    name: "isStarted",
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
  {
    inputs: [],
    name: "isUnset",
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
        internalType: "uint64",
        name: "timestamp",
        type: "uint64",
      },
    ],
    name: "setDeadline",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104cc806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635f8d96de1161005b5780635f8d96de146100dc5780639c30ad7e146100fa578063aebc048314610118578063d826f88f146101345761007d565b80632260fe3a146100825780632f13b60c146100a0578063544736e6146100be575b600080fd5b61008a61013e565b6040516100979190610429565b60405180910390f35b6100a861018c565b6040516100b59190610429565b60405180910390f35b6100c66101da565b6040516100d39190610429565b60405180910390f35b6100e4610228565b6040516100f19190610444565b60405180910390f35b610102610276565b60405161010f9190610429565b60405180910390f35b610132600480360381019061012d91906103e2565b6102c4565b005b61013c6102db565b005b600061018760006040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff16815250506102e7565b905090565b60006101d560006040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681525050610301565b905090565b600061022360006040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff168152505061032d565b905090565b600061027160006040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681525050610347565b905090565b60006102bf60006040518060200160405290816000820160009054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681525050610355565b905090565b6102d881600061036f90919063ffffffff16565b50565b6102e5600061039e565b565b600080826000015167ffffffffffffffff16149050919050565b600061030c8261032d565b8015610326575043826000015167ffffffffffffffff1611155b9050919050565b600080826000015167ffffffffffffffff16119050919050565b600081600001519050919050565b600043826000015167ffffffffffffffff16119050919050565b808260000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505050565b60008160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555050565b6000813590506103dc8161047f565b92915050565b6000602082840312156103f457600080fd5b6000610402848285016103cd565b91505092915050565b6104148161045f565b82525050565b6104238161046b565b82525050565b600060208201905061043e600083018461040b565b92915050565b6000602082019050610459600083018461041a565b92915050565b60008115159050919050565b600067ffffffffffffffff82169050919050565b6104888161046b565b811461049357600080fd5b5056fea26469706673582212202d5ab9e4234d6db0db23da7e076419efee85c1fd9104c05a2eafc3fa6baec12f64736f6c63430008000033";

export class TimersBlockNumberImpl__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimersBlockNumberImpl> {
    return super.deploy(overrides || {}) as Promise<TimersBlockNumberImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimersBlockNumberImpl {
    return super.attach(address) as TimersBlockNumberImpl;
  }
  connect(signer: Signer): TimersBlockNumberImpl__factory {
    return super.connect(signer) as TimersBlockNumberImpl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimersBlockNumberImplInterface {
    return new utils.Interface(_abi) as TimersBlockNumberImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimersBlockNumberImpl {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TimersBlockNumberImpl;
  }
}
