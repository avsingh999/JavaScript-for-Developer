const  firstOutput = fizzBuzz(15); // Returns FizzBuzz
const secondOutput = fizzBuzz(9); // Returns Fizz
const thirdOutput = fizzBuzz(10); //Returns Buzz
const fourthOutput = fizzBuzz(); // Returns NaN

console.log(firstOutput)
console.log(secondOutput)
console.log(thirdOutput);
console.log(fourthOutput);

function fizzBuzz(input) {
    if (typeof input != "number")
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return "FizzBuzz";

    if (input % 3 === 0)
        return "Fizz";

    if (input % 5 === 0)
        return "Buzz";

    return input;
}