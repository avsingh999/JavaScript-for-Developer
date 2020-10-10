
# Objects in JavaScript

  

Objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

  
An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

To understand this rather abstract definition, let us look at an example of a JavaScript Object :

```javascript
let car = {
	make : "Toyota",
	wheels : "4",
	color : "Red"
}
```
In the above example  **“make”, “wheels”, “color”**  are all  **“keys”**  and  **“Toyota”, “4” and Red** are values of these keys respectively.

Each of these keys is referred to as  **properties**  of the object. An object in JavaScript may also have a function as a member, in which case it will be known as a  **method**  of that object.

Let us see such an example :
##### Example
```javascript
let car = {
	make : "Toyota",
	wheels : "4",
	color : "Red",
	displayInfo : function(){ 
		console.log(`I have a ${car.color} ${car.make} that has ${car.wheels} wheels`); 
	} 
}
car.displayInfo(); 

```
##### Output: 
    I have a Red Toyota that has 4 wheels

In the above example, **“displayinfo”** is a method of the car object that is being used to work with the object’s data, stored in its properties.

The property names can be strings or numbers. In case the property names are numbers, they must be accessed using the “bracket notation” like this :
##### Example

```javascript
let car = {
	make : "Toyota",
	wheels : "4",
	color : "Red",
	10 : "1000",
	displayInfo : function(){ 
		console.log(`The value of the key 10 is ${car['10']}`); 
	} 
}
car.displayInfo(); 

```
##### Output :

    The value of the key 10 is 1000

Property names can also be strings with more than one space separated words. In which case, these property names must be enclosed in quotes and Like property names which are numbers, they must also be accessed using the bracket notation.



### Creating Objects in JavaScript

There are 3 ways to create objects.

### 1. By object literal 
We already seen this in above examples

### 2. By creating instance of Object directly (using new keyword)
```javascript
const car = new Object();
car.make = 'Toyota';
car.color = 'Red';
car.wheels = 4;
school.displayInfo = function(){
console.log(`I have a ${car.color} ${car.make} that has ${car.wheels} wheels`);
}
school.displayInfo();
```
##### Output: 
    I have a Red Toyota that has 4 wheels


The two methods mentioned above are not well suited to programs that require the creation of multiple objects of the same kind, as it would involve repeatedly writing the above lines of code for each such object. To deal with this problem, we can make use of the other methods of object creation in JavaScript that reduces this burden significantly, 



### 3. By using an object constructor (using new keyword)
Constructors in JavaScript, like in most other OOP languages, provides a template for creation of objects. In other words, it defines a set of properties and methods that would be common to all objects initialized using the constructor.  
Lets see an example :
```javascript
function Vehicle(name, maker) {
this.name = name;
this.maker = maker;
}

let car1 = new Vehicle('Fiesta', 'Ford');
let car2 = new Vehicle('Santa Fe', 'Hyundai')

console.log(car1.name); // Output: Fiesta
console.log(car2.name); // Output: Santa Fe
```
##### Output: 
    Fiesta
    Santa Fe



## Deleting a Property
To remove a property, we can use  `delete`  operator:

```javascript
delete car1.name;
```

## Property existence test, “in” operator
A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

Reading a non-existing property just returns  `undefined`. So we can easily test whether the property exists:
```javascript
let user =  {};
alert( user.noSuchProperty ===  undefined  );  // true means "no such property"
```

There’s also a special operator  `"in"`  for that.

The syntax is:
```javascript
"key" in object
```

```javascript
let user =  {name:  "Umair", age:  19  };
alert("age" in user );  // true, 
user.age exists  alert(  "blabla"  in user );  // false, user.blabla doesn't exist
```

Please note that on the left side of  `in`  there must be a  _property name_. That’s usually a quoted string.

If we omit quotes, that means a variable, it should contain the actual name to be tested. For instance:
```javascript
let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists
```
Why does the  `in`  operator exist? Isn’t it enough to compare against  `undefined`?

Well, most of the time the comparison with  `undefined`  works fine. But there’s a special case when it fails, but  `"in"`  works correctly.

It’s when an object property exists, but stores  `undefined`:
```javascript
let obj =  { test:  undefined  };  
alert( obj.test );  // it's undefined, so - no such property?  
alert(  "test"  in obj );  // true, the property does exist!
```

n the code above, the property  `obj.test`  technically exists. So the  `in`  operator works right.

Situations like this happen very rarely, because  `undefined`  should not be explicitly assigned. We mostly use  `null`  for “unknown” or “empty” values. So the  `in`  operator is an exotic guest in the code.

## The “for…in” loop

To walk over all keys of an object, there exists a special form of the loop:  `for..in`. This is a completely different thing from the  `for(;;)`  construct that we studied before.

The syntax:

```javascript
for (key in object) {
  // executes the body for each key among object properties
}
```
For instance, let’s output all properties of  `user`:

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

Note that all “for” constructs allow us to declare the looping variable inside the loop, like  `let key`  here.

Also, we could use another variable name here instead of  `key`. For instance,  `"for (let prop in obj)"`  is also widely used.

## Summery
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

-   Property keys must be strings or symbols (usually strings).
-   Values can be of any type.

To access a property, we can use:

-   The dot notation:  `obj.property`.
-   Square brackets notation  `obj["property"]`. Square brackets allow to take the key from a variable, like  `obj[varWithKey]`.

Additional operators:

-   To delete a property:  `delete obj.prop`.
-   To check if a property with the given key exists:  `"key" in obj`.
-   To iterate over an object:  `for (let key in obj)`  loop.

What we’ve studied in this chapter is called a “plain object”, or just  `Object`.

There are many other kinds of objects in JavaScript:

-   `Array`  to store ordered data collections,
-   `Date`  to store the information about the date and time,
-   `Error`  to store the information about an error.
-   …And so on.

They have their special features . Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. 
