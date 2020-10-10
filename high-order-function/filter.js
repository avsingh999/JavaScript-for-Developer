let list = [1, 2, 3, 4, 5];
let newList = list.filter((element) => element < 3);
console.log(list); // [ 1, 2, 3, 4, 5 ]
console.log(newList); // [ 1, 2 ]

//Filter function use the original array then return a new array with element sastify the condition
