// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// my solution

var countBits = function(n) {
  const bits = (n.toString(2).split(''));
  const result = bits.reduce( (sum, num) => sum + Number(num), 0);
  return result;
};
