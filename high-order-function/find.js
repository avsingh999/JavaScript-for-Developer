// Existed Array
let list = [1, 2, 3, 4, 3, 5];

//Using find function to get the first element satisfy the condition
let number = list.find((element) => element == 3);

console.log(list.indexOf(number)); //Return the index of first element 3; number = 2
