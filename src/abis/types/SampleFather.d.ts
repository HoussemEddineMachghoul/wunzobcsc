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

interface SampleFatherInterface extends ethers.utils.Interface {
  functions: {
    "father()": FunctionFragment;
    "gramps()": FunctionFragment;
    "initialize()": FunctionFragment;
    "isHuman()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "father", values?: undefined): string;
  encodeFunctionData(functionFragment: "gramps", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;

  decodeFunctionResult(functionFragment: "father", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gramps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;

  events: {};
}

export class SampleFather extends BaseContract {
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

  interface: SampleFatherInterface;

  functions: {
    father(overrides?: CallOverrides): Promise<[BigNumber]>;

    gramps(overrides?: CallOverrides): Promise<[string]>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(string,uint256)"(
      _gramps: string,
      _father: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(string)"(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isHuman(overrides?: CallOverrides): Promise<[boolean]>;
  };

  father(overrides?: CallOverrides): Promise<BigNumber>;

  gramps(overrides?: CallOverrides): Promise<string>;

  "initialize()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(string,uint256)"(
    _gramps: string,
    _father: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(string)"(
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isHuman(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    father(overrides?: CallOverrides): Promise<BigNumber>;

    gramps(overrides?: CallOverrides): Promise<string>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    "initialize(string,uint256)"(
      _gramps: string,
      _father: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(string)"(
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isHuman(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    father(overrides?: CallOverrides): Promise<BigNumber>;

    gramps(overrides?: CallOverrides): Promise<BigNumber>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(string,uint256)"(
      _gramps: string,
      _father: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(string)"(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isHuman(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    father(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gramps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "initialize()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(string,uint256)"(
      _gramps: string,
      _father: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(string)"(
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
