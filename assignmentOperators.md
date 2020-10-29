### JavaScript Assignment Operators
---
Assignment operators assign values to JavaScript variables.

| Operator | Example | Same As |
|----------|---------|---------|
| = | x = y | x = y |
| += | x += y | x = x + y |
| -= | x -= y |	x = x - y |
| *= | x *= y |	x = x * y |
| /= | x /= y | x = x / y |
| %= | x %= y |	x = x % y |
| &= | x &= y | x = x & y |
| ^= | x ^= y | x = x ^ y |

---

Examples

The `=` assignment operator assigns a value to a variable.
```
var x = 10;
console.log(x) //10
```
The `+=` assignment operator adds value of the variable `x` and value given in the RHS of operator and then assigns the result back to the variable.
```
var x = 10;
x += 5;
console.log(x) //15
```
The `-=` assignment operator subtracts value on RHS of operator from the variable `x` and then assigns the result back to the variable.
```
var x = 10;
x -= 5;
console.log(x) //5
```
The `*=` assignment operator multiplies value of the variable `x` and value given in the RHS of operator and then assigns the result back to the variable.
```
var x = 10;
x *= 5;
console.log(x) //50
```
The `/=` assignment operator divides value of the variable `x` by value given in the RHS of operator and then assigns the quotient back to the variable.
```
var x = 10;
x /= 5;
console.log(x) //2
```
The `%=` assignment operator divides value of the variable `x` by value given in the RHS of operator and then assigns the remainder back to the variable.
```
var x = 10;
x %= 5;
console.log(x) //0
```