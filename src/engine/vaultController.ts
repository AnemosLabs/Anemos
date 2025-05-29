import { Vault, Holder } from "../types/vault";
import { calculateSignalScore } from "../utils/scoreCalc";

export function getEligibleHolders(vault: Vault, holders: Holder[]) {
  return holders
    .filter(h => h.holdingDays >= vault.minDays)
    .map(h => ({
      wallet: h.address,
      reward: calculateSignalScore(h) * vault.emissionRate
    }));
}
