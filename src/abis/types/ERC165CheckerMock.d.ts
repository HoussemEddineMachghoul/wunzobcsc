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

interface ERC165CheckerMockInterface extends ethers.utils.Interface {
  functions: {
    "getSupportedInterfaces(address,bytes4[])": FunctionFragment;
    "supportsAllInterfaces(address,bytes4[])": FunctionFragment;
    "supportsERC165(address)": FunctionFragment;
    "supportsInterface(address,bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getSupportedInterfaces",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsAllInterfaces",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsERC165",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSupportedInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsAllInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsERC165",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export class ERC165CheckerMock extends BaseContract {
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

  interface: ERC165CheckerMockInterface;

  functions: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getSupportedInterfaces(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  supportsAllInterfaces(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsERC165(account: string, overrides?: CallOverrides): Promise<boolean>;

  supportsInterface(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSupportedInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
