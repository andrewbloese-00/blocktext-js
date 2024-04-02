import { TESTS } from "./index.js";

async function main() {

  TESTS.SINGLE_CHAR("√")
  TESTS.SINGLE_CHAR("∆")
  TESTS.SINGLE_CHAR("≤")
  TESTS.SINGLE_CHAR("≥")
  TESTS.WORD("BUILT BY...","/")
  TESTS.WORD("dev@andrewbloese.me","|")
  await new Promise((res) => setTimeout(res, 2000));

  console.log("Display Block Character...");
  TESTS.SINGLE_CHAR();
  await new Promise((res) => setTimeout(res, 500));
  console.clear();
  console.log("Display Word...");
  TESTS.WORD();
  await new Promise((res) => setTimeout(res, 500));

  console.log("Alphabet...");
  await TESTS.ALPHABET();
  await new Promise((res) => setTimeout(res, 500));
  console.clear();
  console.log("Animated");
  TESTS.ANIMATED();
}
main();
