export interface Vault {
  id: string;
  tokenAddress: string;
  minDays: number;
  emissionRate: number; // per day
}

export interface Holder {
  address: string;
  holdingDays: number;
  earlyEntry: boolean;
}
