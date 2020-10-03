
#Data Types in Javascript

Data types of a variable are determined by values stored in them


Data types specify what kind of data you can store and manipulate in a programming language.In JS, we have 6 primitive data types, namely:
1 - Number 

var num1 = 2;
var num2 = 2.2;


2 - String

var sentence = "Hello world this is a string in javascript";    

Basically a string in JS is just a sequence of alphabets, numbers and symbols enclosed in double or single quotes.


3 - Boolean (True or False)

var decision = false;   

Remember Boolean is not a string as you can see it’s not enclosed in any quotes.These are just 2 values True and False which helps us in decision making.


4 - Undefined

var declaredWithNoValue = undefined; 


5 - Null

var doesNotExist = null;  

Usually people see undefined and null as same but they are very wrong.Undefined in JS is something that exists but doesn’t have any particular value just like infinity, it exists but we cannot put a value on it, we cannot go and say infinity = 10000000 or some big value like that.
    Null, however signify nothing.It doesn’t exist and it does not have any particular value.



6 - Symbol

let NS = Symbol("NewSymbol") 

