//start pattern constants
const A = ["0111110", "1100011", "1111111", "1100011", "1100011"];
const B = ["1111110", "1100011", "1111110", "1100011", "1111111"];
const C = ["0111111", "1100000", "1100000", "1100000", "0111111"];
const D = ["1111110", "1100011", "1100011", "1100011", "1111110"];
const E = ["1111111", "1100000", "1111100", "1100000", "1111111"];
const F = ["1111111", "1100000", "1111100", "1100000", "1100000"];
const G = ["1111111", "1100000", "1100111", "1100011", "1111111"];
const H = ["1100011", "1100011", "1111111", "1100011", "1100011"];
const I = ["1111111", "0011100", "0011100", "0011100", "1111111"];
const J = ["0000011", "0000011", "0000011", "1110011", "0111110"];
const K = ["1100011", "1100110", "1111000", "1100110", "1100011"];
const L = ["1100000", "1100000", "1100000", "1100000", "1111111"];
const M = ["0111110", "1101011", "1101011", "1100011", "1100011"];
const N = ["1100011", "1110011", "1111011", "1101111", "1100111"];
const O = ["0111110", "1100011", "1100011", "1100011", "0111110"];
const P = ["1111110", "1100011", "1111110", "1100000", "1100000"];
const Q = ["0111100", "1100110", "1100110", "0111110", "0000111"];
const R = ["1111110", "1100011", "1111110", "1101100", "1100111"];
const S = ["0011111", "1110000", "0011100", "0000111", "1111100"];
const T = ["1111111", "0011100", "0011100", "0011100", "0011100"];
const U = ["1100011", "1100011", "1100011", "1100011", "0111110"];
const V = ["1100011", "1100011", "0100010", "0010100", "0001000"];
const W = ["1100011", "1101011", "1101011", "0110110", "0110110"];
const X = ["1100011", "0110110", "0011100", "0110110", "1100011"];
const Y = ["1100011", "0110110", "0011100", "0110000", "1100000"];
const Z = ["1111111", "0000011", "0001100", "0110000", "1111111"];

const ZERO = ["0111110", "1100011", "1101011", "1100011", "0111110"];
const ONE = ["0001100", "0110100", "0001100", "0001100", "1111111"];
const TWO = ["0111111", "1100011", "0000110", "0011100", "1111111"];
const THREE = ["1111111", "0000011", "0011111", "0000011", "1111111"];
const FOUR = ["0110011", "1100011", "1111111", "0000011", "0000011"];
const FIVE = ["1111111", "1100000", "1111110", "0000111", "1111111"];
const SIX = ["0001100", "0011000", "0111100", "1100110", "0111100"];
const SEVEN = ["1111111", "1100011", "0001100", "0011000", "011000"];
const EIGHT = ["0111110", "1100011", "0011100", "1100011", "0111110"];
const NINE = ["0011111", "1110011", "0011110", "0001100", "0011000"];
const SPACE = ["0000000", "0000000", "0000000", "0000000", "0000000"];
const DOT = ["0000000", "0000000", "0000000", "0011100", "0011100"];
const EXCLAIM = ["0011100", "0011100", "0011100", "0000000", "0011100"];
const EQUALS = ["0000000", "1111111", "0000000", "1111111", "0000000"];
const LCORNER = ["0000111", "0011100", "1110000", "0011100", "0000111"];
const RCORNER = ["1110000", "0011100", "0000111", "0011100", "1110000"];
const RSLASH = ["0000111", "0001110", "0011100", "0111000", "1110000"];
const PIPE = ["0011100", "0011100", "0011100", "0011100", "0011100"];
const DASH = ["0000000", "0000000", "1111111", "1111111", "0000000"];
const COLON = ["0011100", "0011100", "0000000", "0011100", "0011100"];
//end pattern constants

//Alphabet Lookup Table
export const ALPHABET = {
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
  f: F,
  g: G,
  h: H,
  i: I,
  j: J,
  k: K,
  l: L,
  m: M,
  n: N,
  o: O,
  p: P,
  q: Q,
  r: R,
  s: S,
  t: T,
  u: U,
  v: V,
  w: W,
  x: X,
  y: Y,
  z: Z,
  0: ZERO,
  1: ONE,
  2: TWO,
  3: THREE,
  4: FOUR,
  5: FIVE,
  6: SIX,
  7: SEVEN,
  8: EIGHT,
  9: NINE,
  " ": SPACE,
  ".": DOT,
  "!": EXCLAIM,
  "=": EQUALS,
  "<": LCORNER,
  ">": RCORNER,
  "/": RSLASH,
  "|": PIPE,
  "-": DASH,
  ":": COLON,
};

export function BlockLetter(pattern, fill = "#") {
  let text = "\n";
  for (let r = 0; r < pattern.length; r++) {
    for (let c = 0; c < pattern[r].length; c++) {
      if (pattern[r][c] === "0") text += " ";
      else text += fill;
    }
    text += "\n";
  }

  return text;
}

export function BlockWord(characterPatterns, spacing = 2, fill = "#") {
  let finalPattern = Array(5);
  for (let i = 0; i < 5; i++) {
    finalPattern[i] = "";
  }
  for (const pattern of characterPatterns) {
    for (let i = 0; i < 5; i++) {
      finalPattern[i] += "0".repeat(spacing) + pattern[i];
    }
  }

  return BlockLetter(finalPattern, fill);
}

export function Title(text, options = { spacing: 2, fill: "#" }) {
  const spacing = options.spacing || 0;
  const fill = options.fill || "#";
  const chars = [...text].map((char) => ALPHABET[char.toLowerCase()]);
  const word = BlockWord(chars, spacing || 2, fill);
  return word;
}

export const TESTS = {
  ANIMATED: () => {
    let fills = "oO",
      fill = 0;

    const lines = ["THANKS FOR", "TESTING <3"];

    function animate() {
      console.clear();

      for (let line of lines) {
        console.log(
          Title(line, {
            fill: fills[fill],
            spacing: 2,
          }),
        );
      }
      console.log("ctrl+c to quit :)");

      fill = (fill + 1) % fills.length;
    }

    const ivId = setInterval(animate, 200);
    return { cleanup: () => clearInterval(ivId) };
  },
  SINGLE_CHAR: (char = "a") => {
    console.log(BlockLetter(ALPHABET[char]));
  },
  WORD: (wrd = "hello") => {
    console.log(Title(wrd));
  },
  ALPHABET: async () => {
    for (let char in ALPHABET) {
      //wait
      console.clear();
      console.log(BlockLetter(ALPHABET[char]));
      await new Promise((res) => setTimeout(res, 500));
    }
  },
};
