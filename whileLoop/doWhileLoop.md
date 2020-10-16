# Do while loop
The block of code will execute at least once even if the condition is false. The code block is executed before the condition is tested.

# Syntax
```javascript
do {
    // Code block executed
} while ( condition )
```

# Examples
```javascript
let number = 0;

do { // This block of code will execute at least once even if the condition is false. The code block is executed before the condition is tested.
    console.log(`Current number => ${number}`) 
    number++
} while (number != 10)  
```
```javascript
let number = 0;

do { // This block of code will execute at least once even if the condition is false. The code block is executed before the condition is tested.
    console.log(`Current number => ${number}`)
    number++
} while (number == 0)  // The code wouldn't be looped again because it already meets its condition. 
```

# Results

```
Current number => 0
Current number => 1
Current number => 2
Current number => 3
Current number => 4
Current number => 5
Current number => 6
Current number => 7
Current number => 8
Current number => 9
```

```
Current number => 0
```