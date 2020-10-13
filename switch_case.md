# Switch Case

The switch statement takes a variable. The variable is compared to all cases. 

If there is a match, the associated block of code is executed. If there is no match, the default code block is executed. 

When JavaScript reaches a `break` keyword, it breaks out of the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Switch cases use **strict** comparison (===)

### Example

```js
const number = 2;

switch(number) {
  case 0:
    console.log("The number was zero.");
    break;
  case 1:
  case 2:
  case 3:
    console.log("The number was one, two or three.");
    break;
  default:
    console.log("The number was an other number.");
}
```

In this example, the number is 2. As you can see the output will be: ` The number was one, two or three.`

| Number           | Output                              |
|:----------------:|:----------------------------------- |
| 0                | `The number was zero.`              |
| 1                | `The number was one, two or three.` |
| 2                | `The number was one, two or three.` |
| 3                | `The number was one, two or three.` |
| Any other number | `The number was an other number.`   |


