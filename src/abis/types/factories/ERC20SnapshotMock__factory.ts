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
  ERC20SnapshotMock,
  ERC20SnapshotMockInterface,
} from "../ERC20SnapshotMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "initialAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialBalance",
        type: "uint256",
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
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Snapshot",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
    name: "snapshot",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
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
  "0x60806040523480156200001157600080fd5b5060405162002a3f38038062002a3f833981810160405281019062000037919062000660565b838381600390805190602001906200005192919062000510565b5080600490805190602001906200006a92919062000510565b5050506200007f82826200008960201b60201c565b5050505062000a0b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f39062000751565b60405180910390fd5b62000110600083836200020260201b60201c565b806002600082825462000124919062000808565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200017b919062000808565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001e2919062000773565b60405180910390a3620001fe60008383620002fd60201b60201c565b5050565b6200021a8383836200030260201b620009081760201c565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620002775762000261826200030760201b60201c565b620002716200036a60201b60201c565b620002f8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002d457620002be836200030760201b60201c565b620002ce6200036a60201b60201c565b620002f7565b620002e5836200030760201b60201c565b620002f6826200030760201b60201c565b5b5b505050565b505050565b505050565b62000367600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200035b836200038e60201b60201c565b620003d660201b60201c565b50565b6200038c6006620003806200046260201b60201c565b620003d660201b60201c565b565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000620003e86200046c60201b60201c565b905080620003ff846000016200048a60201b60201c565b10156200045d5782600001819080600181540180825580915050600190039060005260206000200160009091909190915055826001018290806001815401808255809150506001900390600052602060002001600090919091909150555b505050565b6000600254905090565b60006200048560086200050260201b6200090d1760201c565b905090565b60008082805490501415620004a35760009050620004fd565b8160018380549050620004b7919062000865565b81548110620004ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490505b919050565b600081600001549050919050565b8280546200051e9062000914565b90600052602060002090601f0160209004810192826200054257600085556200058e565b82601f106200055d57805160ff19168380011785556200058e565b828001600101855582156200058e579182015b828111156200058d57825182559160200191906001019062000570565b5b5090506200059d9190620005a1565b5090565b5b80821115620005bc576000816000905550600101620005a2565b5090565b6000620005d7620005d184620007c4565b62000790565b905082815260208101848484011115620005f057600080fd5b620005fd848285620008de565b509392505050565b6000815190506200061681620009d7565b92915050565b600082601f8301126200062e57600080fd5b815162000640848260208601620005c0565b91505092915050565b6000815190506200065a81620009f1565b92915050565b600080600080608085870312156200067757600080fd5b600085015167ffffffffffffffff8111156200069257600080fd5b620006a0878288016200061c565b945050602085015167ffffffffffffffff811115620006be57600080fd5b620006cc878288016200061c565b9350506040620006df8782880162000605565b9250506060620006f28782880162000649565b91505092959194509250565b60006200070d601f83620007f7565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b6200074b81620008d4565b82525050565b600060208201905081810360008301526200076c81620006fe565b9050919050565b60006020820190506200078a600083018462000740565b92915050565b6000604051905081810181811067ffffffffffffffff82111715620007ba57620007b9620009a8565b5b8060405250919050565b600067ffffffffffffffff821115620007e257620007e1620009a8565b5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b60006200081582620008d4565b91506200082283620008d4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200085a57620008596200094a565b5b828201905092915050565b60006200087282620008d4565b91506200087f83620008d4565b9250828210156200089557620008946200094a565b5b828203905092915050565b6000620008ad82620008b4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620008fe578082015181840152602081019050620008e1565b838111156200090e576000848401525b50505050565b600060028204905060018216806200092d57607f821691505b6020821081141562000944576200094362000979565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620009e281620008a0565b8114620009ee57600080fd5b50565b620009fc81620008d4565b811462000a0857600080fd5b50565b6120248062000a1b6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a08231116100975780639dc29fac116100665780639dc29fac146102c3578063a457c2d7146102df578063a9059cbb1461030f578063dd62ed3e1461033f57610100565b806370a082311461023b57806395d89b411461026b5780639711715a14610289578063981b24d01461029357610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef5780634ee2cd7e1461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d61036f565b60405161011a9190611bb9565b60405180910390f35b61013d6004803603810190610138919061167d565b610401565b60405161014a9190611b9e565b60405180910390f35b61015b61041f565b6040516101689190611d5b565b60405180910390f35b61018b6004803603810190610186919061162e565b610429565b6040516101989190611b9e565b60405180910390f35b6101a9610521565b6040516101b69190611d76565b60405180910390f35b6101d960048036038101906101d4919061167d565b61052a565b6040516101e69190611b9e565b60405180910390f35b6102096004803603810190610204919061167d565b6105d6565b005b6102256004803603810190610220919061167d565b6105e4565b6040516102329190611d5b565b60405180910390f35b610255600480360381019061025091906115c9565b610654565b6040516102629190611d5b565b60405180910390f35b61027361069c565b6040516102809190611bb9565b60405180910390f35b61029161072e565b005b6102ad60048036038101906102a891906116b9565b610739565b6040516102ba9190611d5b565b60405180910390f35b6102dd60048036038101906102d8919061167d565b61076a565b005b6102f960048036038101906102f4919061167d565b610778565b6040516103069190611b9e565b60405180910390f35b6103296004803603810190610324919061167d565b610863565b6040516103369190611b9e565b60405180910390f35b610359600480360381019061035491906115f2565b610881565b6040516103669190611d5b565b60405180910390f35b60606003805461037e90611ef0565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa90611ef0565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b5050505050905090565b600061041561040e61091b565b8484610923565b6001905092915050565b6000600254905090565b6000610436848484610aee565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061048161091b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f890611c7b565b60405180910390fd5b6105158561050d61091b565b858403610923565b60019150509392505050565b60006012905090565b60006105cc61053761091b565b84846001600061054561091b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546105c79190611dad565b610923565b6001905092915050565b6105e08282610d6f565b5050565b600080600061063184600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610ecf565b91509150816106485761064385610654565b61064a565b805b9250505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546106ab90611ef0565b80601f01602080910402602001604051908101604052809291908181526020018280546106d790611ef0565b80156107245780601f106106f957610100808354040283529160200191610724565b820191906000526020600020905b81548152906001019060200180831161070757829003601f168201915b5050505050905090565b610736610feb565b50565b6000806000610749846006610ecf565b915091508161075f5761075a61041f565b610761565b805b92505050919050565b6107748282611041565b5050565b6000806001600061078761091b565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083b90611d1b565b60405180910390fd5b61085861084f61091b565b85858403610923565b600191505092915050565b600061087761087061091b565b8484610aee565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b505050565b600081600001549050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610993576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098a90611cdb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fa90611c3b565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610ae19190611d5b565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5590611cbb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bce576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc590611bfb565b60405180910390fd5b610bd9838383611218565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5690611c5b565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cf29190611dad565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d569190611d5b565b60405180910390a3610d698484846112d2565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ddf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd690611d3b565b60405180910390fd5b610deb60008383611218565b8060026000828254610dfd9190611dad565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e529190611dad565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610eb79190611d5b565b60405180910390a3610ecb600083836112d2565b5050565b60008060008411610f15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0c90611cfb565b60405180910390fd5b610f1d6112d7565b841115610f5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5690611bdb565b60405180910390fd5b6000610f7785856000016112e890919063ffffffff16565b90508360000180549050811415610f95576000809250925050610fe4565b6001846001018281548110610fd3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015492509250505b9250929050565b6000610ff7600861140e565b60006110016112d7565b90507f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb67816040516110329190611d5b565b60405180910390a18091505090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a890611c9b565b60405180910390fd5b6110bd82600083611218565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611143576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113a90611c1b565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461119a9190611e34565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111ff9190611d5b565b60405180910390a3611213836000846112d2565b505050565b611223838383610908565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561126e5761126182611424565b611269611477565b6112cd565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112b9576112ac83611424565b6112b4611477565b6112cc565b6112c283611424565b6112cb82611424565b5b5b505050565b505050565b60006112e3600861090d565b905090565b600080838054905014156112ff5760009050611408565b600080848054905090505b8082101561138957600061131e838361148b565b90508486828154811061135a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154111561137357809150611383565b6001816113809190611dad565b92505b5061130a565b6000821180156113e7575083856001846113a39190611e34565b815481106113da577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154145b15611402576001826113f99190611e34565b92505050611408565b81925050505b92915050565b6001816000016000828254019250508190555050565b611474600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061146f83610654565b6114b1565b50565b611489600661148461041f565b6114b1565b565b6000600282841861149c9190611e03565b8284166114a99190611dad565b905092915050565b60006114bb6112d7565b9050806114ca8460000161152c565b10156115275782600001819080600181540180825580915050600190039060005260206000200160009091909190915055826001018290806001815401808255809150506001900390600052602060002001600090919091909150555b505050565b60008082805490501415611543576000905061159a565b81600183805490506115559190611e34565b8154811061158c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490505b919050565b6000813590506115ae81611fc0565b92915050565b6000813590506115c381611fd7565b92915050565b6000602082840312156115db57600080fd5b60006115e98482850161159f565b91505092915050565b6000806040838503121561160557600080fd5b60006116138582860161159f565b92505060206116248582860161159f565b9150509250929050565b60008060006060848603121561164357600080fd5b60006116518682870161159f565b93505060206116628682870161159f565b9250506040611673868287016115b4565b9150509250925092565b6000806040838503121561169057600080fd5b600061169e8582860161159f565b92505060206116af858286016115b4565b9150509250929050565b6000602082840312156116cb57600080fd5b60006116d9848285016115b4565b91505092915050565b6116eb81611e7a565b82525050565b60006116fc82611d91565b6117068185611d9c565b9350611716818560208601611ebd565b61171f81611faf565b840191505092915050565b6000611737601d83611d9c565b91507f4552433230536e617073686f743a206e6f6e6578697374656e742069640000006000830152602082019050919050565b6000611777602383611d9c565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006117dd602283611d9c565b91507f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008301527f63650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611843602283611d9c565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006118a9602683611d9c565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061190f602883611d9c565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206160008301527f6c6c6f77616e63650000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611975602183611d9c565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006119db602583611d9c565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a41602483611d9c565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611aa7601683611d9c565b91507f4552433230536e617073686f743a2069642069732030000000000000000000006000830152602082019050919050565b6000611ae7602583611d9c565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b4d601f83611d9c565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b611b8981611ea6565b82525050565b611b9881611eb0565b82525050565b6000602082019050611bb360008301846116e2565b92915050565b60006020820190508181036000830152611bd381846116f1565b905092915050565b60006020820190508181036000830152611bf48161172a565b9050919050565b60006020820190508181036000830152611c148161176a565b9050919050565b60006020820190508181036000830152611c34816117d0565b9050919050565b60006020820190508181036000830152611c5481611836565b9050919050565b60006020820190508181036000830152611c748161189c565b9050919050565b60006020820190508181036000830152611c9481611902565b9050919050565b60006020820190508181036000830152611cb481611968565b9050919050565b60006020820190508181036000830152611cd4816119ce565b9050919050565b60006020820190508181036000830152611cf481611a34565b9050919050565b60006020820190508181036000830152611d1481611a9a565b9050919050565b60006020820190508181036000830152611d3481611ada565b9050919050565b60006020820190508181036000830152611d5481611b40565b9050919050565b6000602082019050611d706000830184611b80565b92915050565b6000602082019050611d8b6000830184611b8f565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611db882611ea6565b9150611dc383611ea6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611df857611df7611f22565b5b828201905092915050565b6000611e0e82611ea6565b9150611e1983611ea6565b925082611e2957611e28611f51565b5b828204905092915050565b6000611e3f82611ea6565b9150611e4a83611ea6565b925082821015611e5d57611e5c611f22565b5b828203905092915050565b6000611e7382611e86565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611edb578082015181840152602081019050611ec0565b83811115611eea576000848401525b50505050565b60006002820490506001821680611f0857607f821691505b60208210811415611f1c57611f1b611f80565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b611fc981611e68565b8114611fd457600080fd5b50565b611fe081611ea6565b8114611feb57600080fd5b5056fea2646970667358221220342e46841c9e8300f86ebfa6dbcc42071cd568860faeac7d2cb84fcf1fe9808b64736f6c63430008000033";

export class ERC20SnapshotMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20SnapshotMock> {
    return super.deploy(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    ) as Promise<ERC20SnapshotMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialAccount: string,
    initialBalance: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialAccount,
      initialBalance,
      overrides || {}
    );
  }
  attach(address: string): ERC20SnapshotMock {
    return super.attach(address) as ERC20SnapshotMock;
  }
  connect(signer: Signer): ERC20SnapshotMock__factory {
    return super.connect(signer) as ERC20SnapshotMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20SnapshotMockInterface {
    return new utils.Interface(_abi) as ERC20SnapshotMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20SnapshotMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20SnapshotMock;
  }
}
