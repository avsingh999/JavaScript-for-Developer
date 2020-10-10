# Find

Get the value of the first element in the array that has a value that sastify the condition

## Example

```
list = [1,2,3,4,5]

let number = list.find((element) => element > 3);

```

## Output

```
    4

```

# Map

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array

## Example

```
let list = [1, 2, 3, 4, 5];

let newList = list.map(element => element*2);
```

## Output

```
    [ 2, 4, 6, 8, 10 ]  //newList

```

# Filter

The filter() method creates an array filled with all array elements that sastify the condition

## Example

```
    let list = [1, 2, 3, 4, 5];
    let newList = list.filter((element) => element < 3);

```

## Output

```
    [ 1, 2 ] //newList

```

# Reduce
    The reduce() method reduces the array to a single value

## Example

```
    let list = [1, 2, 3, 4, 5];

    function reducer(a, b) {
    return a + b;
    }

    let sum = list.reduce(reducer, 0);

```

## Output

```
    15

```