var appleNames = ["Cripps Pink", "Honeycrisp", "Granny Smith", "Gala"]
appleNames.pop()
console.log(appleNames);

// used `pop()` method – Remove an element from the end of the array.

var birthDates = [3, 6, 21, 17, 10]
birthDates.push(21)
console.log(birthDates)

// used `push()` method - – Insert an element at the end of the array.

var fourBooleans = ["true", "false", "yes", "no"]
fourBooleans.shift()
console.log(fourBooleans)

// used shift() – Remove an element from the beginning of the array.

// [Intentionally open-ended] Demonstrate your understanding of index positions in this file. 
// You can write an explanation, provide some examples with the Arrays you’ve created, or 
// anything else.

// In JavaScript arrays are zero-indexed. The first element of an array is at index 0, 
// the second is at index 1, and so on — and the last element is at the value of the array's
//  length property minus 1. So each value in the array has a number like its own subscript 
// that correlates to its position in the array. In the examples below the index position for
//  an array element named "Banana" would be 0. Even though the numerical position in the array
//  for this element is 1. In life, that would be correct. In JavaScript it would not. 
// The right answer would be zero, because arrays are counted not from 1 but from zero.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)