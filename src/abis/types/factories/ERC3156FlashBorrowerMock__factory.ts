/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC3156FlashBorrowerMock,
  ERC3156FlashBorrowerMockInterface,
} from "../ERC3156FlashBorrowerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "enableReturn",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "enableApprove",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "BalanceOf",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TotalSupply",
    type: "event",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onFlashLoan",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610c07380380610c078339818101604052810190610032919061006c565b801515608081151560f81b8152505081151560a081151560f81b8152505050506100cb565b600081519050610066816100b4565b92915050565b6000806040838503121561007f57600080fd5b600061008d85828601610057565b925050602061009e85828601610057565b9150509250929050565b60008115159050919050565b6100bd816100a8565b81146100c857600080fd5b50565b60805160f81c60a05160f81c610b116100f66000396000610331015260006102710152610b116000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806323e30c8b14610030575b600080fd5b61004a60048036038101906100459190610619565b610060565b60405161005791906108cc565b60405180910390f35b60008573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461009a57600080fd5b7f6ff2acfcb07917b1e80e53f0fe390b467b1151d15b38730a6e08397799c05a8b86308873ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016100f69190610851565b60206040518083038186803b15801561010e57600080fd5b505afa158015610122573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014691906106d4565b6040516101559392919061086c565b60405180910390a17f7249fd4c03cce09b30a13d77804b198e2647c0ccd59eadf4de4e7c16099badc5868773ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101c557600080fd5b505afa1580156101d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101fd91906106d4565b60405161020b9291906108a3565b60405180910390a1600083839050111561026f5761026d8684848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061038b565b505b7f00000000000000000000000000000000000000000000000000000000000000001561032f578573ffffffffffffffffffffffffffffffffffffffff1663095ea7b38786886102be919061097b565b6040518363ffffffff1660e01b81526004016102db9291906108a3565b602060405180830381600087803b1580156102f557600080fd5b505af1158015610309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032d91906106ab565b505b7f000000000000000000000000000000000000000000000000000000000000000061035d576000801b61037f565b7f439148f0bbc682ca079e46d6e2c2f0c1e3b820f1a291b069d8882abf8cf18dd95b90509695505050505050565b60606103cd83836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c656400008152506103d5565b905092915050565b60606103e484846000856103ed565b90509392505050565b606082471015610432576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042990610909565b60405180910390fd5b61043b85610501565b61047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047190610929565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516104a3919061083a565b60006040518083038185875af1925050503d80600081146104e0576040519150601f19603f3d011682016040523d82523d6000602084013e6104e5565b606091505b50915091506104f5828286610514565b92505050949350505050565b600080823b905060008111915050919050565b6060831561052457829050610574565b6000835111156105375782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056b91906108e7565b60405180910390fd5b9392505050565b60008135905061058a81610a96565b92915050565b60008151905061059f81610aad565b92915050565b60008083601f8401126105b757600080fd5b8235905067ffffffffffffffff8111156105d057600080fd5b6020830191508360018202830111156105e857600080fd5b9250929050565b6000813590506105fe81610ac4565b92915050565b60008151905061061381610ac4565b92915050565b60008060008060008060a0878903121561063257600080fd5b600061064089828a0161057b565b965050602061065189828a0161057b565b955050604061066289828a016105ef565b945050606061067389828a016105ef565b935050608087013567ffffffffffffffff81111561069057600080fd5b61069c89828a016105a5565b92509250509295509295509295565b6000602082840312156106bd57600080fd5b60006106cb84828501610590565b91505092915050565b6000602082840312156106e657600080fd5b60006106f484828501610604565b91505092915050565b610706816109d1565b82525050565b610715816109ef565b82525050565b600061072682610949565b610730818561095f565b9350610740818560208601610a23565b80840191505092915050565b600061075782610954565b610761818561096a565b9350610771818560208601610a23565b61077a81610a85565b840191505092915050565b600061079260268361096a565b91507f416464726573733a20696e73756666696369656e742062616c616e636520666f60008301527f722063616c6c00000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006107f8601d8361096a565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b61083481610a19565b82525050565b6000610846828461071b565b915081905092915050565b600060208201905061086660008301846106fd565b92915050565b600060608201905061088160008301866106fd565b61088e60208301856106fd565b61089b604083018461082b565b949350505050565b60006040820190506108b860008301856106fd565b6108c5602083018461082b565b9392505050565b60006020820190506108e1600083018461070c565b92915050565b60006020820190508181036000830152610901818461074c565b905092915050565b6000602082019050818103600083015261092281610785565b9050919050565b60006020820190508181036000830152610942816107eb565b9050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600061098682610a19565b915061099183610a19565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156109c6576109c5610a56565b5b828201905092915050565b60006109dc826109f9565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015610a41578082015181840152602081019050610a26565b83811115610a50576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b610a9f816109d1565b8114610aaa57600080fd5b50565b610ab6816109e3565b8114610ac157600080fd5b50565b610acd81610a19565b8114610ad857600080fd5b5056fea26469706673582212200b5bfa4a421712dba3f2b35f9aacdf2105edf3cd154b2ca6be6b95058a1e863664736f6c63430008000033";

export class ERC3156FlashBorrowerMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    enableReturn: boolean,
    enableApprove: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC3156FlashBorrowerMock> {
    return super.deploy(
      enableReturn,
      enableApprove,
      overrides || {}
    ) as Promise<ERC3156FlashBorrowerMock>;
  }
  getDeployTransaction(
    enableReturn: boolean,
    enableApprove: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      enableReturn,
      enableApprove,
      overrides || {}
    );
  }
  attach(address: string): ERC3156FlashBorrowerMock {
    return super.attach(address) as ERC3156FlashBorrowerMock;
  }
  connect(signer: Signer): ERC3156FlashBorrowerMock__factory {
    return super.connect(signer) as ERC3156FlashBorrowerMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC3156FlashBorrowerMockInterface {
    return new utils.Interface(_abi) as ERC3156FlashBorrowerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC3156FlashBorrowerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC3156FlashBorrowerMock;
  }
}
