# Block Text JS
A simple block text generator for nodejs cli applications. A-Z and 0-9 are covered as well as some (. : < > / \ - = ) special symbols with more to come!
- No External Dependencies!!
****
## Usage
1. Clone the repository where you will use it
```bash 
  git clone https://github.com/andrewbloese-00/blocktext-js 
```

2. Import the resources you need, come up with your own patterns and use the pattern to string converters or use the Title function to simply convert strings into block characters that can easily be displayed in the console / terminal. 

****
## Exported Items
### ALPHABET 
```javascript
import {ALPHABET} from 'path/to/blocktxt.js'
```
An object containing keys and _patterns_ for the supported block characters.


### Title
`import {Title} from 'path/to/blocktxt.js'`
A function that converts an input string into a printable sequence of block text characters. Does not break lines. Adjustable word spacing and fill character in `options`. 
- text: string
  > the single line title as a string (note will not break lines...)
- options: `{ spacing?:number, fill?:string }`
  > default spacing (between words) is 2, default fill is `#`


### BlockLetter
A function that converts a pattern array (an array of bitstrings) into a printable string representing the given pattern in text art. 
```javascript
import {BlockLetter} from 'path/to/blocktxt.js'
```

- pattern: string[]
  > the `ALPHABET` pattern used to generate the character,
   ie ALPHABET.a | ALPHABET.b | ...
- fill?:string
  > the character used to 'fill' cells, default is `#`


### BlockWord
A function that combines a list of character patterns into a single pattern representing a sequence of the input characters then uses that pattern to generate a formatted block text string. 
```javascript 
import {BlockWord} from 'path/to/blocktxt.js'
```
- characterPatterns : `Array<string[]>` 
  > a list of character patterns to be joined into a string. NOTE: all patterns must have the same number of rows (array length) and each row of a given pattern should also be the same length.
- spacing? : `number`
  > the padding between characters, default is `2`
- fill?: `string`
  > the character used to 'fill' cells, default is `#`



****

## Demo
To see a quick demo , run the test command: 

```bash
  npm test
```

You should see it print a single character, then a word, then cycle through the alphabet and then land on a special animated screen!



****

## Plans
- [ ] add support for lowercase characters
- [x] left right up down arrows
- [ ] add individual pattern coloring 
- [ ] add underline / bold / italic modes






