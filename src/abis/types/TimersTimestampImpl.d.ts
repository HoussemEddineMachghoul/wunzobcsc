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

interface TimersTimestampImplInterface extends ethers.utils.Interface {
  functions: {
    "getDeadline()": FunctionFragment;
    "isExpired()": FunctionFragment;
    "isPending()": FunctionFragment;
    "isStarted()": FunctionFragment;
    "isUnset()": FunctionFragment;
    "reset()": FunctionFragment;
    "setDeadline(uint64)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getDeadline",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isExpired", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPending", values?: undefined): string;
  encodeFunctionData(functionFragment: "isStarted", values?: undefined): string;
  encodeFunctionData(functionFragment: "isUnset", values?: undefined): string;
  encodeFunctionData(functionFragment: "reset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDeadline",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDeadline",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isExpired", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPending", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStarted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isUnset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDeadline",
    data: BytesLike
  ): Result;

  events: {};
}

export class TimersTimestampImpl extends BaseContract {
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

  interface: TimersTimestampImplInterface;

  functions: {
    getDeadline(overrides?: CallOverrides): Promise<[BigNumber]>;

    isExpired(overrides?: CallOverrides): Promise<[boolean]>;

    isPending(overrides?: CallOverrides): Promise<[boolean]>;

    isStarted(overrides?: CallOverrides): Promise<[boolean]>;

    isUnset(overrides?: CallOverrides): Promise<[boolean]>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getDeadline(overrides?: CallOverrides): Promise<BigNumber>;

  isExpired(overrides?: CallOverrides): Promise<boolean>;

  isPending(overrides?: CallOverrides): Promise<boolean>;

  isStarted(overrides?: CallOverrides): Promise<boolean>;

  isUnset(overrides?: CallOverrides): Promise<boolean>;

  reset(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDeadline(
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    isExpired(overrides?: CallOverrides): Promise<boolean>;

    isPending(overrides?: CallOverrides): Promise<boolean>;

    isStarted(overrides?: CallOverrides): Promise<boolean>;

    isUnset(overrides?: CallOverrides): Promise<boolean>;

    reset(overrides?: CallOverrides): Promise<void>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getDeadline(overrides?: CallOverrides): Promise<BigNumber>;

    isExpired(overrides?: CallOverrides): Promise<BigNumber>;

    isPending(overrides?: CallOverrides): Promise<BigNumber>;

    isStarted(overrides?: CallOverrides): Promise<BigNumber>;

    isUnset(overrides?: CallOverrides): Promise<BigNumber>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDeadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isExpired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPending(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isUnset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reset(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDeadline(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
