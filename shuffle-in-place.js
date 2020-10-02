// helper function: get a random number between a floor and a ceiling
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(input) {
  // shuffle the array in place
    input.forEach((val, i) => {
        // pick random index between current index and end of array (so each item can only be chosen once)
        // remove from array and store as temp variable
        let temp = input.splice(getRandom(i, input.length-1),1);
        // add temp variable to the beginning of the array (since i increments, this will not be chosen a second time)
        input.unshift(temp[0]);
    });
    return input;
};


const sample = [1, 2, 3, 4, 5];
console.log('Initial array: ', sample);
shuffle(sample);
console.log('Shuffled array: ', sample);
