## Mutable 

Mutable is a type of variable can be changed. In JavaScript, only objects and arrays are mutable
, not primitive values.

A mutable object is an object whose state can be modified after it is created.

## Immutable
Immutables are the objects whose state cannot be changed once the object is created.
Strings and Numbers are Immutable.

## Example

When you declare a variable and assign value to it:

a = 3

First it will be stored as:

```
Memory Address | Memory cell1 | Memory cell2
xxx1           | a            
xxx2           | 3
xxx3           | xxx1         |  xxx2

```

Then when you perform a = a*2

If "Mutable", it will be like :
```
Memory Address | Memory cell1 | Memory cell2
xxx1           | a            
xxx2           | 6
xxx3           | xxx1         |  xxx2

```

If "Immutable", it will be like: 
```
Memory Address | Memory cell1 | Memory cell2
xxx1           | a            
xxx2           | 3
xxx3           | 6
xxx4           | xxx1         |  xxx3

```

- So the difference of "mutable" and "immutable" is when you change value of a variable at address "xxx1". If it's mutable, it will changed value of addess "xxx2" directly. If it's immutable, it will create a new address ("xxx3") to stored new valuethen reassign that value to variable. 
