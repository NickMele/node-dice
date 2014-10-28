# DiceJS
Allows you to execute a command in dice notation, returning the results of that command.

# Install
```
npm install node-dice-js
```

# Example
```js
var Dice = require('dice');
var dice = new Dice();

dice.execute('4d20');
```
Output
```
{ 
  command: '4d20',
  parsed: {
    times: 4,
    faces: 20,
    keep: null,
    lowest: false,
    highest: false,
    multiplier: 1,
    modifier: 0,
    repeat: 1
  },
  outcomes: [
    {
      rolls: [19, 12, 10, 1],
      total: 42
    }
  ],
  text: 'The result of 4d20 is [ 19 + 12 + 10 + 1 ] = 42',
  verbose: [
    'Roll #1: 19',
    'Roll #2: 12',
    'Roll #3: 10',
    'Roll #4: 1',
    'Adding up all the rolls: 19 + 12 + 10 + 1 = 42',
    'The total of outcome #1 is 42',
    'The results of 4d20 is 42'
  ]
}
```

# Methods
```js
var Dice = require('dice');
var dice = new Dice();
```

## dice.roll(faces)
Returns a random number between 1 and the number of `faces` provided.

If `faces` is not a number, it will throw an error.

## dice.parse(command)
Parses a command in [dice notation](http://en.wikipedia.org/wiki/Dice_notation).

`(AdX(kY)-LxCM)xR`
- `A` - the number of dice to be rolled (default: 1)
- `d` - separator that stands for die or dice
- `X` - the number of face of each die
- `(kY)` - number of dice to keep from roll (optional)
- `-L` - take the lowest dice from all the rolls (optional)
- `-H` - take the highest dice from all the rolls (optional)
- `C` - the multiplier, must be a natural number (optional, default: 1)
- `B` - the modifier, must be an integer (optional, default: 0)
- `R` - the number of times to repeat the entire command (optional, default: 1)

The output of `parse` looks like:
```
{
  times: 4,
  faces: 20,
  keep: null,
  lowest: false,
  highest: false,
  multiplier: 1,
  modifier: 0,
  repeat: 1
}
```

## dice.format(parsed)
Formats an object given from the parse command into a command in [dice notation](http://en.wikipedia.org/wiki/Dice_notation).

- `times` - the number of dice to be rolled (default: 1)
- `faces` - the number of face of each die
- `keep` - number of dice to keep from roll (optional)
- `lowest` - take the lowest dice from all the rolls (optional)
- `highest` - take the highest dice from all the rolls (optional)
- `multiplier` - the multiplier, must be a natural number (optional, default: 1)
- `modifier` - the modifier, must be an integer (optional, default: 0)
- `repeat` - the number of times to repeat the entire command (optional, default: 1)

## dice.execute(command)
Executes a command given in dice notation, and returns the results

Output
```
{ 
  command: '4d20',
  parsed: {
    times: 4,
    faces: 20,
    keep: null,
    lowest: false,
    highest: false,
    multiplier: 1,
    modifier: 0,
    repeat: 1
  },
  outcomes: [
    {
      rolls: [19, 12, 10, 1],
      total: 42
    }
  ],
  text: 'The result of 4d20 is [ 19 + 12 + 10 + 1 ] = 42',
  verbose: [
    'Roll #1: 19',
    'Roll #2: 12',
    'Roll #3: 10',
    'Roll #4: 1',
    'Adding up all the rolls: 19 + 12 + 10 + 1 = 42',
    'The total of outcome #1 is 42',
    'The results of 4d20 is 42'
  ]
}
```

# License
MIT
