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
| |= | x |= y | x = x | y |

---

Examples

The `=` assignment operator assigns a value to a variable.
```
var x = 10;
console.log(x) //10
```
The `+=` assignment operator adds a value to a variable.
```
var x = 10;
x += 5;
console.log(x) //15
```
The `-=` assignment operator subtracts a value from a variable.
```
var x = 10;
x -= 5;
console.log(x) //5
```
The `*=` assignment operator multiplies a variable.
```
var x = 10;
x *= 5;
console.log(x) //50
```
The `/=` assignment divides a variable.
```
var x = 10;
x /= 5;
console.log(x) //2
```
The `%=` assignment operator assigns a remainder to a variable.
```
var x = 10;
x %= 5;
console.log(x) //0
```