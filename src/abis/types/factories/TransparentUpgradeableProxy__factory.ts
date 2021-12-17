/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162001991380380620019918339818101604052810190620000299190620006c6565b828160017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6200005d919062000a5f565b60001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b14620000b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b620000cd828260006200017760201b60201c565b505060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610460001c62000101919062000a5f565b60001b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b146200015d577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6200016e82620001ba60201b60201c565b50505062000b97565b62000188836200021860201b60201c565b600082511180620001965750805b15620001b557620001b383836200026f60201b6200034f1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620001eb620002a560201b60201c565b82604051620001fc9291906200090f565b60405180910390a162000215816200030960201b60201c565b50565b6200022981620003fa60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606200029d83836040518060600160405280602781526020016200196a60279139620004d060201b60201c565b905092915050565b6000620002e07fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b620005b460201b6200037c1760201c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200037c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003739062000960565b60405180910390fd5b80620003b67fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b620005b460201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6200041081620005be60201b620003861760201c565b62000452576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004499062000982565b60405180910390fd5b806200048c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620005b460201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060620004e384620005be60201b60201c565b62000525576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200051c90620009a4565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516200054f9190620008f6565b600060405180830381855af49150503d80600081146200058c576040519150601f19603f3d011682016040523d82523d6000602084013e62000591565b606091505b5091509150620005a9828286620005d160201b60201c565b925050509392505050565b6000819050919050565b600080823b905060008111915050919050565b60608315620005e35782905062000636565b600083511115620005f75782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200062d91906200093c565b60405180910390fd5b9392505050565b6000620006546200064e84620009fa565b620009c6565b9050828152602081018484840111156200066d57600080fd5b6200067a84828562000ad8565b509392505050565b600081519050620006938162000b7d565b92915050565b600082601f830112620006ab57600080fd5b8151620006bd8482602086016200063d565b91505092915050565b600080600060608486031215620006dc57600080fd5b6000620006ec8682870162000682565b9350506020620006ff8682870162000682565b925050604084015167ffffffffffffffff8111156200071d57600080fd5b6200072b8682870162000699565b9150509250925092565b620007408162000a9a565b82525050565b6000620007538262000a2d565b6200075f818562000a43565b93506200077181856020860162000ad8565b80840191505092915050565b60006200078a8262000a38565b62000796818562000a4e565b9350620007a881856020860162000ad8565b620007b38162000b6c565b840191505092915050565b6000620007cd60268362000a4e565b91507f455243313936373a206e65772061646d696e20697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b600062000835602d8362000a4e565b91507f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008301527f6f74206120636f6e7472616374000000000000000000000000000000000000006020830152604082019050919050565b60006200089d60268362000a4e565b91507f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008301527f6e747261637400000000000000000000000000000000000000000000000000006020830152604082019050919050565b600062000904828462000746565b915081905092915050565b600060408201905062000926600083018562000735565b62000935602083018462000735565b9392505050565b600060208201905081810360008301526200095881846200077d565b905092915050565b600060208201905081810360008301526200097b81620007be565b9050919050565b600060208201905081810360008301526200099d8162000826565b9050919050565b60006020820190508181036000830152620009bf816200088e565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715620009f057620009ef62000b3d565b5b8060405250919050565b600067ffffffffffffffff82111562000a185762000a1762000b3d565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600062000a6c8262000ace565b915062000a798362000ace565b92508282101562000a8f5762000a8e62000b0e565b5b828203905092915050565b600062000aa78262000aae565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101562000af857808201518184015260208101905062000adb565b8381111562000b08576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b62000b888162000a9a565b811462000b9457600080fd5b50565b610dc38062000ba76000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100675780634f1ef286146100905780635c60da1b146100ac5780638f283970146100d7578063f851a440146101005761005d565b3661005d5761005b61012b565b005b61006561012b565b005b34801561007357600080fd5b5061008e600480360381019061008991906108f2565b610145565b005b6100aa60048036038101906100a5919061091b565b6101ac565b005b3480156100b857600080fd5b506100c161024a565b6040516100ce9190610bc1565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f991906108f2565b6102a2565b005b34801561010c57600080fd5b506101156102f7565b6040516101229190610bc1565b60405180910390f35b610133610399565b61014361013e610419565b610428565b565b61014d61044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101a05761019b816040518060200160405280600081525060006104a5565b6101a9565b6101a861012b565b5b50565b6101b461044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023c576102378383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505060016104a5565b610245565b61024461012b565b5b505050565b600061025461044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102965761028f610419565b905061029f565b61029e61012b565b5b90565b6102aa61044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102eb576102e6816104d1565b6102f4565b6102f361012b565b5b50565b600061030161044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156103435761033c61044e565b905061034c565b61034b61012b565b5b90565b60606103748383604051806060016040528060278152602001610d676027913961051d565b905092915050565b6000819050919050565b600080823b905060008111915050919050565b6103a161044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561040f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040690610c87565b60405180910390fd5b6104176105ea565b565b60006104236105ec565b905090565b3660008037600080366000845af43d6000803e8060008114610449573d6000f35b3d6000fd5b600061047c7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104ae83610643565b6000825111806104bb5750805b156104cc576104ca838361034f565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104fa61044e565b82604051610509929190610bdc565b60405180910390a161051a81610692565b50565b606061052884610386565b610567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055e90610c67565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161058f9190610baa565b600060405180830381855af49150503d80600081146105ca576040519150601f19603f3d011682016040523d82523d6000602084013e6105cf565b606091505b50915091506105df828286610773565b925050509392505050565b565b600061061a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61064c816107da565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990610c27565b60405180910390fd5b8061072f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60608315610783578290506107d3565b6000835111156107965782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ca9190610c05565b60405180910390fd5b9392505050565b6107e381610386565b610822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081990610c47565b60405180910390fd5b8061084f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506108a281610d4f565b92915050565b60008083601f8401126108ba57600080fd5b8235905067ffffffffffffffff8111156108d357600080fd5b6020830191508360018202830111156108eb57600080fd5b9250929050565b60006020828403121561090457600080fd5b600061091284828501610893565b91505092915050565b60008060006040848603121561093057600080fd5b600061093e86828701610893565b935050602084013567ffffffffffffffff81111561095b57600080fd5b610967868287016108a8565b92509250509250925092565b61097c81610cd9565b82525050565b600061098d82610ca7565b6109978185610cbd565b93506109a7818560208601610d0b565b80840191505092915050565b60006109be82610cb2565b6109c88185610cc8565b93506109d8818560208601610d0b565b6109e181610d3e565b840191505092915050565b60006109f9602683610cc8565b91507f455243313936373a206e65772061646d696e20697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610a5f602d83610cc8565b91507f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008301527f6f74206120636f6e7472616374000000000000000000000000000000000000006020830152604082019050919050565b6000610ac5602683610cc8565b91507f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008301527f6e747261637400000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610b2b604283610cc8565b91507f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60008301527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760208301527f65740000000000000000000000000000000000000000000000000000000000006040830152606082019050919050565b6000610bb68284610982565b915081905092915050565b6000602082019050610bd66000830184610973565b92915050565b6000604082019050610bf16000830185610973565b610bfe6020830184610973565b9392505050565b60006020820190508181036000830152610c1f81846109b3565b905092915050565b60006020820190508181036000830152610c40816109ec565b9050919050565b60006020820190508181036000830152610c6081610a52565b9050919050565b60006020820190508181036000830152610c8081610ab8565b9050919050565b60006020820190508181036000830152610ca081610b1e565b9050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610ce482610ceb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015610d29578082015181840152602081019050610d0e565b83811115610d38576000848401525b50505050565b6000601f19601f8301169050919050565b610d5881610cd9565b8114610d6357600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220106126a1b50d7f5351fda421cc16b39c7223b2269014c3e48de4895c29051ff164736f6c63430008000033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}
