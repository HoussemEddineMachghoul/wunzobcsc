/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "AccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerable__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "IAccessControlEnumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControlEnumerable__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "PaymentSplitter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentSplitter__factory>;
    getContractFactory(
      name: "GovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCompatibilityBravo__factory>;
    getContractFactory(
      name: "IGovernorCompatibilityBravo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorCompatibilityBravo__factory>;
    getContractFactory(
      name: "GovernorCountingSimple",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCountingSimple__factory>;
    getContractFactory(
      name: "GovernorProposalThreshold",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorProposalThreshold__factory>;
    getContractFactory(
      name: "GovernorTimelockCompound",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockCompound__factory>;
    getContractFactory(
      name: "ICompoundTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICompoundTimelock__factory>;
    getContractFactory(
      name: "GovernorTimelockControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockControl__factory>;
    getContractFactory(
      name: "GovernorVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotes__factory>;
    getContractFactory(
      name: "GovernorVotesComp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotesComp__factory>;
    getContractFactory(
      name: "GovernorVotesQuorumFraction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotesQuorumFraction__factory>;
    getContractFactory(
      name: "IGovernorTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorTimelock__factory>;
    getContractFactory(
      name: "Governor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governor__factory>;
    getContractFactory(
      name: "IGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernor__factory>;
    getContractFactory(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockController__factory>;
    getContractFactory(
      name: "IERC2612",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2612__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "IERC1363",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1363__factory>;
    getContractFactory(
      name: "IERC1363Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1363Receiver__factory>;
    getContractFactory(
      name: "IERC1363Spender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1363Spender__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "IERC3156FlashBorrower",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3156FlashBorrower__factory>;
    getContractFactory(
      name: "IERC3156FlashLender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC3156FlashLender__factory>;
    getContractFactory(
      name: "ERC2771Context",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2771Context__factory>;
    getContractFactory(
      name: "MinimalForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinimalForwarder__factory>;
    getContractFactory(
      name: "AccessControlEnumerableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlEnumerableMock__factory>;
    getContractFactory(
      name: "AccessControlMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControlMock__factory>;
    getContractFactory(
      name: "AddressImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AddressImpl__factory>;
    getContractFactory(
      name: "ArraysImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArraysImpl__factory>;
    getContractFactory(
      name: "BadBeaconNotContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BadBeaconNotContract__factory>;
    getContractFactory(
      name: "BitMapMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BitMapMock__factory>;
    getContractFactory(
      name: "CallReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallReceiverMock__factory>;
    getContractFactory(
      name: "ClashingImplementation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClashingImplementation__factory>;
    getContractFactory(
      name: "ClonesMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClonesMock__factory>;
    getContractFactory(
      name: "CompTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompTimelock__factory>;
    getContractFactory(
      name: "ConditionalEscrowMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConditionalEscrowMock__factory>;
    getContractFactory(
      name: "ContextMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextMock__factory>;
    getContractFactory(
      name: "ContextMockCaller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextMockCaller__factory>;
    getContractFactory(
      name: "CountersImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CountersImpl__factory>;
    getContractFactory(
      name: "Create2Impl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Create2Impl__factory>;
    getContractFactory(
      name: "DummyImplementation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DummyImplementation__factory>;
    getContractFactory(
      name: "DummyImplementationV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DummyImplementationV2__factory>;
    getContractFactory(
      name: "Impl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Impl__factory>;
    getContractFactory(
      name: "ECDSAMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ECDSAMock__factory>;
    getContractFactory(
      name: "EIP712External",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712External__factory>;
    getContractFactory(
      name: "EnumerableMapMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnumerableMapMock__factory>;
    getContractFactory(
      name: "EnumerableAddressSetMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnumerableAddressSetMock__factory>;
    getContractFactory(
      name: "EnumerableBytes32SetMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnumerableBytes32SetMock__factory>;
    getContractFactory(
      name: "EnumerableUintSetMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnumerableUintSetMock__factory>;
    getContractFactory(
      name: "ERC1155BurnableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155BurnableMock__factory>;
    getContractFactory(
      name: "ERC1155Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Mock__factory>;
    getContractFactory(
      name: "ERC1155PausableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155PausableMock__factory>;
    getContractFactory(
      name: "ERC1155ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155ReceiverMock__factory>;
    getContractFactory(
      name: "ERC1155SupplyMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155SupplyMock__factory>;
    getContractFactory(
      name: "ERC1271WalletMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1271WalletMock__factory>;
    getContractFactory(
      name: "ERC165InterfacesSupported",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165InterfacesSupported__factory>;
    getContractFactory(
      name: "SupportsInterfaceWithLookupMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SupportsInterfaceWithLookupMock__factory>;
    getContractFactory(
      name: "ERC165MissingData",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165MissingData__factory>;
    getContractFactory(
      name: "ERC165CheckerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165CheckerMock__factory>;
    getContractFactory(
      name: "ERC165Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Mock__factory>;
    getContractFactory(
      name: "ERC165StorageMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165StorageMock__factory>;
    getContractFactory(
      name: "ERC1820ImplementerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1820ImplementerMock__factory>;
    getContractFactory(
      name: "ERC20BurnableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20BurnableMock__factory>;
    getContractFactory(
      name: "ERC20CappedMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20CappedMock__factory>;
    getContractFactory(
      name: "ERC20DecimalsMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20DecimalsMock__factory>;
    getContractFactory(
      name: "ERC20FlashMintMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20FlashMintMock__factory>;
    getContractFactory(
      name: "ERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mock__factory>;
    getContractFactory(
      name: "ERC20PausableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PausableMock__factory>;
    getContractFactory(
      name: "ERC20PermitMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PermitMock__factory>;
    getContractFactory(
      name: "ERC20SnapshotMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20SnapshotMock__factory>;
    getContractFactory(
      name: "ERC20VotesCompMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20VotesCompMock__factory>;
    getContractFactory(
      name: "ERC20VotesMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20VotesMock__factory>;
    getContractFactory(
      name: "ERC20WrapperMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20WrapperMock__factory>;
    getContractFactory(
      name: "ERC2771ContextMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2771ContextMock__factory>;
    getContractFactory(
      name: "ERC3156FlashBorrowerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC3156FlashBorrowerMock__factory>;
    getContractFactory(
      name: "ERC721BurnableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721BurnableMock__factory>;
    getContractFactory(
      name: "ERC721EnumerableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721EnumerableMock__factory>;
    getContractFactory(
      name: "ERC721Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Mock__factory>;
    getContractFactory(
      name: "ERC721PausableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721PausableMock__factory>;
    getContractFactory(
      name: "ERC721ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ReceiverMock__factory>;
    getContractFactory(
      name: "ERC721URIStorageMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorageMock__factory>;
    getContractFactory(
      name: "ERC777Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC777Mock__factory>;
    getContractFactory(
      name: "ERC777SenderRecipientMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC777SenderRecipientMock__factory>;
    getContractFactory(
      name: "EtherReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EtherReceiverMock__factory>;
    getContractFactory(
      name: "GovernorCompMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCompMock__factory>;
    getContractFactory(
      name: "GovernorMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorMock__factory>;
    getContractFactory(
      name: "GovernorTimelockCompoundMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockCompoundMock__factory>;
    getContractFactory(
      name: "GovernorTimelockControlMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockControlMock__factory>;
    getContractFactory(
      name: "InitializableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InitializableMock__factory>;
    getContractFactory(
      name: "MathMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MathMock__factory>;
    getContractFactory(
      name: "MerkleProofWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleProofWrapper__factory>;
    getContractFactory(
      name: "MulticallTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MulticallTest__factory>;
    getContractFactory(
      name: "MulticallTokenMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MulticallTokenMock__factory>;
    getContractFactory(
      name: "SampleChild",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SampleChild__factory>;
    getContractFactory(
      name: "SampleFather",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SampleFather__factory>;
    getContractFactory(
      name: "SampleGramps",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SampleGramps__factory>;
    getContractFactory(
      name: "SampleHuman",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SampleHuman__factory>;
    getContractFactory(
      name: "SampleMother",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SampleMother__factory>;
    getContractFactory(
      name: "OwnableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableMock__factory>;
    getContractFactory(
      name: "PausableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableMock__factory>;
    getContractFactory(
      name: "PullPaymentMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PullPaymentMock__factory>;
    getContractFactory(
      name: "ReentrancyAttack",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyAttack__factory>;
    getContractFactory(
      name: "ReentrancyMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyMock__factory>;
    getContractFactory(
      name: "Implementation1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Implementation1__factory>;
    getContractFactory(
      name: "Implementation2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Implementation2__factory>;
    getContractFactory(
      name: "Implementation3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Implementation3__factory>;
    getContractFactory(
      name: "Implementation4",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Implementation4__factory>;
    getContractFactory(
      name: "SafeCastMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeCastMock__factory>;
    getContractFactory(
      name: "ERC20NoReturnMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20NoReturnMock__factory>;
    getContractFactory(
      name: "ERC20ReturnFalseMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20ReturnFalseMock__factory>;
    getContractFactory(
      name: "ERC20ReturnTrueMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20ReturnTrueMock__factory>;
    getContractFactory(
      name: "SafeERC20Wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeERC20Wrapper__factory>;
    getContractFactory(
      name: "SafeMathMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeMathMock__factory>;
    getContractFactory(
      name: "SignatureCheckerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignatureCheckerMock__factory>;
    getContractFactory(
      name: "SignedSafeMathMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignedSafeMathMock__factory>;
    getContractFactory(
      name: "MigratableMockV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MigratableMockV1__factory>;
    getContractFactory(
      name: "MigratableMockV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MigratableMockV2__factory>;
    getContractFactory(
      name: "MigratableMockV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MigratableMockV3__factory>;
    getContractFactory(
      name: "StorageSlotMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StorageSlotMock__factory>;
    getContractFactory(
      name: "StringsMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StringsMock__factory>;
    getContractFactory(
      name: "TimersBlockNumberImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimersBlockNumberImpl__factory>;
    getContractFactory(
      name: "TimersTimestampImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimersTimestampImpl__factory>;
    getContractFactory(
      name: "UUPSUpgradeableBrokenMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeableBrokenMock__factory>;
    getContractFactory(
      name: "UUPSUpgradeableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeableMock__factory>;
    getContractFactory(
      name: "UUPSUpgradeableUnsafeMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeableUnsafeMock__factory>;
    getContractFactory(
      name: "BeaconProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BeaconProxy__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "UpgradeableBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeableBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ProxyAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>;
    getContractFactory(
      name: "TransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "PullPayment",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PullPayment__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Burnable__factory>;
    getContractFactory(
      name: "ERC1155Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Pausable__factory>;
    getContractFactory(
      name: "ERC1155Supply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Supply__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC1155PresetMinterPauser",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155PresetMinterPauser__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "ERC20Capped",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Capped__factory>;
    getContractFactory(
      name: "ERC20FlashMint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20FlashMint__factory>;
    getContractFactory(
      name: "ERC20Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Pausable__factory>;
    getContractFactory(
      name: "ERC20Snapshot",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Snapshot__factory>;
    getContractFactory(
      name: "ERC20Votes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Votes__factory>;
    getContractFactory(
      name: "ERC20VotesComp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20VotesComp__factory>;
    getContractFactory(
      name: "ERC20Wrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Wrapper__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20PresetFixedSupply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PresetFixedSupply__factory>;
    getContractFactory(
      name: "ERC20PresetMinterPauser",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PresetMinterPauser__factory>;
    getContractFactory(
      name: "TokenTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenTimelock__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Burnable__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Pausable__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721PresetMinterPauserAutoId",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721PresetMinterPauserAutoId__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "ERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC777__factory>;
    getContractFactory(
      name: "IERC777",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777__factory>;
    getContractFactory(
      name: "IERC777Recipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777Recipient__factory>;
    getContractFactory(
      name: "IERC777Sender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777Sender__factory>;
    getContractFactory(
      name: "ERC777PresetFixedSupply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC777PresetFixedSupply__factory>;
    getContractFactory(
      name: "ConditionalEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConditionalEscrow__factory>;
    getContractFactory(
      name: "Escrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Escrow__factory>;
    getContractFactory(
      name: "RefundEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RefundEscrow__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "ERC165Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Storage__factory>;
    getContractFactory(
      name: "ERC1820Implementer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1820Implementer__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC1820Implementer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1820Implementer__factory>;
    getContractFactory(
      name: "IERC1820Registry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1820Registry__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "Secondary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Secondary__factory>;
    getContractFactory(
      name: "TableManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TableManager__factory>;
    getContractFactory(
      name: "UnstableTokenVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UnstableTokenVault__factory>;
    getContractFactory(
      name: "VestingCrowdSell",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VestingCrowdSell__factory>;
    getContractFactory(
      name: "WunzoDapp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WunzoDapp__factory>;
    getContractFactory(
      name: "WunzoMainContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WunzoMainContract__factory>;
    getContractFactory(
      name: "WunzoTable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WunzoTable__factory>;
    getContractFactory(
      name: "WunzoToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WunzoToken__factory>;
    getContractFactory(
      name: "WunzoTokenCrowdsale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WunzoTokenCrowdsale__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
