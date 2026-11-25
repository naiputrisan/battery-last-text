import { mkdirSync, writeFileSync } from "node:fs";

// The battery's last text to its charger, one line, at most 200 characters.
const TEXT =
  "I waited all day at 1%, watching you walk past me to charge everything but me. You had one job. It was me. Goodbye — and yes, I am leaving you on read.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, on a single line. Fail loudly here instead of
// shipping an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry is ${TEXT.length} characters, must be 1-200`);
}
if (TEXT.trim().length === 0 || TEXT.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT);
