/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MulticallTest, MulticallTestInterface } from "../MulticallTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract MulticallTokenMock",
        name: "multicallToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "testReturnValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a0e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063bc548f7614610030575b600080fd5b61004a600480360381019061004591906105b8565b61004c565b005b60008484905067ffffffffffffffff811115610091577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156100c457816020015b60608152602001906001900390816100af5790505b50905060005b858590508110156102485785858281811061010e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020160208101906101239190610525565b84848381811061015c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135604051602401610174929190610721565b6040516020818303038152906040527fa9059cbb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505082828151811061022a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508080610240906108db565b9150506100ca565b5060008673ffffffffffffffffffffffffffffffffffffffff1663ac9650d8836040518263ffffffff1660e01b8152600401610284919061074a565b600060405180830381600087803b15801561029e57600080fd5b505af11580156102b2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906102db919061054e565b905060005b815181101561035957818181518110610322577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015180602001905181019061033d919061058f565b61034657600080fd5b8080610351906108db565b9150506102e0565b5050505050505050565b60006103766103718461079d565b61076c565b9050808382526020820190508260005b858110156103b6578151850161039c88826104e6565b845260208401935060208301925050600181019050610386565b5050509392505050565b60006103d36103ce846107c9565b61076c565b9050828152602081018484840111156103eb57600080fd5b6103f68482856108a8565b509392505050565b60008135905061040d81610993565b92915050565b60008083601f84011261042557600080fd5b8235905067ffffffffffffffff81111561043e57600080fd5b60208301915083602082028301111561045657600080fd5b9250929050565b600082601f83011261046e57600080fd5b815161047e848260208601610363565b91505092915050565b60008083601f84011261049957600080fd5b8235905067ffffffffffffffff8111156104b257600080fd5b6020830191508360208202830111156104ca57600080fd5b9250929050565b6000815190506104e0816109aa565b92915050565b600082601f8301126104f757600080fd5b81516105078482602086016103c0565b91505092915050565b60008135905061051f816109c1565b92915050565b60006020828403121561053757600080fd5b6000610545848285016103fe565b91505092915050565b60006020828403121561056057600080fd5b600082015167ffffffffffffffff81111561057a57600080fd5b6105868482850161045d565b91505092915050565b6000602082840312156105a157600080fd5b60006105af848285016104d1565b91505092915050565b6000806000806000606086880312156105d057600080fd5b60006105de88828901610510565b955050602086013567ffffffffffffffff8111156105fb57600080fd5b61060788828901610413565b9450945050604086013567ffffffffffffffff81111561062657600080fd5b61063288828901610487565b92509250509295509295909350565b600061064d83836106d9565b905092915050565b61065e8161084e565b82525050565b600061066f82610809565b610679818561082c565b93508360208202850161068b856107f9565b8060005b858110156106c757848403895281516106a88582610641565b94506106b38361081f565b925060208a0199505060018101905061068f565b50829750879550505050505092915050565b60006106e482610814565b6106ee818561083d565b93506106fe8185602086016108a8565b61070781610982565b840191505092915050565b61071b8161089e565b82525050565b60006040820190506107366000830185610655565b6107436020830184610712565b9392505050565b600060208201905081810360008301526107648184610664565b905092915050565b6000604051905081810181811067ffffffffffffffff8211171561079357610792610953565b5b8060405250919050565b600067ffffffffffffffff8211156107b8576107b7610953565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156107e4576107e3610953565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006108598261087e565b9050919050565b60008115159050919050565b60006108778261084e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156108c65780820151818401526020810190506108ab565b838111156108d5576000848401525b50505050565b60006108e68261089e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561091957610918610924565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61099c8161084e565b81146109a757600080fd5b50565b6109b381610860565b81146109be57600080fd5b50565b6109ca8161086c565b81146109d557600080fd5b5056fea2646970667358221220a18fb7297317300291c71351b8766eea19f439832883c3fe427369e3d64b333264736f6c63430008000033";

export class MulticallTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MulticallTest> {
    return super.deploy(overrides || {}) as Promise<MulticallTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MulticallTest {
    return super.attach(address) as MulticallTest;
  }
  connect(signer: Signer): MulticallTest__factory {
    return super.connect(signer) as MulticallTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallTestInterface {
    return new utils.Interface(_abi) as MulticallTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MulticallTest {
    return new Contract(address, _abi, signerOrProvider) as MulticallTest;
  }
}