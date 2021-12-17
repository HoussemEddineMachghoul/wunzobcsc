/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SafeERC20Wrapper,
  SafeERC20WrapperInterface,
} from "../SafeERC20Wrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
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
        internalType: "uint256",
        name: "amount",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620012c0380380620012c0833981810160405281019062000037919062000095565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000123565b6000815190506200008f8162000109565b92915050565b600060208284031215620000a857600080fd5b6000620000b8848285016200007e565b91505092915050565b6000620000ce82620000e9565b9050919050565b6000620000e282620000c1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200011481620000d5565b81146200012057600080fd5b50565b61118d80620001336000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063811c34d31161005b578063811c34d3146100d65780638a4068dd146100e0578063b759f954146100ea578063de242ff4146101065761007d565b806310bad4cf1461008257806311e330b21461009e5780633ba93f26146100ba575b600080fd5b61009c60048036038101906100979190610bb7565b610124565b005b6100b860048036038101906100b39190610bb7565b610173565b005b6100d460048036038101906100cf9190610bb7565b6101c2565b005b6100de610250565b005b6100e86102a2565b005b61010460048036038101906100ff9190610bb7565b6102f0565b005b61010e61033f565b60405161011b9190610fcb565b60405180910390f35b61017060008260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166103f39092919063ffffffff16565b50565b6101bf60008260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166105549092919063ffffffff16565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633ba93f26826040518263ffffffff1660e01b815260040161021b9190610fcb565b600060405180830381600087803b15801561023557600080fd5b505af1158015610249573d6000803e3d6000fd5b5050505050565b6102a060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610675909392919063ffffffff16565b565b6102ee60008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166106fe9092919063ffffffff16565b565b61033c60008260008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166107849092919063ffffffff16565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e6000806040518363ffffffff1660e01b815260040161039e929190610e80565b60206040518083038186803b1580156103b657600080fd5b505afa1580156103ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ee9190610be0565b905090565b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610430929190610e80565b60206040518083038186803b15801561044857600080fd5b505afa15801561045c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104809190610be0565b9050818110156104c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bc90610f2b565b60405180910390fd5b6000828203905061054d8563095ea7b360e01b86846040516024016104eb929190610ee0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108e2565b5050505050565b6000818473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30866040518363ffffffff1660e01b8152600401610592929190610e80565b60206040518083038186803b1580156105aa57600080fd5b505afa1580156105be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e29190610be0565b6105ec9190611018565b905061066f8463095ea7b360e01b858460405160240161060d929190610ee0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108e2565b50505050565b6106f8846323b872dd60e01b85858560405160240161069693929190610ea9565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108e2565b50505050565b61077f8363a9059cbb60e01b848460405160240161071d929190610ee0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108e2565b505050565b600081148061081d575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016107cb929190610e80565b60206040518083038186803b1580156107e357600080fd5b505afa1580156107f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081b9190610be0565b145b61085c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085390610fab565b60405180910390fd5b6108dd8363095ea7b360e01b848460405160240161087b929190610ee0565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108e2565b505050565b6000610944826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166109a99092919063ffffffff16565b90506000815111156109a457808060200190518101906109649190610b8e565b6109a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099a90610f8b565b60405180910390fd5b5b505050565b60606109b884846000856109c1565b90509392505050565b606082471015610a06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fd90610f4b565b60405180910390fd5b610a0f85610ad5565b610a4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4590610f6b565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610a779190610e69565b60006040518083038185875af1925050503d8060008114610ab4576040519150601f19603f3d011682016040523d82523d6000602084013e610ab9565b606091505b5091509150610ac9828286610ae8565b92505050949350505050565b600080823b905060008111915050919050565b60608315610af857829050610b48565b600083511115610b0b5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3f9190610f09565b60405180910390fd5b9392505050565b600081519050610b5e81611129565b92915050565b600081359050610b7381611140565b92915050565b600081519050610b8881611140565b92915050565b600060208284031215610ba057600080fd5b6000610bae84828501610b4f565b91505092915050565b600060208284031215610bc957600080fd5b6000610bd784828501610b64565b91505092915050565b600060208284031215610bf257600080fd5b6000610c0084828501610b79565b91505092915050565b610c128161106e565b82525050565b6000610c2382610fe6565b610c2d8185610ffc565b9350610c3d8185602086016110b6565b80840191505092915050565b6000610c5482610ff1565b610c5e8185611007565b9350610c6e8185602086016110b6565b610c7781611118565b840191505092915050565b6000610c8f602983611007565b91507f5361666545524332303a2064656372656173656420616c6c6f77616e6365206260008301527f656c6f77207a65726f00000000000000000000000000000000000000000000006020830152604082019050919050565b6000610cf5602683611007565b91507f416464726573733a20696e73756666696369656e742062616c616e636520666f60008301527f722063616c6c00000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610d5b601d83611007565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b6000610d9b602a83611007565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b6000610e01603683611007565b91507f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008301527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006020830152604082019050919050565b610e63816110ac565b82525050565b6000610e758284610c18565b915081905092915050565b6000604082019050610e956000830185610c09565b610ea26020830184610c09565b9392505050565b6000606082019050610ebe6000830186610c09565b610ecb6020830185610c09565b610ed86040830184610e5a565b949350505050565b6000604082019050610ef56000830185610c09565b610f026020830184610e5a565b9392505050565b60006020820190508181036000830152610f238184610c49565b905092915050565b60006020820190508181036000830152610f4481610c82565b9050919050565b60006020820190508181036000830152610f6481610ce8565b9050919050565b60006020820190508181036000830152610f8481610d4e565b9050919050565b60006020820190508181036000830152610fa481610d8e565b9050919050565b60006020820190508181036000830152610fc481610df4565b9050919050565b6000602082019050610fe06000830184610e5a565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611023826110ac565b915061102e836110ac565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611063576110626110e9565b5b828201905092915050565b60006110798261108c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156110d45780820151818401526020810190506110b9565b838111156110e3576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b61113281611080565b811461113d57600080fd5b50565b611149816110ac565b811461115457600080fd5b5056fea2646970667358221220c81dccf45a6510d5e6c64dbfd302ca6a7cb24d068db52ec8ae9fcdfca9e75cfc64736f6c63430008000033";

export class SafeERC20Wrapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeERC20Wrapper> {
    return super.deploy(token, overrides || {}) as Promise<SafeERC20Wrapper>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  attach(address: string): SafeERC20Wrapper {
    return super.attach(address) as SafeERC20Wrapper;
  }
  connect(signer: Signer): SafeERC20Wrapper__factory {
    return super.connect(signer) as SafeERC20Wrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeERC20WrapperInterface {
    return new utils.Interface(_abi) as SafeERC20WrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeERC20Wrapper {
    return new Contract(address, _abi, signerOrProvider) as SafeERC20Wrapper;
  }
}