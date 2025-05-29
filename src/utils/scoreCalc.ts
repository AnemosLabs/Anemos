import { Holder } from "../types/vault";

export function calculateSignalScore(holder: Holder): number {
  const durationWeight = Math.min(holder.holdingDays / 30, 1); // max out at 30 days
  const stabilityBonus = holder.earlyEntry ? 1.1 : 1;
  return durationWeight * stabilityBonus;
}
