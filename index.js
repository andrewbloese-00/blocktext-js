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
//symbols
const SPACE = ["0000000", "0000000", "0000000", "0000000", "0000000"];
const DOT = ["0000000", "0000000", "0000000", "0011100", "0011100"];
const EXCLAIM = ["0011100", "0011100", "0011100", "0000000", "0011100"];
const EQUALS = ["0000000", "1111111", "0000000", "1111111", "0000000"];
const LCORNER = ["0000111", "0011100", "1110000", "0011100", "0000111"];
const RCORNER = ["1110000", "0011100", "0000111", "0011100", "1110000"];
const LPAREN = [
  "0001100",
  "0011000",
  "0110000",
  "0011000",
  "0001100",
]
const RPAREN = [
  "0011000",
  "0001100",
  "0000110",
  "0001100",
  "0011000",
]
const RCURLY = [
  "0110000",
  "0001100",
  "0011000",
  '0001100',  
  '0110000',  

]
const LCURLY = [
  "0000110",
  "0011000",
  "0001100",
  "0011000",
  "0000110",
]

const LSQBRACKET = [ 
  "1111000",
  "1100000",
  "1100000",
  "1100000",
  "1111000"
]

const RSQBRACKET = [
  "0001111",
  "0000011",
  "0000011",
  "0000011",
  "0001111",
]
const DOLLA = [
  "000100", 
  "0011111", 
  "1101000", 
  "0011100", 
  "0001011", 
  "1111100",
  "0001000"
];
const PERCENT = [
  "0000010",
  "0100100",
  "0001000",
  "0010010",
  "0100000",
]

const HASHTAG = [
  "0110110",
  "1111111",
  "0110110",
  "1111111",
  "0110110",
]

const CARET = [
  "0001000",
  "0010100",
  "0000000",
  "0000000",
  "0000000",
]
const AMPERSAND = [
  "0011100",
  "0010100",
  "0011110",
  "0100011",
  "0111111"
]
const STAR = [
  "0000000",
  "0101010",
  "0011100",
  "0101010",
  "0000000",
]

const PLUS = [
  "0000000",
  "0001000",
  "0111110",
  "0001000",
  "0000000",
]


const UNDERSCORE = [
  "0000000",
  "0000000",
  "0000000",
  "0000000",
  "1111111",
]

const QMARK = [
  "0011100",
  "0110110",
  "0001100",
  "0000000",
  "0001100"
]

const DOUBLEQUOTE = [
  "0110110",
  "0110110",
  "0000000",
  "0000000",
  "0000000"
]

const SINGLEQUOTE = [
  "0001000",
  "0001000",
  "0000000",
  "0000000",
  "0000000"
]

const AT = [
  "0111111100",
  "1001110010",
  "1011010010",
  "1000111110",
  "0111111111", 
]

const TILDE = [
  "00000000",
  "00110011",
  "11001100",
  "00000000",
  "00000000",
]

const RSLASH = ["0000111", "0001110", "0011100", "0111000", "1110000"];
const PIPE = ["0011100", "0011100", "0011100", "0011100", "0011100"];
const DASH = ["0000000", "0000000", "1111111", "1111111", "0000000"];
const COLON = ["0011100", "0011100", "0000000", "0011100", "0011100"];
const SEMICOLON = ["0011100", "0011100", "0000000", "0011100", "0001100"];


//arrows
const RARROW = [
  "0000000",
  "0000010",
  "1111111",
  "0000010",
  "0000000",
]

const LARROW = [
  "0000000",
  "0100000",
  "1111111",
  "0100000",
  "0000000",
]
const DOWNARROW = [
  "0001000",
  "0001000",
  "0001000",
  "0011100",
  "0001000",
]

const UPARROW = [
  "0001000",
  "0011100",
  "0001000",
  "0001000",
  "0001000",
]




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
  ";": SEMICOLON,
  "{": LCURLY,
  "}": RCURLY,
  "[": LSQBRACKET,
  "]": RSQBRACKET,
  "(": LPAREN,
  ")": RPAREN,
  "$": DOLLA,
  "%":PERCENT,
  "#": HASHTAG,
  "^":CARET,
  "&": AMPERSAND,
  "*":STAR,
  "+": PLUS,
  "_": UNDERSCORE,
  "?": QMARK,
  '"': DOUBLEQUOTE,
  "'": SINGLEQUOTE,
  "@": AT,
  "~": TILDE,
  "≥": RARROW, 
  "≤": LARROW,
  "√": DOWNARROW,
  "∆": UPARROW,

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

  let rows = -Infinity;
  for(let pattern of characterPatterns) 
    if(pattern.length > rows) rows = pattern.length


  let finalPattern = Array(rows);
  for (let i = 0; i < rows; i++) {
    finalPattern[i] = "";
  }

  for(let p = 0; p < characterPatterns.length; p++) {
    for(let i = 0; i < rows; i++){
      if(!characterPatterns[p][i]) //if row does not exist for that char then fill empty
        finalPattern[i] += "0".repeat(characterPatterns[p][0].length+spacing)
      else //otherwise fill row
        finalPattern[i] += "0".repeat(spacing) + characterPatterns[p][i]
    }
  }

  // for (const pattern of characterPatterns) {



  //   for (let i = 0; i < 5; i++) {
  //     finalPattern[i] += "0".repeat(spacing) + pattern[i];
  //   }
  // }

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
  SINGLE_CHAR: (char = "{") => {
    console.log(BlockLetter(ALPHABET[char]));
  },
  WORD: (wrd = "hello",fill="#") => {
    console.log(Title(wrd,{spacing:1,fill}));
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
