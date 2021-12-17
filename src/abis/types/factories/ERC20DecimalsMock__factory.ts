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
import type {
  ERC20DecimalsMock,
  ERC20DecimalsMockInterface,
} from "../ERC20DecimalsMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200171f3803806200171f8339818101604052810190620000379190620001c0565b828281600390805190602001906200005192919062000087565b5080600490805190602001906200006a92919062000087565b5050508060ff1660808160ff1660f81b81525050505050620003a0565b8280546200009590620002f2565b90600052602060002090601f016020900481019282620000b9576000855562000105565b82601f10620000d457805160ff191683800117855562000105565b8280016001018555821562000105579182015b8281111562000104578251825591602001919060010190620000e7565b5b50905062000114919062000118565b5090565b5b808211156200013357600081600090555060010162000119565b5090565b60006200014e62000148846200027c565b62000248565b9050828152602081018484840111156200016757600080fd5b62000174848285620002bc565b509392505050565b600082601f8301126200018e57600080fd5b8151620001a084826020860162000137565b91505092915050565b600081519050620001ba8162000386565b92915050565b600080600060608486031215620001d657600080fd5b600084015167ffffffffffffffff811115620001f157600080fd5b620001ff868287016200017c565b935050602084015167ffffffffffffffff8111156200021d57600080fd5b6200022b868287016200017c565b92505060406200023e86828701620001a9565b9150509250925092565b6000604051905081810181811067ffffffffffffffff8211171562000272576200027162000357565b5b8060405250919050565b600067ffffffffffffffff8211156200029a576200029962000357565b5b601f19601f8301169050602081019050919050565b600060ff82169050919050565b60005b83811015620002dc578082015181840152602081019050620002bf565b83811115620002ec576000848401525b50505050565b600060028204905060018216806200030b57607f821691505b6020821081141562000322576200032162000328565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200039181620002af565b81146200039d57600080fd5b50565b60805160f81c611360620003bf600039600061042c01526113606000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190611029565b60405180910390f35b6100e660048036038101906100e19190610ca2565b610308565b6040516100f3919061100e565b60405180910390f35b610104610326565b604051610111919061112b565b60405180910390f35b610134600480360381019061012f9190610c53565b610330565b604051610141919061100e565b60405180910390f35b610152610428565b60405161015f9190611146565b60405180910390f35b610182600480360381019061017d9190610ca2565b610450565b60405161018f919061100e565b60405180910390f35b6101b260048036038101906101ad9190610bee565b6104fc565b6040516101bf919061112b565b60405180910390f35b6101d0610544565b6040516101dd9190611029565b60405180910390f35b61020060048036038101906101fb9190610ca2565b6105d6565b60405161020d919061100e565b60405180910390f35b610230600480360381019061022b9190610ca2565b6106c1565b60405161023d919061100e565b60405180910390f35b610260600480360381019061025b9190610c17565b6106df565b60405161026d919061112b565b60405180910390f35b6060600380546102859061125b565b80601f01602080910402602001604051908101604052809291908181526020018280546102b19061125b565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610766565b848461076e565b6001905092915050565b6000600254905090565b600061033d848484610939565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff906110ab565b60405180910390fd5b61041c85610414610766565b85840361076e565b60019150509392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60006104f261045d610766565b84846001600061046b610766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ed919061117d565b61076e565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546105539061125b565b80601f016020809104026020016040519081016040528092919081815260200182805461057f9061125b565b80156105cc5780601f106105a1576101008083540402835291602001916105cc565b820191906000526020600020905b8154815290600101906020018083116105af57829003601f168201915b5050505050905090565b600080600160006105e5610766565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156106a2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106999061110b565b60405180910390fd5b6106b66106ad610766565b8585840361076e565b600191505092915050565b60006106d56106ce610766565b8484610939565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d5906110eb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561084e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108459061106b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161092c919061112b565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a0906110cb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a109061104b565b60405180910390fd5b610a24838383610bba565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610aaa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa19061108b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b3d919061117d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ba1919061112b565b60405180910390a3610bb4848484610bbf565b50505050565b505050565b505050565b600081359050610bd3816112fc565b92915050565b600081359050610be881611313565b92915050565b600060208284031215610c0057600080fd5b6000610c0e84828501610bc4565b91505092915050565b60008060408385031215610c2a57600080fd5b6000610c3885828601610bc4565b9250506020610c4985828601610bc4565b9150509250929050565b600080600060608486031215610c6857600080fd5b6000610c7686828701610bc4565b9350506020610c8786828701610bc4565b9250506040610c9886828701610bd9565b9150509250925092565b60008060408385031215610cb557600080fd5b6000610cc385828601610bc4565b9250506020610cd485828601610bd9565b9150509250929050565b610ce7816111e5565b82525050565b6000610cf882611161565b610d02818561116c565b9350610d12818560208601611228565b610d1b816112eb565b840191505092915050565b6000610d3360238361116c565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610d9960228361116c565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610dff60268361116c565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610e6560288361116c565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610ecb60258361116c565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610f3160248361116c565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610f9760258361116c565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b610ff981611211565b82525050565b6110088161121b565b82525050565b60006020820190506110236000830184610cde565b92915050565b600060208201905081810360008301526110438184610ced565b905092915050565b6000602082019050818103600083015261106481610d26565b9050919050565b6000602082019050818103600083015261108481610d8c565b9050919050565b600060208201905081810360008301526110a481610df2565b9050919050565b600060208201905081810360008301526110c481610e58565b9050919050565b600060208201905081810360008301526110e481610ebe565b9050919050565b6000602082019050818103600083015261110481610f24565b9050919050565b6000602082019050818103600083015261112481610f8a565b9050919050565b60006020820190506111406000830184610ff0565b92915050565b600060208201905061115b6000830184610fff565b92915050565b600081519050919050565b600082825260208201905092915050565b600061118882611211565b915061119383611211565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156111c8576111c761128d565b5b828201905092915050565b60006111de826111f1565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561124657808201518184015260208101905061122b565b83811115611255576000848401525b50505050565b6000600282049050600182168061127357607f821691505b60208210811415611287576112866112bc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611305816111d3565b811461131057600080fd5b50565b61131c81611211565b811461132757600080fd5b5056fea2646970667358221220b4a93ceb467bbb1c054ab422e322db3909bddabba2649983161942a8cdcb0dfd64736f6c63430008000033";

export class ERC20DecimalsMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20DecimalsMock> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<ERC20DecimalsMock>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): ERC20DecimalsMock {
    return super.attach(address) as ERC20DecimalsMock;
  }
  connect(signer: Signer): ERC20DecimalsMock__factory {
    return super.connect(signer) as ERC20DecimalsMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20DecimalsMockInterface {
    return new utils.Interface(_abi) as ERC20DecimalsMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20DecimalsMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20DecimalsMock;
  }
}