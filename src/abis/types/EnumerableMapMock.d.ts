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

interface EnumerableMapMockInterface extends ethers.utils.Interface {
  functions: {
    "at(uint256)": FunctionFragment;
    "contains(uint256)": FunctionFragment;
    "get(uint256)": FunctionFragment;
    "getWithMessage(uint256,string)": FunctionFragment;
    "length()": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "set(uint256,address)": FunctionFragment;
    "tryGet(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "contains",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getWithMessage",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "tryGet",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWithMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tryGet", data: BytesLike): Result;

  events: {
    "OperationResult(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}

export class EnumerableMapMock extends BaseContract {
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

  interface: EnumerableMapMockInterface;

  functions: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

    contains(key: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    get(key: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    remove(
      key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tryGet(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  at(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

  contains(key: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  get(key: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getWithMessage(
    key: BigNumberish,
    errorMessage: string,
    overrides?: CallOverrides
  ): Promise<string>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  remove(
    key: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  set(
    key: BigNumberish,
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tryGet(
    key: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, string]>;

  callStatic: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { key: BigNumber; value: string }>;

    contains(key: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    get(key: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<string>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(key: BigNumberish, overrides?: CallOverrides): Promise<void>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tryGet(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, string]>;
  };

  filters: {
    OperationResult(
      result?: null
    ): TypedEventFilter<[boolean], { result: boolean }>;
  };

  estimateGas: {
    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    contains(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    get(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tryGet(key: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contains(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithMessage(
      key: BigNumberish,
      errorMessage: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      key: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    set(
      key: BigNumberish,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tryGet(
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
