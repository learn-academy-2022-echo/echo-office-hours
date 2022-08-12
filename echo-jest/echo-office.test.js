// Challenges
// IMPORTANT: Write the test FIRST, see it fail, then write the code to make it PASS.

// IMPORTANT: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// grab a boilerplate/templates

// w/pseudocode
// // a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {
//   // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//   it("returns a string that says hi", () => {
//     //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//     expect(hello()).toEqual("hi");
//   });
// });

// w/o pseudocode 
// describe("areYouHungry", () => {
//   it("returns eat food or keep working based on input", () => {
//     expect(areYouHungry("yes")).toEqual("eat food");
//     expect(areYouHungry("no")).toEqual("keep working");
//   });
// });

// Pseudocode Example https://github.com/learn-academy-2022-echo/Syllabus/blob/main/javascript/functions.md
// Function Signature
// input: number
// output: string indicating allowed, denied, or error

// Examples
// input: 39 // output --> "Cannot ride the rollercoaster"
// input: 45 // output --> "Buckle up, let's ride"
// input: "yolo" // output --> "error"

// Process
// create a function called tallEnough that takes in a number called height
// if height is less than 40 return "Cannot ride the rollercoaster"
// if height is greater than or equal to 40 return "Buckle up, let's ride"
// any other input return error


// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// Write the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Write the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
describe("fizzbuzz", () => {
  it("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'", () => {
    expect(fizzbuzz(6)).toEqual('fizz');
    expect(fizzbuzz(10)).toEqual('buzz');
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
  });
});

// Good failure:  FAIL  ./echo-office-hour.test.js
// fizzbuzz
//   ✕ If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz' (1 ms)

// ● fizzbuzz › If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'

//   ReferenceError: fizzbuzz is not defined

// Write the function that will make the test pass.

// PSEUDOCODE
// Function Signature
// input: number
// output: string indicating fizz, buzz, fizzbuzz

// Examples
// input: 6 // output --> "fizz"
// input: 10 // output --> "buzz"
// input: 15 // output --> "fizzbuzz"

// Process
// create a function called fizzbuzz that takes in a number
// If a number is a multiple of 3, replace it with the word 'fizz'. 
// If a number is a multiple of five, replace it with the word 'buzz'. 
// If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'

// Possible tools
// conditional statements, strict equality operators for boolean value

const fizzbuzz = (number) => {
  if(number % 3 === 0 && number % 5 === 0) {
    // console.log("fizzbuzz", number)
    return "fizzbuzz"
  } else if(number % 3 === 0) {
    // console.log("fizz", number)
    return "fizz"
  } else if(number % 5 === 0) {
    // console.log("buzz", number)
    return "buzz"
  } 
} 


