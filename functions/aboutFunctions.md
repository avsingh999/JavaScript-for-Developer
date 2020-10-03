# Functions in Javascript

Functions are basically a block of code, which is resuable. This set of statements takes a input, does a specific computation and returns are result.
Functions are highly useful, when a same task has to be performed again and again.
It not only makes the application modular, but also removes the burden of writing the same code again and again.

## Syntax

Presently, Javascripts has two ways of wrriting a function. The older version of JS and the ES6 version of JS
In the ES6 version the arrow function was introduced.

Lets look into both the different syntax

### Type 1(ES5):

``` function function_name(parameter1, parameter2, parameter3){

    //code to be executed

}
```
### Type2(ES6):
//The Arrow functions

``` function_name = (parameter1, parameter2, parameter3) =>{

    //code to execute

}
```
//if the function has only one statement, there is a shorthand

``` function_name = (parameter1, parameter2) => //the single statement to execute
```
//There is no need of return keyword or cruly braces for single statement functions


### Difference between Type1 and Type2

Apart from the syntax, the main difference between Type1 and Type2 is how the 'this' is handled. 
The Arrow function i.e the Type2 establishes 'this' in the scope were it is defined.
In regular functions i.e the Type2, the 'this' represents the object that called the function.

