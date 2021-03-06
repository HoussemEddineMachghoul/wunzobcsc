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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SafeCastMockInterface extends ethers.utils.Interface {
  functions: {
    "toInt128(int256)": FunctionFragment;
    "toInt16(int256)": FunctionFragment;
    "toInt256(uint256)": FunctionFragment;
    "toInt32(int256)": FunctionFragment;
    "toInt64(int256)": FunctionFragment;
    "toInt8(int256)": FunctionFragment;
    "toUint128(uint256)": FunctionFragment;
    "toUint16(uint256)": FunctionFragment;
    "toUint224(uint256)": FunctionFragment;
    "toUint256(int256)": FunctionFragment;
    "toUint32(uint256)": FunctionFragment;
    "toUint64(uint256)": FunctionFragment;
    "toUint8(uint256)": FunctionFragment;
    "toUint96(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "toInt128",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toInt16",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toInt256",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toInt32",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toInt64",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toInt8",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint128",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint16",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint224",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint256",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint32",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint64",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint8",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toUint96",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "toInt128", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toInt16", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toInt256", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toInt32", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toInt64", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toInt8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint128", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint16", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint224", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint256", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint32", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint64", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "toUint96", data: BytesLike): Result;

  events: {};
}

export class SafeCastMock extends BaseContract {
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

  interface: SafeCastMockInterface;

  functions: {
    toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    toUint224(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

  toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

  toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

  toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

  toUint224(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

  toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

  toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

    toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

    toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

    toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

    toUint224(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

    toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<number>;

    toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    toInt128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt16(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt32(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toInt8(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint128(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint16(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint224(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint256(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint32(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint64(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint8(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    toUint96(a: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    toInt128(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toInt16(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toInt256(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toInt32(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toInt64(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toInt8(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint128(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint16(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint224(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint256(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint32(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint64(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint8(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    toUint96(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
