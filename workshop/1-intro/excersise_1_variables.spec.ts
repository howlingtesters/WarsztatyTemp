import { test } from "@playwright/test";

// Declare constant
const apple = "apple";
const papaya: string = "papaya";
const orange: String = "orange";
const startingWithFruits = 10;

test("Variables", async () => {
  // Declare variable
  let stringStartingWithFruits = <string>(<unknown>startingWithFruits);

  // Type comparisons
  console.log(typeof startingWithFruits);
  console.log(typeof stringStartingWithFruits);
  console.log(apple);
  console.log(papaya == orange);
  console.log(papaya === orange);
  console.log(typeof papaya == typeof orange);
  console.log(typeof papaya === typeof orange);
});

test("Math", async () => {
  // Random values
  console.log(Math.random()); // random value between 0 and 1

  // Rounding
  console.log(Math.ceil(43.8)); // 44
  console.log(Math.floor(43.8)); // 43
  console.log(Math.round(43.8)); // 44

  // Parsing values
  console.log(parseInt("10")); // returns 10
  console.log(parseFloat("10.33")); // returns 10.33
  console.log(Number.isInteger(2017)); // true
  console.log((123).toString()); // '123'

  // Returns a string representing a number in fixed-point notation
  var x = 9.656;
  console.log(x.toFixed(0)); // returns 10
  console.log(x.toFixed(2)); // returns 9.66
  console.log(x.toFixed(4)); // returns 9.6560
  console.log(x.toFixed(6)); // returns 9.656000

  // Returns value with given precision
  console.log(x.toPrecision()); // returns 9.656
  console.log(x.toPrecision(2)); // returns 9.7
  console.log(x.toPrecision(4)); // returns 9.656
  console.log(x.toPrecision(6)); // returns 9.65600
});

test("String", async () => {
  // Get text length
  console.log("ahoj".length); // 4

  // Change text
  console.log("hello".toUpperCase()); // 'HELLO'
  console.log("Miss".toLowerCase()); // 'miss'
  console.log("Hey".endsWith("i")); // false
  console.log("Hey".startsWith("H")); // true
  console.log("   text   ".trim()); // 'text'

  // Best way for text formatting
  const myPet = "armadillo";
  console.log(`I own a pet ${myPet}.`); // 'I own a pet armadillo.'

  // User only part of the string
  var str = "Apple, Banana, Kiwi";
  console.log(str.slice(7, 13)); // 'Banana'
  console.log(str.slice(-12, -6)); // 'Banana'
  console.log(str.slice(7)); // 'Banana, Kiwi'
  console.log(str.slice(-12)); // 'Banana, Kiwi'
  console.log(str.substring(7, 13)); // 'Banana'
  console.log(str.substring(7)); // 'Banana, Kiwi'

  // Split string into list
  var txt = "a,b,c,d,e"; // String
  console.log(txt.split(",")); // ['a','b','c','d','e']

  // Replace - make note that it replaces only first appearance
  str = "Please visit Microsoft and Microsoft!";
  console.log(str.replace("Microsoft", "W3Schools")); // Please visit W3Schools and Microsoft!
  console.log(str.replace(/Microsoft/g, "W3Schools")); // Please visit W3Schools and W3Schools!
});

test("Arrays", async () => {
  // Basic functions
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.length); // 4
  console.log(fruits.toString()); // Banana,Orange,Apple,Mango
  console.log(fruits.join(" * ")); // Banana * Orange * Apple * Mango

  // Change elements
  console.log(fruits.pop()); // 'Mango' => removes last element
  console.log(fruits.push("Kiwi")); // 4 => add element to array and return new length
  console.log(fruits.shift()); // 'Banana' => removes first element
  console.log(fruits.unshift("Lemon")); // 4 => add element at the beginning and return new length

  // Using lists
  console.log(fruits[0]); // Banana
  console.log(["Emil", "Tobias", "Linus"]);
  console.log(fruits.concat(["Potato", "Carrot"])); // [ 'Lemon', 'Orange', 'Apple', 'Kiwi', 'Potato', 'Carrot' ] => merging two arrays and returns the result

  // Return part of the list
  console.log(fruits.slice(1, 3)); // ['Orange', 'Apple']
  console.log(fruits.slice(3)); // ['Mango']

  // Sorting
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Mango', 'Orange' ] => sort the elements of fruits
  console.log(fruits.reverse()); // [ 'Orange', 'Mango', 'Banana', 'Apple' ] => reverse the order of the elements
});
