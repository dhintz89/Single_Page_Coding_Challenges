// Option 1: use binary comparison (O(lg n) time)

function findRotationPoint(words) {
  // Find the rotation point in the vector
  // ex array = ["pear", "raisin", "star", "tummy", "zulu", "apple", "banana", "date"]
  
  let floorIdx = 0;
  let ceilingIdx = words.length - 1;
  
  // first, check that input is pivoted, if not, return -1
  if(words[ceilingIdx] >= words[floorIdx]) {
    return -1
  }
  
  while(floorIdx < ceilingIdx) {
    // guess index is halfway between floor and ceiling index  ("tummy")
    let guessIdx = Math.floor(floorIdx + ((ceilingIdx - floorIdx) / 2));
    
    // is the current guess larger than first word?
    // if yes, the answer is between the current guess and the current ceiling
    if(words[guessIdx] >= words[0]) {
      floorIdx = guessIdx;
    // if no, the answer is between the current guess and the current floor
    } else {
      ceilingIdx = guessIdx;
    }
    
    // round 1 result (tummy > pear, so pivot must be between pear & tummy): ["tummy", "zulu", "apple", "banana", "date"]
    // round 2 result (apple < pear, so pivot must be b/w tummy & apple): ["tummy", "zulu", "apple"]
    // round 3 result (zulu > tummy, so pivot must be b/w zulu & apple): ["zulu", "apple"]
    
    // when there are only 2 items left, break loop to return the higher index (since the pivot point will always be after the point before pivoting)
    if (floorIdx + 1 === ceilingIdx) {
      break;
    }
  
  // end while loop and return answer
  }
  return ceilingIdx;
}




// Option 2: find first index of a sorted array within original array (O(n) time)

// function findRotationPoint(words) {
//     // Find the rotation point in the vector
//     // copy words array
//     let sorted = [...words];
//     // sort copy of array to find first index (this is first alphabetical)
//     sorted.sort((a, b) => {
//       if(a.toUpperCase() < b.toUpperCase()) {
//           return -1;
//       } else if (a.toUpperCase() > b.toUpperCase()) {
//           return 1;
//       } else {
//           return 0;
//       };
//     });
//     find the first alphabetic value in the original array and return its index
//     return words.indexOf(sorted[0]);
//   }









// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
