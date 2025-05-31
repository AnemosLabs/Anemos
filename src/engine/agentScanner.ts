export function scanWallets(wallets: string[]) {
  return wallets.map((wallet) => ({
    wallet,
    signalScore: Math.random().toFixed(4), // placeholder signal
    lastSeen: new Date().toISOString(),
  }));
}
