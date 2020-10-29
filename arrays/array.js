// Create am Array

let dogs = ['Shiba', 'German Shepherd', 'Labrador', 'Corgi']

console.log(dogs.length) // 4

// Accessing items in Array using indexes

let first = dogs[0] // Shiba

let last = dogs[dogs.length - 1] // Corgi

// Looping over an Array

dogs.forEach(function(item, index) {
  console.log(item, index)
})
// Shiba 0
// German Shepherd 1
// Labrador 2
// Corgi 3

// Adding new items to the end of an Array

let newDogs = dogs.push('Bulldog')
// ['Shiba', 'German Shepherd', 'Labrador', 'Corgi', 'Bulldog']

// Removing item at the end of an Array

let last = dogs.pop() // removes Bulldog

// Adding items at the front of an Array

let newDogs2 = dogs.unshift('Beagle')

// Finding indexex of an item in the Array

let position = dogs.indexOf('German Shepherd')
// 1

// Removing an item by index position

let removedDog = dogs.splice(position, 1) // removed Shiba
// ['Beagle', 'German Shepherd', 'Labrador', 'Corgi']

// Removing items by index position

let removedDogs = dogs.splice(position, 2)
// ['Beagle', 'Corgi']

// Copying an Array
let shallowCopy = dogs.slice()
// ['Beagle', 'Corgi']

// for more information, please visit:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
