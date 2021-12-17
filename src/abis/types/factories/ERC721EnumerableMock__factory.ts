/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721EnumerableMock,
  ERC721EnumerableMockInterface,
} from "../ERC721EnumerableMock";

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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "address",
        name: "owner",
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
    name: "baseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newBaseTokenURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
  "0x60806040523480156200001157600080fd5b506040516200360638038062003606833981810160405281019062000037919062000197565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b50505050506200033b565b8280546200008390620002a7565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c62000136846200023e565b6200020a565b9050828152602081018484840111156200015557600080fd5b6200016284828562000271565b509392505050565b600082601f8301126200017c57600080fd5b81516200018e84826020860162000125565b91505092915050565b60008060408385031215620001ab57600080fd5b600083015167ffffffffffffffff811115620001c657600080fd5b620001d4858286016200016a565b925050602083015167ffffffffffffffff811115620001f257600080fd5b62000200858286016200016a565b9150509250929050565b6000604051905081810181811067ffffffffffffffff821117156200023457620002336200030c565b5b8060405250919050565b600067ffffffffffffffff8211156200025c576200025b6200030c565b5b601f19601f8301169050602081019050919050565b60005b838110156200029157808201518184015260208101905062000274565b83811115620002a1576000848401525b50505050565b60006002820490506001821680620002c057607f821691505b60208210811415620002d757620002d6620002dd565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6132bb806200034b6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80634f6ccce7116100c357806395d89b411161007c57806395d89b41146103c0578063a1448194146103de578063a22cb465146103fa578063b88d4fde14610416578063c87b56dd14610432578063e985e9c5146104625761014d565b80634f6ccce7146102da57806355f804b31461030a5780636352211e146103265780636c0360eb1461035657806370a08231146103745780638832e6e3146103a45761014d565b806323b872dd1161011557806323b872dd1461020a5780632f745c591461022657806340c10f191461025657806342842e0e1461027257806342966c681461028e5780634f558e79146102aa5761014d565b806301ffc9a71461015257806306fdde0314610182578063081812fc146101a0578063095ea7b3146101d057806318160ddd146101ec575b600080fd5b61016c6004803603810190610167919061243a565b610492565b6040516101799190612c43565b60405180910390f35b61018a61050c565b6040516101979190612c5e565b60405180910390f35b6101ba60048036038101906101b591906124d1565b61059e565b6040516101c79190612bdc565b60405180910390f35b6101ea60048036038101906101e59190612397565b610623565b005b6101f461073b565b6040516102019190612e80565b60405180910390f35b610224600480360381019061021f9190612291565b610748565b005b610240600480360381019061023b9190612397565b6107a8565b60405161024d9190612e80565b60405180910390f35b610270600480360381019061026b9190612397565b61084d565b005b61028c60048036038101906102879190612291565b61085b565b005b6102a860048036038101906102a391906124d1565b61087b565b005b6102c460048036038101906102bf91906124d1565b610887565b6040516102d19190612c43565b60405180910390f35b6102f460048036038101906102ef91906124d1565b610899565b6040516103019190612e80565b60405180910390f35b610324600480360381019061031f919061248c565b610930565b005b610340600480360381019061033b91906124d1565b610946565b60405161034d9190612bdc565b60405180910390f35b61035e6109f8565b60405161036b9190612c5e565b60405180910390f35b61038e6004803603810190610389919061222c565b610a07565b60405161039b9190612e80565b60405180910390f35b6103be60048036038101906103b991906123d3565b610abf565b005b6103c8610acf565b6040516103d59190612c5e565b60405180910390f35b6103f860048036038101906103f39190612397565b610b61565b005b610414600480360381019061040f919061235b565b610b6f565b005b610430600480360381019061042b91906122e0565b610cf0565b005b61044c600480360381019061044791906124d1565b610d52565b6040516104599190612c5e565b60405180910390f35b61047c60048036038101906104779190612255565b610df9565b6040516104899190612c43565b60405180910390f35b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610505575061050482610e8d565b5b9050919050565b60606000805461051b906130b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610547906130b0565b80156105945780601f1061056957610100808354040283529160200191610594565b820191906000526020600020905b81548152906001019060200180831161057757829003601f168201915b5050505050905090565b60006105a982610f6f565b6105e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105df90612dc0565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061062e82610946565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561069f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069690612e20565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106be610fdb565b73ffffffffffffffffffffffffffffffffffffffff1614806106ed57506106ec816106e7610fdb565b610df9565b5b61072c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072390612d40565b60405180910390fd5b6107368383610fe3565b505050565b6000600880549050905090565b610759610753610fdb565b8261109c565b610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f90612e40565b60405180910390fd5b6107a383838361117a565b505050565b60006107b383610a07565b82106107f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107eb90612c80565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b61085782826113d6565b5050565b61087683838360405180602001604052806000815250610cf0565b505050565b610884816115a4565b50565b600061089282610f6f565b9050919050565b60006108a361073b565b82106108e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108db90612e60565b60405180910390fd5b6008828154811061091e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b8181600a919061094192919061206e565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156109ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e690612d80565b60405180910390fd5b80915050919050565b6060610a026116b5565b905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6f90612d60565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610aca838383611747565b505050565b606060018054610ade906130b0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b0a906130b0565b8015610b575780601f10610b2c57610100808354040283529160200191610b57565b820191906000526020600020905b815481529060010190602001808311610b3a57829003601f168201915b5050505050905090565b610b6b82826117a2565b5050565b610b77610fdb565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610be5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdc90612d00565b60405180910390fd5b8060056000610bf2610fdb565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610c9f610fdb565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ce49190612c43565b60405180910390a35050565b610d01610cfb610fdb565b8361109c565b610d40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3790612e40565b60405180910390fd5b610d4c848484846117c0565b50505050565b6060610d5d82610f6f565b610d9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9390612e00565b60405180910390fd5b6000610da66116b5565b90506000815111610dc65760405180602001604052806000815250610df1565b80610dd08461181c565b604051602001610de1929190612bb8565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f5857507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610f685750610f67826119c9565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661105683610946565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006110a782610f6f565b6110e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110dd90612d20565b60405180910390fd5b60006110f183610946565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061116057508373ffffffffffffffffffffffffffffffffffffffff166111488461059e565b73ffffffffffffffffffffffffffffffffffffffff16145b8061117157506111708185610df9565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661119a82610946565b73ffffffffffffffffffffffffffffffffffffffff16146111f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e790612de0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611260576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125790612ce0565b60405180910390fd5b61126b838383611a33565b611276600082610fe3565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112c69190612fc6565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461131d9190612f3f565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611446576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143d90612da0565b60405180910390fd5b61144f81610f6f565b1561148f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148690612cc0565b60405180910390fd5b61149b60008383611a33565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114eb9190612f3f565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006115af82610946565b90506115bd81600084611a33565b6115c8600083610fe3565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116189190612fc6565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6060600a80546116c4906130b0565b80601f01602080910402602001604051908101604052809291908181526020018280546116f0906130b0565b801561173d5780601f106117125761010080835404028352916020019161173d565b820191906000526020600020905b81548152906001019060200180831161172057829003601f168201915b5050505050905090565b61175183836113d6565b61175e6000848484611b47565b61179d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179490612ca0565b60405180910390fd5b505050565b6117bc828260405180602001604052806000815250611747565b5050565b6117cb84848461117a565b6117d784848484611b47565b611816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180d90612ca0565b60405180910390fd5b50505050565b60606000821415611864576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506119c4565b600082905060005b6000821461189657808061187f906130e2565b915050600a8261188f9190612f95565b915061186c565b60008167ffffffffffffffff8111156118d8577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561190a5781602001600182028036833780820191505090505b5090505b600085146119bd576001826119239190612fc6565b9150600a85611932919061312b565b603061193e9190612f3f565b60f81b81838151811061197a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856119b69190612f95565b945061190e565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611a3e838383611cde565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a8157611a7c81611ce3565b611ac0565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611abf57611abe8382611d2c565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b0357611afe81611e99565b611b42565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611b4157611b408282611fdc565b5b5b505050565b6000611b688473ffffffffffffffffffffffffffffffffffffffff1661205b565b15611cd1578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611b91610fdb565b8786866040518563ffffffff1660e01b8152600401611bb39493929190612bf7565b602060405180830381600087803b158015611bcd57600080fd5b505af1925050508015611bfe57506040513d601f19601f82011682018060405250810190611bfb9190612463565b60015b611c81573d8060008114611c2e576040519150601f19603f3d011682016040523d82523d6000602084013e611c33565b606091505b50600081511415611c79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c7090612ca0565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611cd6565b600190505b949350505050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611d3984610a07565b611d439190612fc6565b9050600060076000848152602001908152602001600020549050818114611e28576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050611ead9190612fc6565b9050600060096000848152602001908152602001600020549050600060088381548110611f03577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060088381548110611f4b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480611fc0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611fe783610a07565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600080823b905060008111915050919050565b82805461207a906130b0565b90600052602060002090601f01602090048101928261209c57600085556120e3565b82601f106120b557803560ff19168380011785556120e3565b828001600101855582156120e3579182015b828111156120e25782358255916020019190600101906120c7565b5b5090506120f091906120f4565b5090565b5b8082111561210d5760008160009055506001016120f5565b5090565b600061212461211f84612ecc565b612e9b565b90508281526020810184848401111561213c57600080fd5b61214784828561306e565b509392505050565b60008135905061215e81613229565b92915050565b60008135905061217381613240565b92915050565b60008135905061218881613257565b92915050565b60008151905061219d81613257565b92915050565b600082601f8301126121b457600080fd5b81356121c4848260208601612111565b91505092915050565b60008083601f8401126121df57600080fd5b8235905067ffffffffffffffff8111156121f857600080fd5b60208301915083600182028301111561221057600080fd5b9250929050565b6000813590506122268161326e565b92915050565b60006020828403121561223e57600080fd5b600061224c8482850161214f565b91505092915050565b6000806040838503121561226857600080fd5b60006122768582860161214f565b92505060206122878582860161214f565b9150509250929050565b6000806000606084860312156122a657600080fd5b60006122b48682870161214f565b93505060206122c58682870161214f565b92505060406122d686828701612217565b9150509250925092565b600080600080608085870312156122f657600080fd5b60006123048782880161214f565b94505060206123158782880161214f565b935050604061232687828801612217565b925050606085013567ffffffffffffffff81111561234357600080fd5b61234f878288016121a3565b91505092959194509250565b6000806040838503121561236e57600080fd5b600061237c8582860161214f565b925050602061238d85828601612164565b9150509250929050565b600080604083850312156123aa57600080fd5b60006123b88582860161214f565b92505060206123c985828601612217565b9150509250929050565b6000806000606084860312156123e857600080fd5b60006123f68682870161214f565b935050602061240786828701612217565b925050604084013567ffffffffffffffff81111561242457600080fd5b612430868287016121a3565b9150509250925092565b60006020828403121561244c57600080fd5b600061245a84828501612179565b91505092915050565b60006020828403121561247557600080fd5b60006124838482850161218e565b91505092915050565b6000806020838503121561249f57600080fd5b600083013567ffffffffffffffff8111156124b957600080fd5b6124c5858286016121cd565b92509250509250929050565b6000602082840312156124e357600080fd5b60006124f184828501612217565b91505092915050565b61250381612ffa565b82525050565b6125128161300c565b82525050565b600061252382612efc565b61252d8185612f12565b935061253d81856020860161307d565b61254681613218565b840191505092915050565b600061255c82612f07565b6125668185612f23565b935061257681856020860161307d565b61257f81613218565b840191505092915050565b600061259582612f07565b61259f8185612f34565b93506125af81856020860161307d565b80840191505092915050565b60006125c8602b83612f23565b91507f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008301527f74206f6620626f756e64730000000000000000000000000000000000000000006020830152604082019050919050565b600061262e603283612f23565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b6000612694601c83612f23565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b60006126d4602483612f23565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061273a601983612f23565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b600061277a602c83612f23565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006127e0603883612f23565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b6000612846602a83612f23565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b60006128ac602983612f23565b91507f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008301527f656e7420746f6b656e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000612912602083612f23565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b6000612952602c83612f23565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006129b8602983612f23565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000612a1e602f83612f23565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b6000612a84602183612f23565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612aea603183612f23565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b6000612b50602c83612f23565b91507f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008301527f7574206f6620626f756e647300000000000000000000000000000000000000006020830152604082019050919050565b612bb281613064565b82525050565b6000612bc4828561258a565b9150612bd0828461258a565b91508190509392505050565b6000602082019050612bf160008301846124fa565b92915050565b6000608082019050612c0c60008301876124fa565b612c1960208301866124fa565b612c266040830185612ba9565b8181036060830152612c388184612518565b905095945050505050565b6000602082019050612c586000830184612509565b92915050565b60006020820190508181036000830152612c788184612551565b905092915050565b60006020820190508181036000830152612c99816125bb565b9050919050565b60006020820190508181036000830152612cb981612621565b9050919050565b60006020820190508181036000830152612cd981612687565b9050919050565b60006020820190508181036000830152612cf9816126c7565b9050919050565b60006020820190508181036000830152612d198161272d565b9050919050565b60006020820190508181036000830152612d398161276d565b9050919050565b60006020820190508181036000830152612d59816127d3565b9050919050565b60006020820190508181036000830152612d7981612839565b9050919050565b60006020820190508181036000830152612d998161289f565b9050919050565b60006020820190508181036000830152612db981612905565b9050919050565b60006020820190508181036000830152612dd981612945565b9050919050565b60006020820190508181036000830152612df9816129ab565b9050919050565b60006020820190508181036000830152612e1981612a11565b9050919050565b60006020820190508181036000830152612e3981612a77565b9050919050565b60006020820190508181036000830152612e5981612add565b9050919050565b60006020820190508181036000830152612e7981612b43565b9050919050565b6000602082019050612e956000830184612ba9565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612ec257612ec16131e9565b5b8060405250919050565b600067ffffffffffffffff821115612ee757612ee66131e9565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612f4a82613064565b9150612f5583613064565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612f8a57612f8961315c565b5b828201905092915050565b6000612fa082613064565b9150612fab83613064565b925082612fbb57612fba61318b565b5b828204905092915050565b6000612fd182613064565b9150612fdc83613064565b925082821015612fef57612fee61315c565b5b828203905092915050565b600061300582613044565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561309b578082015181840152602081019050613080565b838111156130aa576000848401525b50505050565b600060028204905060018216806130c857607f821691505b602082108114156130dc576130db6131ba565b5b50919050565b60006130ed82613064565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156131205761311f61315c565b5b600182019050919050565b600061313682613064565b915061314183613064565b9250826131515761315061318b565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61323281612ffa565b811461323d57600080fd5b50565b6132498161300c565b811461325457600080fd5b50565b61326081613018565b811461326b57600080fd5b50565b61327781613064565b811461328257600080fd5b5056fea2646970667358221220bc9ba651cb44b2d42a0cc3b06cfe688b0e26a5272719751e58d9629e6dc9831464736f6c63430008000033";

export class ERC721EnumerableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721EnumerableMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721EnumerableMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721EnumerableMock {
    return super.attach(address) as ERC721EnumerableMock;
  }
  connect(signer: Signer): ERC721EnumerableMock__factory {
    return super.connect(signer) as ERC721EnumerableMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721EnumerableMockInterface {
    return new utils.Interface(_abi) as ERC721EnumerableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721EnumerableMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC721EnumerableMock;
  }
}