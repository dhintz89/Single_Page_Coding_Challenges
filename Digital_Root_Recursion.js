function digital_root(n) {
  let newN = n;
  if(newN.toString().length < 2) {
    return newN;
  } else {
    newN = Array.from(newN.toString()).map(Number).reduce((acc, cur) => acc + cur);
    return digital_root(newN);
  }
}
