/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccessControlEnumerableMock,
  AccessControlEnumerableMockInterface,
} from "../AccessControlEnumerableMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleId",
        type: "bytes32",
      },
    ],
    name: "senderProtected",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "roleId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "adminRoleId",
        type: "bytes32",
      },
    ],
    name: "setRoleAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  "0x60806040523480156200001157600080fd5b50620000366000801b6200002a6200003c60201b60201c565b6200004460201b60201c565b620002d2565b600033905090565b6200005b82826200008c60201b620004651760201c565b620000878160016000858152602001908152602001600020620000a260201b620004731790919060201c565b505050565b6200009e8282620000da60201b60201c565b5050565b6000620000d2836000018373ffffffffffffffffffffffffffffffffffffffff1660001b620001cb60201b60201c565b905092915050565b620000ec82826200024560201b60201c565b620001c757600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200016c6200003c60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000620001df8383620002af60201b60201c565b6200023a5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506200023f565b600090505b92915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b6115d780620002e26000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80634b9304a4116100715780634b9304a4146101625780639010d07c1461017e57806391d14854146101ae578063a217fddf146101de578063ca15c873146101fc578063d547741f1461022c576100a9565b806301ffc9a7146100ae5780631e4e0091146100de578063248a9ca3146100fa5780632f2ff15d1461012a57806336568abe14610146575b600080fd5b6100c860048036038101906100c39190611022565b610248565b6040516100d5919061126c565b60405180910390f35b6100f860048036038101906100f39190610faa565b6102c2565b005b610114600480360381019061010f9190610f45565b6102d0565b6040516101219190611287565b60405180910390f35b610144600480360381019061013f9190610f6e565b6102ef565b005b610160600480360381019061015b9190610f6e565b610323565b005b61017c60048036038101906101779190610f45565b610357565b005b61019860048036038101906101939190610fe6565b61036d565b6040516101a59190611251565b60405180910390f35b6101c860048036038101906101c39190610f6e565b61039c565b6040516101d5919061126c565b60405180910390f35b6101e6610406565b6040516101f39190611287565b60405180910390f35b61021660048036038101906102119190610f45565b61040d565b6040516102239190611304565b60405180910390f35b61024660048036038101906102419190610f6e565b610431565b005b60007f5a05180f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806102bb57506102ba826104a3565b5b9050919050565b6102cc828261051d565b5050565b6000806000838152602001908152602001600020600101549050919050565b6102f98282610578565b61031e816001600085815260200190815260200160002061047390919063ffffffff16565b505050565b61032d82826105a1565b610352816001600085815260200190815260200160002061062490919063ffffffff16565b505050565b8061036981610364610654565b61065c565b5050565b600061039482600160008681526020019081526020016000206106f990919063ffffffff16565b905092915050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b600061042a60016000848152602001908152602001600020610713565b9050919050565b61043b8282610728565b610460816001600085815260200190815260200160002061062490919063ffffffff16565b505050565b61046f8282610751565b5050565b600061049b836000018373ffffffffffffffffffffffffffffffffffffffff1660001b610831565b905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105165750610515826108a1565b5b9050919050565b6000610528836102d0565b905081600080858152602001908152602001600020600101819055508181847fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff60405160405180910390a4505050565b610581826102d0565b6105928161058d610654565b61065c565b61059c8383610751565b505050565b6105a9610654565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d906112e4565b60405180910390fd5b610620828261090b565b5050565b600061064c836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6109ec565b905092915050565b600033905090565b610666828261039c565b6106f55761068b8173ffffffffffffffffffffffffffffffffffffffff166014610b72565b6106998360001c6020610b72565b6040516020016106aa929190611217565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ec91906112a2565b60405180910390fd5b5050565b60006107088360000183610e6c565b60001c905092915050565b600061072182600001610ebd565b9050919050565b610731826102d0565b6107428161073d610654565b61065c565b61074c838361090b565b505050565b61075b828261039c565b61082d57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506107d2610654565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600061083d8383610ece565b61089657826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061089b565b600090505b92915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610915828261039c565b156109e857600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061098d610654565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60008083600101600084815260200190815260200160002054905060008114610b66576000600182610a1e91906113f6565b9050600060018660000180549050610a3691906113f6565b9050818114610af1576000866000018281548110610a7d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110610ac7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480610b2b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610b6c565b60009150505b92915050565b606060006002836002610b85919061139c565b610b8f9190611346565b67ffffffffffffffff811115610bce577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610c005781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610c5e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610ce8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610d28919061139c565b610d329190611346565b90505b6001811115610e1e577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610d9a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110610dd7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610e17906114db565b9050610d35565b5060008414610e62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e59906112c4565b60405180910390fd5b8091505092915050565b6000826000018281548110610eaa577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b600081359050610f0081611545565b92915050565b600081359050610f158161155c565b92915050565b600081359050610f2a81611573565b92915050565b600081359050610f3f8161158a565b92915050565b600060208284031215610f5757600080fd5b6000610f6584828501610f06565b91505092915050565b60008060408385031215610f8157600080fd5b6000610f8f85828601610f06565b9250506020610fa085828601610ef1565b9150509250929050565b60008060408385031215610fbd57600080fd5b6000610fcb85828601610f06565b9250506020610fdc85828601610f06565b9150509250929050565b60008060408385031215610ff957600080fd5b600061100785828601610f06565b925050602061101885828601610f30565b9150509250929050565b60006020828403121561103457600080fd5b600061104284828501610f1b565b91505092915050565b6110548161142a565b82525050565b6110638161143c565b82525050565b61107281611448565b82525050565b60006110838261131f565b61108d818561132a565b935061109d8185602086016114a8565b6110a681611534565b840191505092915050565b60006110bc8261131f565b6110c6818561133b565b93506110d68185602086016114a8565b80840191505092915050565b60006110ef60208361132a565b91507f537472696e67733a20686578206c656e67746820696e73756666696369656e746000830152602082019050919050565b600061112f60178361133b565b91507f416363657373436f6e74726f6c3a206163636f756e74200000000000000000006000830152601782019050919050565b600061116f60118361133b565b91507f206973206d697373696e6720726f6c65200000000000000000000000000000006000830152601182019050919050565b60006111af602f8361132a565b91507f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008301527f20726f6c657320666f722073656c6600000000000000000000000000000000006020830152604082019050919050565b6112118161149e565b82525050565b600061122282611122565b915061122e82856110b1565b915061123982611162565b915061124582846110b1565b91508190509392505050565b6000602082019050611266600083018461104b565b92915050565b6000602082019050611281600083018461105a565b92915050565b600060208201905061129c6000830184611069565b92915050565b600060208201905081810360008301526112bc8184611078565b905092915050565b600060208201905081810360008301526112dd816110e2565b9050919050565b600060208201905081810360008301526112fd816111a2565b9050919050565b60006020820190506113196000830184611208565b92915050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006113518261149e565b915061135c8361149e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561139157611390611505565b5b828201905092915050565b60006113a78261149e565b91506113b28361149e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113eb576113ea611505565b5b828202905092915050565b60006114018261149e565b915061140c8361149e565b92508282101561141f5761141e611505565b5b828203905092915050565b60006114358261147e565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156114c65780820151818401526020810190506114ab565b838111156114d5576000848401525b50505050565b60006114e68261149e565b915060008214156114fa576114f9611505565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b61154e8161142a565b811461155957600080fd5b50565b61156581611448565b811461157057600080fd5b50565b61157c81611452565b811461158757600080fd5b50565b6115938161149e565b811461159e57600080fd5b5056fea264697066735822122066d43c140b7fcd9d8ebdbf12c6e6efff37194281bc10e5277b62645c1c2a9fc064736f6c63430008000033";

export class AccessControlEnumerableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccessControlEnumerableMock> {
    return super.deploy(
      overrides || {}
    ) as Promise<AccessControlEnumerableMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessControlEnumerableMock {
    return super.attach(address) as AccessControlEnumerableMock;
  }
  connect(signer: Signer): AccessControlEnumerableMock__factory {
    return super.connect(signer) as AccessControlEnumerableMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlEnumerableMockInterface {
    return new utils.Interface(_abi) as AccessControlEnumerableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlEnumerableMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccessControlEnumerableMock;
  }
}
