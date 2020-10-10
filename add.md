# JavaScript has six primitive data types:

1. null
2. undefined
3. boolean
4. number
5. string
6. symbol – available only from ES6

and one complex data type called object.

JavaScript is a dynamic language or loosely typed therefore a variable doesn’t associate with any type. However, its value does.

In other words, the same variable can hold values of different types at any time. For example:

```
let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string
```
To get the current type of the value of a variable, you use the  typeof operator:

```
let counter = 120; // counter is a number
console.log(typeof(counter)); // "number"
```
```
counter = false;   // counter is now a boolean
console.log(typeof(counter)); // "boolean"
```
```
counter = "Hi";   // counter is now a string
console.log(typeof(counter)); // "string"
```
```
Output:

"number"
"boolean"
"string"
```

## The undefined type

The undefined type is a primitive type that has one value undefined.

By default, when a variable is declared but not initialized, it is assigned the value undefined.

Consider the following example:
```
let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined
```
In this example, the counter is a variable. Since counter hasn’t been initialized, it is assigned the value undefined. The type of counter is also undefined.

It’s important to note that the  typeof operator also returns undefined when you call it on a variable that hasn’t been declared:
```
console.log(typeof undeclaredVar); // undefined
The null type
The null type is the second primitive data type that also has only one value: null. 
```
Javascript defines that null is an empty object pointer. See the following example:
```
let obj = null;
console.log(typeof obj); // object
```
It is a good practice to assign a variable that later holds an object to null so that you can check whether the object is null or not by using the if statement as follows:

```
if(obj != null) {
   // call method of the object
}
```
JavaScript defines that null is equal to undefined as shown in the following statement.
```
console.log(null == undefined); // true
```

## The number type

JavaScript uses the IEEE-754 format to represent both integer and floating-point numbers.

Integer numbers
The following statement declares a variable that holds an integer.
```
let num = 100;
```
If you want to represent the octal (base 8) literals, you put the first digit as zero (0) followed by octal digit numbers (0 to 7) as follows:
```
let oct = 060; // octal for 48
```
If the literal of an octal number is out of the range, JavaScript treats it as a decimal as shown in the following example.
```
let d = 090; // intepreted as 90
```
To avoid the confusion, ES6 allows you to specify an octal literal by using the prefix 0o followed by a sequence of octal digits from 0 through 7:
```
let v = 0o45;
console.log(v); // 37
```
To create hexadecimal (base 16) literals, you use 0x (in lowercase) as the first two characters followed by any number of hexadecimal digits (0 to 9, and A to F).
```
let h = 0xf; // same as 0xF hexadecimal for 15
```

###### Floating-point numbers

To represent a floating-point number, you include a decimal point followed by at least one number. For example:
```
let f1 = 12.5; 
let f2 = .3;   // same as 0.3, also valid but not recommended
```
JavaScript converts a floating-point number into an integer number if the number appears to be the whole number.

The reason is that Javascript always wants to use less memory since a floating-point value uses twice as much memory as an integer value.
```
let f3 = 200.00; // interpreted as integer 200
```
JavaScript allows you to use the e-notation to represent very large or small numbers as in the following example.
```
let f4 = 2.17e6; // ~ 2170000
```
JavaScript provides the minimum and maximum values of a number that you can access using Number.MIN_VALUE and Number.MAX_VALUE.

In addition, JavaScript uses Infinity and -Infinity to represent the finite numbers, both positive and negative.

See the following example:
```
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity
```

###### NaN

JavaScript has a special numeric value called NaN, which stands for Not a Number. In fact, it means an invalid number.

For example, the division of a string by a number returns NaN as in the following example.
```
console.log('a'/2); // NaN;
```
The NaN has two special characteristics:

Any operation with NaN returns NaN.
The NaN does not equal any value, including itself.
Here are some examples:
```
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
```

## The string type

In JavaScript, a string is a sequence of zero or more characters. A literal string begins and ends with either a single quote(‘) or double quote (“).

A string that starts with a double quote must end with a double quote and a string that begins with a single quote must end with a single quote.

Here are some examples:
```
let greeting = 'Hi';
let s = "It's a valid string";
let str = 'I\'m also a string'; // use \ to escape the single quote (')
```
JavaScript strings are immutable. It means that you cannot modify a string once it is created.

However, you can create a new string based on an operation on the original string, like this:
```
let str = 'JavaScript';
str = str + ' String';
```
In this example:

First, declare the str variable and initialize it to a string of 'JavaScript'.
Second, use the + operator to combine 'JavaScript' with ' String' to make its value as 'Javascript String'.
Behind the scene, JavaScript engine creates a new string that holds the new string 'JavaScript String' and destroys two other original strings 'JavaScript' and ' String'.

## The boolean type

The boolean type has two values: true and false, in lowercase.

The following example declares two variables that hold boolean values.
```
let inProgress = true;
let completed = false;
console.log(typeof done); // boolean
```
JavaScript allows values of other types to be converted into boolean values of true or false.

To convert a value of another data type into a boolean value, you use the Boolean function. The following table shows the conversion rules:

Type	true	false

See the following demonstration:
```
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false
```
```
console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false
```
```
console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false
```
## The symbol type

JavaScript added a primitive type in ES6: the symbol. Different from other primitive types, the symbol type does not have a literal form.

To create a symbol, you call the Symbol function as follows:
```
let s1 = Symbol();
```
Note that Symbol is a function, not an object constructor, therefore, you cannot use the new operator. If you do so, you will get a TypeError.

The Symbol function creates a new unique value every time you call it.
```
console.log(Symbol() == Symbol()); // false
```
You can pass a descriptive string into the Symbol function for the logging and debugging purposes.
```
let s2 = Symbol('event.save');
```
When you call the toString() method on the symbol variable, it returns a more descriptive name as shown below:
```
console.log(s2.toString()); // Symbol(event.save)
```
You can use symbols for many purposes. One of them is to create a string-like a constant that can’t clash with any other values.

The following example creates a symbol that represents the click event.
```
const click = Symbol('click');
```
The string 'click' may be used for different purposes and not unique. However, the click symbol is absolutely unique.


## The object type

In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.

The following example defines an empty object using the object literal form:
```
let emptyObject = {};
```
The following example defines the person object with two properties:
```
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
```
A property name of an object can by any string. You can use quotes around the property name if it isn’t a valid JavaScript identifier.

For example, if you have a property first-name, you must use the quotes such as "first-name" but firstName is a valid JavaScript identifier so the quotes are optional.

If you have more than one property, you use a comma (,) to separate the pairs.

JavaScript allows you to nest object as shown in the following example:
```
let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}
```
The contact object consists of firstName, lastName, email, phone, and address properties.

The address property itself is also an object that consists of building,  street, city, state, and country properties.

You can access the properties of an object by using two notations: the dot notation (.) and array-like notation ( []).

The following example uses the dot notation (.) to access the firstName and lastName properties of the contact object.
```
console.log(contact.firstName);
console.log(contact.lastName);
```
To get property of a nested object, you use the following form:
```
console.log(contact.address.country);
```
If you refer to a non-existent property, you’ll get an undefined value as follows:
```
console.log(contact.age); // undefined
```
The following example uses the array-like notation to access the email and phone properties of the contact object.
```
console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'
```
Besides the object literal form, you can use the new keyword to create a new object as follows:
```
let customer = new Object();
```
And assign the property of the object a value:
```
customer.name = 'ABC Inc.';
```
In JavaScript, all objects are derived from the Object type. 
