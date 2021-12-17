/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IERC1820RegistryInterface extends ethers.utils.Interface {
  functions: {
    "getInterfaceImplementer(address,bytes32)": FunctionFragment;
    "getManager(address)": FunctionFragment;
    "implementsERC165Interface(address,bytes4)": FunctionFragment;
    "implementsERC165InterfaceNoCache(address,bytes4)": FunctionFragment;
    "interfaceHash(string)": FunctionFragment;
    "setInterfaceImplementer(address,bytes32,address)": FunctionFragment;
    "setManager(address,address)": FunctionFragment;
    "updateERC165Cache(address,bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getInterfaceImplementer",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getManager", values: [string]): string;
  encodeFunctionData(
    functionFragment: "implementsERC165Interface",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "implementsERC165InterfaceNoCache",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "interfaceHash",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterfaceImplementer",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setManager",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateERC165Cache",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getInterfaceImplementer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementsERC165Interface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementsERC165InterfaceNoCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interfaceHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterfaceImplementer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateERC165Cache",
    data: BytesLike
  ): Result;

  events: {
    "InterfaceImplementerSet(address,bytes32,address)": EventFragment;
    "ManagerChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InterfaceImplementerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ManagerChanged"): EventFragment;
}

export class IERC1820Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IERC1820RegistryInterface;

  functions: {
    getInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getManager(account: string, overrides?: CallOverrides): Promise<[string]>;

    implementsERC165Interface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    implementsERC165InterfaceNoCache(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    interfaceHash(
      interfaceName: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      implementer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setManager(
      account: string,
      newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateERC165Cache(
      account: string,
      interfaceId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getInterfaceImplementer(
    account: string,
    _interfaceHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getManager(account: string, overrides?: CallOverrides): Promise<string>;

  implementsERC165Interface(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  implementsERC165InterfaceNoCache(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  interfaceHash(
    interfaceName: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setInterfaceImplementer(
    account: string,
    _interfaceHash: BytesLike,
    implementer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setManager(
    account: string,
    newManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateERC165Cache(
    account: string,
    interfaceId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getManager(account: string, overrides?: CallOverrides): Promise<string>;

    implementsERC165Interface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    implementsERC165InterfaceNoCache(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    interfaceHash(
      interfaceName: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      implementer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setManager(
      account: string,
      newManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateERC165Cache(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    InterfaceImplementerSet(
      account?: string | null,
      interfaceHash?: BytesLike | null,
      implementer?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { account: string; interfaceHash: string; implementer: string }
    >;

    ManagerChanged(
      account?: string | null,
      newManager?: string | null
    ): TypedEventFilter<
      [string, string],
      { account: string; newManager: string }
    >;
  };

  estimateGas: {
    getInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getManager(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    implementsERC165Interface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementsERC165InterfaceNoCache(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interfaceHash(
      interfaceName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      implementer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setManager(
      account: string,
      newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateERC165Cache(
      account: string,
      interfaceId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManager(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementsERC165Interface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementsERC165InterfaceNoCache(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    interfaceHash(
      interfaceName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setInterfaceImplementer(
      account: string,
      _interfaceHash: BytesLike,
      implementer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setManager(
      account: string,
      newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateERC165Cache(
      account: string,
      interfaceId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
