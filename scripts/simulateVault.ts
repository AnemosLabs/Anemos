import { getEligibleHolders } from "../src/engine/vaultController";
import { Vault, Holder } from "../src/types/vault";

const vault: Vault = {
  id: "vault-1",
  tokenAddress: "token123",
  minDays: 5,
  emissionRate: 100,
};

const holders: Holder[] = [
  { address: "wallet1", holdingDays: 10, earlyEntry: true },
  { address: "wallet2", holdingDays: 3, earlyEntry: false },
];

const results = getEligibleHolders(vault, holders);
console.log("Reward Distribution:", results);
