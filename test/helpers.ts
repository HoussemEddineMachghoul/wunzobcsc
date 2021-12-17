import { BigNumber } from "ethers"
import { ethers } from "hardhat"

export async function latestTime() {
    let latest = await ethers.provider._getBlock("latest")

    return latest.timestamp

}
export async function increaseTime(duration: number): Promise<void> {
    try {

        let res = await ethers.provider.send("evm_increaseTime", [duration])
        await ethers.provider.send("evm_mine", [])

        return
    } catch (e) {
        console.error(e)
    }
}
export async function increaseTimeTo(target: number) {
    let now = await latestTime();
    if (target < (now)) throw Error(`Cannot increase current time(${now}) to a moment in the past(${target})`);
    let diff = target - (now);
    return increaseTime(diff);
}
export const duration = {
    seconds: function (val: number) { return val; },
    minutes: function (val: number) { return this.seconds(60) * (val); },
    hours: function (val: number) { return this.minutes(60) * (val); },
    days: function (val: number) { return this.hours(24) * (val); },
    weeks: function (val: number) { return this.days(7) * (val); },
    years: function (val: number) { return this.days(365) * (val); },
};
