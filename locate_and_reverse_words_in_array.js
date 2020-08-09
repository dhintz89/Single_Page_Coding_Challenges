function reverseWords(message) {

  // Decode the message by reversing the words
  
  message.reverse()
  let workIndex = 0;  // beginning of current word
  let curIndex = 0;   // end of current word
  let word;           // section of array containing current word's letters
  
  // find next space in array - this is the end of the next word
  while(message.findIndex((char, ind) => char == " " && ind > curIndex) != -1) {
    curIndex = message.findIndex((char, ind) => char == " " && ind > curIndex)
  // pull the word out of message array, reverse the letters, then add back into message in same place
    word = message.splice(workIndex, curIndex-workIndex);
    word.reverse();
    message.splice(workIndex, 0, ...word);
  // set starting point of next word (+1 due to the space)
    workIndex = curIndex+1;
  }
  // reverse the final word
    word = message.splice(workIndex, message.length);
    word.reverse();
    message.splice(workIndex, 0, ...word);
}



// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
