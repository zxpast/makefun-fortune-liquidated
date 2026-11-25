import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie for the Liquidated Trader — one line, ≤20 words, 1–160 chars.
// Fortune voice up front ("The stars say..."), then the punchline breaks it:
// the exchange has claimed the trader's own liquidation price as its lucky
// number — the classic fortune-slip "lucky numbers" trope turned against him.
const LINE =
  "The stars say your next trade will succeed, the exchange already reserved your liquidation price as its lucky number.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
