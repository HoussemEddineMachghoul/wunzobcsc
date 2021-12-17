import chai, { expect } from "chai"
import chai_bn from 'chai-bn'
import chai_as_promised from "chai-as-promised"

import { ethers, waffle } from "hardhat"
import { BigNumber, BigNumberish } from "ethers"

import * as time from "./helpers"
import { VestingCrowdSell, WunzoToken } from "../src/abis/types"

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
chai.use(chai_bn(BigNumber)).use(chai_as_promised)
chai.should();
const Ether = (ether: string) => { return ethers.utils.parseEther(ether) }
const BN = (nb: string | number) => { return BigNumber.from(nb) }
var _name = "Wunzo Token";
var _symbol = "WNZ";
var _decimals = 18;
var _privateSallRate = 2000;
var _preSellrate = 1333;
var _icoRate = 1000
var revert = 'revert'
var VMException = 'VM Exception'
var tokenAddress = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
var crowdsaleAddress = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";
const advanceTime = async (duration: number) => {
  let latest = await time.latestTime()
  await time.increaseTimeTo(duration + (latest))
}

describe("Token && Vesting", async function () {
  let token: WunzoToken
  let crowdsale: VestingCrowdSell
  let _: SignerWithAddress, comp1: SignerWithAddress, comp2: SignerWithAddress, moderator: SignerWithAddress, fund: SignerWithAddress, user: SignerWithAddress

  this.beforeAll(async () => {
    [_, comp1, comp2, moderator, fund, user] = await ethers.getSigners()
    let Token = await ethers.getContractFactory("WunzoToken")
    token = await Token.deploy(_name, _symbol, _decimals);

    let Vesting = await ethers.getContractFactory("VestingCrowdSell")
    crowdsale = await Vesting.connect(_).deploy(_privateSallRate, _preSellrate, _icoRate, comp1.address, comp2.address, token.address);
    await token.addMinter(crowdsale.address)
  })
  describe("Wunzo Token", async function () {
    it("good Token vars", async () => {
      let symbol = await token.symbol()
      expect(symbol).to.be.equal(_symbol)
      let name = await token.name()
      expect(name).to.be.equal(_name)
      let decimals = await token.decimals()
      expect(decimals).to.be.equal(_decimals)
    })
  })
  describe("VestingContract", async () => {

    it("shoud be closed", async () => {
      let open = await crowdsale.open();
      expect(open).to.be.false
      let nbDays = await crowdsale.getNbDaysSinceStarted()
      expect(nbDays).to.be.equal(0)
    })
    it("shoud allow diposit for funder but dont allow withdrow", async () => {
      let p = await crowdsale.FundersVault(comp1.address)
      await crowdsale.connect(user).fundersDiposit(comp1.address, Ether("100")).should.be.rejectedWith("Ownable: caller is not the owner")
      await crowdsale.connect(moderator).fundersDiposit(comp1.address, Ether("100")).should.be.rejectedWith("Ownable: caller is not the owner")
      await crowdsale.connect(_).fundersDiposit(comp1.address, Ether("100"))
      let p2 = await crowdsale.FundersVault(comp1.address)
      p2.totalBalance.should.be.bignumber.greaterThan(p.totalBalance)
      let canWithdrow = await crowdsale.connect(comp1).fundersCanWithdrow()
      canWithdrow.should.be.bignumber.equal(Ether("0"))
      await crowdsale.fundersWithdrawTokens().should.be.rejectedWith("PostDeliveryCrowdsale: beneficiary is not due any tokens")
    })
    it("should allow Private diposit bun to withdrow", async () => {
      let p = await crowdsale.PrivateVault(fund.address)
      await crowdsale.connect(_).addModerator(moderator.address)
      await crowdsale.connect(moderator).whiteListPrivateBuyer(fund.address, Ether(_privateSallRate.toString()))
      let whiteListed = await crowdsale.connect(fund).whiteListed()
      whiteListed.should.be.true
      let canBuy = await crowdsale.connect(fund).stillCanBuy()
      canBuy.should.be.bignumber.equal(Ether(_privateSallRate.toString()))
      await crowdsale.connect(fund).buyInPrivateSell({ value: Ether("1") })
      let p2 = await crowdsale.PrivateVault(fund.address)
      p2.totalBalance.should.be.bignumber.greaterThan(p.totalBalance)
      let canWithdrow = await crowdsale.connect(fund).privateCanWithdrow()
      canWithdrow.should.be.bignumber.equal(Ether("0"))
      await crowdsale.connect(fund).privateWithdrawTokens()
        .should.be.rejectedWith("beneficiary is not due any tokens")
    })
    it("should start and allow funders and private to withdrow", async () => {
      let open = await crowdsale.open()
      open.should.be.false;
      await crowdsale.Start()
      open = await crowdsale.open()
      open.should.be.true;
      await advanceTime(time.duration.minutes(30))
      let privatePRC = await crowdsale.getPrivateReleasablePRC()
      privatePRC.should.be.bignumber.equal(BN("10"))
      let pcw = await crowdsale.connect(fund).privateCanWithdrow()
      let p = await crowdsale.PrivateVault(fund.address)
      p.claimedBalance.should.be.bignumber.equal(BN("0"))
      p.totalBalance.mul(privatePRC).div("100").should.be.bignumber.equal(pcw)
      await crowdsale.connect(fund).privateWithdrawTokens()
      p = await crowdsale.PrivateVault(fund.address)
      p.claimedBalance.should.be.bignumber.equal(pcw)
      let funderprc = await crowdsale.getFundersReleasablePRC()
      funderprc.should.be.bignumber.equal(BN("125"))
      let fcw = await crowdsale.connect(comp1).fundersCanWithdrow()
      p = await crowdsale.FundersVault(comp1.address)
      p.claimedBalance.should.be.bignumber.equal(BN("0"))
      p.totalBalance.mul(funderprc).div(BN("1000")).should.be.bignumber.equal(fcw)
      await crowdsale.connect(comp1).fundersWithdrawTokens()
      p = await crowdsale.FundersVault(comp1.address)
      p.claimedBalance.should.be.bignumber.equal(fcw)
      await crowdsale.connect(comp1).fundersWithdrawTokens().should.be.rejectedWith("beneficiary is not due any tokens")
      await crowdsale.connect(fund).privateWithdrawTokens().should.be.rejectedWith("beneficiary is not due any tokens")
    })
    it("after 15 days , nothing happen", async () => {
      await advanceTime(time.duration.days(15))
      let nbDays = await crowdsale.getNbDaysSinceStarted()
      nbDays.should.be.bignumber.equal(BN("15"))
      let fcw = await crowdsale.connect(comp1).fundersCanWithdrow()
      fcw.should.be.bignumber.equal(BN("0"))
      let pcw = await crowdsale.connect(fund).privateCanWithdrow()
      pcw.should.be.bignumber.equal(BN("0"))
      let funderprc = await crowdsale.getFundersReleasablePRC()
      funderprc.should.be.bignumber.equal(BN("125"))
      let privatePRC = await crowdsale.getPrivateReleasablePRC()
      privatePRC.should.be.bignumber.equal(BN("10"))
      await crowdsale.connect(comp1).fundersWithdrawTokens().should.be.rejectedWith("beneficiary is not due any tokens")
      await crowdsale.connect(fund).privateWithdrawTokens().should.be.rejectedWith("beneficiary is not due any tokens")
    })
    it("after 30 days private can withdrow but not funders", async () => {
      await advanceTime(time.duration.days(15))
      await advanceTime(time.duration.minutes(35))
      let nbDays = await crowdsale.getNbDaysSinceStarted()
      nbDays.should.be.bignumber.equal(BN("30"))
      let funderprc = await crowdsale.getFundersReleasablePRC()
      funderprc.should.be.bignumber.equal(BN("125"))
      let privatePRC = await crowdsale.getPrivateReleasablePRC()
      privatePRC.should.be.bignumber.equal(BN("20"))
      let fcw = await crowdsale.connect(comp1).fundersCanWithdrow()
      fcw.should.be.bignumber.equal(BN("0"))
      let pcw = await crowdsale.connect(fund).privateCanWithdrow()
      let p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN("100")).should.be.bignumber.equal(pcw.add(p.claimedBalance))
      await crowdsale.connect(comp1).fundersWithdrawTokens().should.be.rejectedWith("beneficiary is not due any tokens")
      await crowdsale.connect(fund).privateWithdrawTokens()
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN("100")).should.be.bignumber.equal(p.claimedBalance)
    })
    it("after 80 days private can withdrow but not funders", async () => {
      await advanceTime(time.duration.days(50))
      await advanceTime(time.duration.minutes(35))
      let nbDays = await crowdsale.getNbDaysSinceStarted()
      nbDays.should.be.bignumber.equal(BN("80"))
      let funderprc = await crowdsale.getFundersReleasablePRC()
      funderprc.should.be.bignumber.equal(BN("125"))
      let privatePRC = await crowdsale.getPrivateReleasablePRC()
      privatePRC.should.be.bignumber.equal(BN("30"))
      let fcw = await crowdsale.connect(comp1).fundersCanWithdrow()
      fcw.should.be.bignumber.equal(BN("0"))
      let pcw = await crowdsale.connect(fund).privateCanWithdrow()
      let p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN("100")).should.be.bignumber.equal(pcw.add(p.claimedBalance))
      await crowdsale.connect(comp1).fundersWithdrawTokens().should.be.rejectedWith("beneficiary is not due any tokens")
      await crowdsale.connect(fund).privateWithdrawTokens()
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN(100)).should.be.bignumber.equal(p.claimedBalance)
    })
    it("after 90 days privat and funders can withdraw", async () => {
      await advanceTime(time.duration.days(10))
      await advanceTime(time.duration.minutes(35))
      let nbDays = await crowdsale.getNbDaysSinceStarted()
      nbDays.should.be.bignumber.equal(BN("90"))
      let funderPRC = await crowdsale.getFundersReleasablePRC()
      funderPRC.should.be.bignumber.equal(BN("250"))
      let privatePRC = await crowdsale.getPrivateReleasablePRC()
      privatePRC.should.be.bignumber.equal(BN("40"))
      let fcw = await crowdsale.connect(comp1).fundersCanWithdrow()
      let p = await crowdsale.FundersVault(comp1.address)
      p.totalBalance.mul(funderPRC).div(BN(1000)).should.be.bignumber.equal(fcw.add(p.claimedBalance))
      let pcw = await crowdsale.connect(fund).privateCanWithdrow()
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN(100)).should.be.bignumber.equal(pcw.add(p.claimedBalance))
      await crowdsale.connect(comp1).fundersWithdrawTokens()
      p = await crowdsale.FundersVault(comp1.address)
      p.totalBalance.mul(funderPRC).div(BN(1000)).should.be.bignumber.equal(p.claimedBalance)
      await crowdsale.connect(fund).privateWithdrawTokens()
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN(100)).should.be.bignumber.equal(p.claimedBalance)
    })
    it("end of privat vesting", async () => {
      await advanceTime(time.duration.days(210))
      await advanceTime(time.duration.minutes(35))
      let nbDays = await crowdsale.getNbDaysSinceStarted()
      nbDays.should.be.bignumber.equal(BN("300"))
      let funderPRC = await crowdsale.getFundersReleasablePRC()
      funderPRC.should.be.bignumber.equal(BN("500"))
      let privatePRC = await crowdsale.getPrivateReleasablePRC()
      privatePRC.should.be.bignumber.equal(BN("100"))
      let fcw = await crowdsale.connect(comp1).fundersCanWithdrow()
      let p = await crowdsale.FundersVault(comp1.address)
      p.totalBalance.mul(funderPRC).div(BN(1000)).should.be.bignumber.equal(fcw.add(p.claimedBalance))
      let pcw = await crowdsale.connect(fund).privateCanWithdrow()
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN(100)).should.be.bignumber.equal(pcw.add(p.claimedBalance))
      await crowdsale.connect(comp1).fundersWithdrawTokens()
      p = await crowdsale.FundersVault(comp1.address)
      p.totalBalance.mul(funderPRC).div(BN(1000)).should.be.bignumber.equal(p.claimedBalance)
      await crowdsale.connect(fund).privateWithdrawTokens()
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.should.be.bignumber.equal(p.claimedBalance)
    })
    it("end of all vesting", async () => {
      await advanceTime(time.duration.days(390))
      await advanceTime(time.duration.minutes(35))
      let nbDays = await crowdsale.getNbDaysSinceStarted()
      nbDays.should.be.bignumber.equal(BN("690"))
      let funderPRC = await crowdsale.getFundersReleasablePRC()
      funderPRC.should.be.bignumber.equal(BN("1000"))
      let privatePRC = await crowdsale.getPrivateReleasablePRC()
      privatePRC.should.be.bignumber.equal(BN("100"))
      let fcw = await crowdsale.connect(comp1).fundersCanWithdrow()
      let p = await crowdsale.FundersVault(comp1.address)
      p.totalBalance.mul(funderPRC).div(BN(1000)).should.be.bignumber.equal(fcw.add(p.claimedBalance))
      let pcw = await crowdsale.connect(fund).privateCanWithdrow()
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.mul(privatePRC).div(BN(100)).should.be.bignumber.equal(pcw.add(p.claimedBalance))
      await crowdsale.connect(comp1).fundersWithdrawTokens()
      p = await crowdsale.FundersVault(comp1.address)
      p.totalBalance.should.be.bignumber.equal(p.claimedBalance)
      await crowdsale.connect(fund).privateWithdrawTokens().should.be.rejectedWith("beneficiary is not due any tokens")
      p = await crowdsale.PrivateVault(fund.address)
      p.totalBalance.should.be.bignumber.equal(p.claimedBalance)
    })
  })
});
describe("CrowdSell", async function () {
  let token: WunzoToken
  let crowdsale: VestingCrowdSell
  let _: SignerWithAddress, comp1: SignerWithAddress, comp2: SignerWithAddress, moderator: SignerWithAddress, fund: SignerWithAddress, user: SignerWithAddress

  this.beforeAll(async () => {
    [_, comp1, comp2, moderator, fund, user] = await ethers.getSigners()
    let Token = await ethers.getContractFactory("WunzoToken")
    token = await Token.deploy(_name, _symbol, _decimals);

    let Vesting = await ethers.getContractFactory("VestingCrowdSell")
    crowdsale = await Vesting.connect(_).deploy(_privateSallRate, _preSellrate, _icoRate, comp1.address, comp2.address, token.address);
    await token.addMinter(crowdsale.address)
  })

  it("token", async () => {
    var t = await crowdsale.getToken()
    var cap = await token.cap()
    cap.should.be.equal(Ether("50000000"))
    t.should.equal(token.address)
  })
  it("testOnlyOwner", async () => {
    await crowdsale.connect(user).addModerator(moderator.address,).should.be.rejectedWith(revert)
  })
  it("addModerator", async () => {
    await crowdsale.connect(_).addModerator(moderator.address)
    let isModerator = await crowdsale.connect(moderator).isModerator()
    isModerator.should.be.equal(true)
  })
  it("testOnlyModerator", async () => {
    await crowdsale.connect(user).whiteListPrivateBuyer(fund.address, Ether("1"))
      .should.be.rejectedWith(revert)
  })
  it("removeModerator", async () => {
    await crowdsale.connect(_).removeModerator(moderator.address)
    let isModerator = await crowdsale.connect(moderator).isModerator()
    isModerator.should.be.equal(false)
    await crowdsale.connect(_).addModerator(moderator.address)
  })
  it("whiteListPrivateBuyer", async () => {
    await crowdsale.connect(moderator).whiteListPrivateBuyer(fund.address, Ether("1"))
  })
  it("whiteListed", async () => {
    let whiteListed = await crowdsale.connect(fund).whiteListed()
    whiteListed.should.be.equal(true)
  })
  it("removeWhiteListedBuyer", async () => {
    await crowdsale.connect(moderator).removeWhiteListedBuyer(fund.address)
    let whiteListed = await crowdsale.connect(fund).whiteListed()
    whiteListed.should.be.equal(false)
  })
  it("changeCrowdsalePhase", async () => {
    let current
    await crowdsale.connect(_).changeCrowdsalePhase("1")
    current = await crowdsale.CurrentPhase()
    current.should.be.equal(1)
    await crowdsale.connect(_).changeCrowdsalePhase("2")
    current = await crowdsale.CurrentPhase()
    current.should.be.equal(2)
    await crowdsale.connect(_).changeCrowdsalePhase("0")
    current = await crowdsale.CurrentPhase()
    current.should.be.equal(0)
  })
  it("setRate", async () => {
    let rate: BigNumberish
    await crowdsale.connect(user).setRate("0", 15).should.be.rejectedWith(revert)
    await crowdsale.connect(moderator).setRate("0", 15).should.be.rejectedWith(revert)
    await crowdsale.connect(_).setRate("0", 15)
    rate = await crowdsale.PrivateSellRate()
    rate.should.be.equal(15)
    await crowdsale.connect(_).setRate("1", 15)
    rate = await crowdsale.PreSellRate()
    rate.should.be.equal(15)
    await crowdsale.connect(_).setRate("2", 15)
    rate = await crowdsale.ICORate()
    rate.should.be.equal(15)
    await crowdsale.connect(_).setRate("0", _privateSallRate)
    rate = await crowdsale.PrivateSellRate()
    rate.should.be.equal(_privateSallRate)
    await crowdsale.connect(_).setRate("1", _preSellrate)
    rate = await crowdsale.PreSellRate()
    rate.should.be.equal(_preSellrate)
    await crowdsale.connect(_).setRate("2", _icoRate)
    rate = await crowdsale.ICORate()
    rate.should.be.equal(_icoRate)
  })
  it("stillCanBuy", async () => {
    let canBuy = await crowdsale.connect(fund).stillCanBuy()
    canBuy.should.be.equal(0)
    await crowdsale.connect(moderator).whiteListPrivateBuyer(fund.address, Ether("1"))
    canBuy = await crowdsale.connect(fund).stillCanBuy()
    canBuy.should.be.equal(Ether("1"))
  })
  it("buyInPrivateSell", async () => {
    await crowdsale.connect(moderator).removeWhiteListedBuyer(fund.address)
    await crowdsale.connect(fund).buyInPrivateSell({ value: Ether("0.01") })
      .should.be.rejectedWith(revert)

    await crowdsale.connect(moderator).whiteListPrivateBuyer(fund.address,
      Ether(_privateSallRate.toString())
    )
    await crowdsale.connect(fund).buyInPrivateSell({ value: Ether('1') })
    let whiteListed = await crowdsale.connect(fund).whiteListed()
    whiteListed.should.be.equal(false)
  })
  it("testOnlyWhiteListed", async () => {
    await crowdsale.connect(fund).buyInPrivateSell({ value: Ether('1') })
      .should.be.rejectedWith("Caller is not White Listed")
  })
  it("weiRaisedInPrivateSell", async () => {
    let weiRaised = await crowdsale.weiRaisedInPrivateSell()
    weiRaised.should.be.equal(Ether("1"))
  })
  it("testPreSellOnly", async () => {
    await crowdsale.connect(user).buyInPreSell({ value: Ether("1") })
      .should.be.rejectedWith("Pre Sall Close")
  })
  it("buyInPreSell", async () => {
    let WeiRaised = await crowdsale.weiRaisedInPreSell()
    WeiRaised.should.be.eq(0)
    await crowdsale.connect(_).changeCrowdsalePhase("1")
    let userBal = await crowdsale.PrivateVault(user.address);
    let cBal = await ethers.provider.getBalance(crowdsale.address)
    let ts = await (await token.totalSupply())
    await crowdsale.connect(user).buyInPreSell({ value: Ether("1") });
    let newBal = await crowdsale.PrivateVault(user.address)
    let ncBal = await ethers.provider.getBalance(crowdsale.address)
    let nts = await (await token.totalSupply())
    ncBal.should.be.eq(cBal.add(Ether("1")))
    nts.should.be.eq(ts.add(Ether("1").mul(_preSellrate)))
    newBal.totalBalance.should.be.eq(userBal.totalBalance.add(Ether("1").mul(_preSellrate)))
  })
  it("weiRaisedInPreSell", async () => {
    (await crowdsale.weiRaisedInPreSell()).should.be.eq(Ether("1"))
  })
  it("testICOOnly", async () => {
    await crowdsale.connect(user).buyInICO({ value: Ether("1") })
      .should.be.rejectedWith("ICO Close")
  })
  it("buyInICO", async () => {
    (await crowdsale.weiRaisedInICO()).should.be.eq(Ether("0"))
    await crowdsale.connect(_).changeCrowdsalePhase("2")
    await crowdsale.connect(user).buyInICO({ value: Ether("1") })
  })
  it("weiRaisedInICO", async () => {
    (await crowdsale.weiRaisedInICO()).should.be.eq(Ether("1"))
  })
  it("SetPayOutLimit", async () => {
    await crowdsale.connect(moderator).SetPayOutLimit(Ether("5"))
      .should.be.rejectedWith(revert)
    await crowdsale.connect(_).SetPayOutLimit(Ether("5"))
    let available = await crowdsale.connect(_).getAvailablePayOut()
    available.toString().should.be.equal(Ether("5"))
  })
  it("sendPayout", async () => {
    let available = await crowdsale.connect(_).getAvailablePayOut()
    let ubal = await token.balanceOf(user.address)
    await crowdsale.connect(user).sendPayout(user.address, Ether("1"))
      .should.be.rejectedWith(revert)
    await crowdsale.connect(moderator).sendPayout(user.address, Ether("1"))
    let nubal = await token.balanceOf(user.address)
    nubal.should.be.eq(ubal.add(Ether("1")))
    let navailable = await crowdsale.connect(_).getAvailablePayOut()
    navailable.should.be.eq(available.sub(Ether("1")))
  })
  it("withdrow", async () => {
    let c1Bal = await ethers.provider.getBalance(comp1.address)
    let c2Bal = await ethers.provider.getBalance(comp2.address)
    await crowdsale.connect(user).withdrow(Ether("1"))
      .should.be.rejectedWith(revert)
    await crowdsale.connect(moderator).withdrow(Ether("1"))
      .should.be.rejectedWith(revert)
    await crowdsale.connect(_).withdrow(Ether("1"))
    let nc1Bal = await ethers.provider.getBalance(comp1.address)
    let nc2Bal = await ethers.provider.getBalance(comp2.address)
    nc1Bal.should.be.eq(c1Bal.add(Ether("1").mul(65).div(100)))
    nc2Bal.should.be.eq(c2Bal.add(Ether("1").mul(35).div(100)))
  })
})