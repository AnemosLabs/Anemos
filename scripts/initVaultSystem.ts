import { initializeVault } from "../src/engine/vaultController";
import { log } from "../src/utils/logger";

const token = "MEME123";
const supply = 1000000;

log(`Initializing vault for ${token} with ${supply} tokens...`);
initializeVault(token, supply);
