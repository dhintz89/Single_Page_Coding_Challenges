// manually loop through letters of word:
function numKeypadSolutions(wordlist, keypads) {
    // output is per keypad: default each keypad counter to 0 & increment each time word can be spelled
    const output = [];
    keypads.forEach(key => {
      output.push(0);
    });
    
    // loop through keypads since these are symbolized by the output array
    keypads.forEach((key, k) => {
      // store the 1st letter of keypad: this MUST be in the word (can break loop early if not)
      let firstLetter = key[0];
      // sort the keypad
      let kSort = key.split('').sort();
      console.log("k: " + kSort);
      
      // loop through words
      wordlist.forEach((word, w) => {
        // check for firstLetter - if not present, move on
        if(word.includes(firstLetter)) {
          // sort the word
          let wSort = word.split('').sort();
          console.log("w: " + wSort);
          // loop through letters of word to make sure they are all in keypad
          let i = 0; // word letter
          let j = 0; // keypad letter
          
          // check word letters against keypad letters.  Once one or the other has ended, eval result
          // note: since both are sorted, we can be 'greedy'
          // "PLEAS" --> "AELPS"
          // "AELPXYZ" --> "AELPXYZ"
          // "A" -> "E" -> "L" -> "P" -> we know "S" will come after "P", so start search there.
          while(i< wSort.length && j < kSort.length) {
            if(wSort[i] === kSort[j]) {
              i++; // letter found in keypad!  next letter from word
            } else {
              j++; // letter not found in keypad, check next letter from keypad
            }
          }
          // loop end, check if it word or keypad ran out of letters
          // word = all letters are in key (true, increment keypad counter)
          // keypad = letter(s) from word missing (false, do NOT increment keypad counter)
          if(i === wSort.length) {
            output[k] += 1; // increment counter
          } // do nothing (don't increment) if all letter in word are not found in keypad
          
        } // do nothing (don't increment) if 1st letter is not present in word
      }) // end word, go to next
    }) // end keypad, go to next
    
  return output;
}



// convert to array and filter
function numKeypadSolutions(wordlist, keypads) {
    // output is per keypad: default each keypad counter to 0 & increment each time word can be spelled
    const output = [];
    keypads.forEach(key => {
      output.push(0);
    });
    
    // loop through keypads since these are symbolized by the output array
    keypads.forEach((key, k) => {
      // break keypad into Array
      let kArr = key.split('');
      // console.log("k: " + kSet);
      
      // loop through words
      wordlist.forEach((word, w) => {
        // check for firstLetter - if not present, move on
        if(word.includes(key[0])) {
          // break word into Set
          let wArr = word.split('');
          // console.log("w: " + wSet);
          // find intersecting data (letters that are in both word and keypad)
          let intersect = wArr.filter(letter => (kArr.includes(letter)));
          // check if size of word Array is the same as the intersect (all letters counted)
          // console.log(intersect.size + " | " + wSet.size)
          if(intersect.length === wArr.length) {
            output[k] += 1; // increment keypad counter
          } // do nothing (don't increment) if all letters from word set are not found in intersect
        } // do nothing (don't increment) if 1st letter is not present in word
      }) // end word, go to next
    }) // end keypad, go to next
    
  return output;
}
