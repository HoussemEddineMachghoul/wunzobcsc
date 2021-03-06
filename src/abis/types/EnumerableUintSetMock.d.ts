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

interface EnumerableUintSetMockInterface extends ethers.utils.Interface {
  functions: {
    "add(uint256)": FunctionFragment;
    "at(uint256)": FunctionFragment;
    "contains(uint256)": FunctionFragment;
    "length()": FunctionFragment;
    "remove(uint256)": FunctionFragment;
    "values()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "add", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "at", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "contains",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "length", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "values", values?: undefined): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "length", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "values", data: BytesLike): Result;

  events: {
    "OperationResult(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OperationResult"): EventFragment;
}

export class EnumerableUintSetMock extends BaseContract {
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

  interface: EnumerableUintSetMockInterface;

  functions: {
    add(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    contains(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    length(overrides?: CallOverrides): Promise<[BigNumber]>;

    remove(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    values(overrides?: CallOverrides): Promise<[BigNumber[]]>;
  };

  add(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  contains(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  length(overrides?: CallOverrides): Promise<BigNumber>;

  remove(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  values(overrides?: CallOverrides): Promise<BigNumber[]>;

  callStatic: {
    add(value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    contains(value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    values(overrides?: CallOverrides): Promise<BigNumber[]>;
  };

  filters: {
    OperationResult(
      result?: null
    ): TypedEventFilter<[boolean], { result: boolean }>;
  };

  estimateGas: {
    add(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    at(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    contains(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    length(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    values(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    at(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contains(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    length(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    values(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
