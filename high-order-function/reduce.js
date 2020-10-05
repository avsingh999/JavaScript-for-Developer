let list = [1, 2, 3, 4, 5];

function reducer(a, b) {
  return a + b;
}

let sum = list.reduce(reducer, 0); // Caculate sum of array

console.log(sum); //15

let sum1 = list.reduce(reducer, 10);// Caculate sum of array with initial value is 10

console.log(sum1); //25

//Reduce function subtract the numbers in the array, starting from the beginning:
//First argument of  reduce function is a function.
//Second argument of reduce function is a initial value.
