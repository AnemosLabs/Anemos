import { scanWallets } from "../src/engine/agentScanner";

const testWallets = [
  "0x1234abcd...",
  "0x5678efgh...",
  "0x9abcdeff...",
];

const results = scanWallets(testWallets);
console.log("Agent Tick Results:", results);
