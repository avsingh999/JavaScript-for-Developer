# Classes in JavaScript

There are three concepts in Object-Oriented Programming Object, Class and Methods. The ES6 JavaScript supports the Object-Oriented programming components.

- Object: A real-time object entity means the presentation of any entity in real-time.
- Class: It is the before the plan of creating any objects which are known as blueprint of any objects which you want to create.
- Methods: It communicates between the objects.

The class contains the Constructors and Functions. The Constructors take responsibility for allocating memory for the objects of the class. The function takes the responsibility of the action of the objects. Combing these two Constructor and Function to make the Class.
In the ES6 to create any class, you need to use the class keyword.

### Syntax:
Declaring Class:

```
class Class_name {  
}
Class Expressions:

var var_name = new Class_name {  
}
```
Below example will illustrate the ES6 Classes:

### Example:
```
class gfg {  

    constructor(name, estd, rank){ 
        this.n = name; 
        this.e = estd; 
        this.r = rank; 
    } 
  
    // Function 
    decreaserank(){ 
        this.r -= 1; 
    } 
} 
const geeks = new gfg("geeks", 2009, 43) 
      
geeks.decreaserank(); 
      
document.write(geeks.r); //Output 42 
```

### Output:
```
42
```

The example given above declares a class ‘gfg’. The class’s constructor takes three arguments – name, estd, and rank respectively. The ‘this’ keyword refers to the current instance of the class. The geeks() function in the class, print the values of the rank.

### Class inheritance: 
The ES6 Class supports the inheritance. Inheritance has the courage to create entities from existing entities. There are two types of Class in ES6:

- parent class/super class: The class extended to create new class are know as a parent class or supper class.
- child/sub classes: The class are newly created are known as child or sub class. Sub class inherit all the properties from parent class except constructor

### Syntax:
```
class child_name extends parent_name
```

### Example:
```
class geeks {  
   constructor(g) {  
      this.Charecter = g 
   }  
}  
class GeeksforGeeks extends geeks {  
   disp() {  
      console.log("No of Character:  "+this.Charecter)  
   }  
}  
var obj = new GeeksforGeeks(13);  
obj.disp() 
``` 
### Output:
```
No of Character: 13
```

Inheritance divided into three types:

- Single Inheritance: Every class can be extend from one parent class.
- Multiple Inheritance: A class can inherit from multiple classes. ES6 doesn’t support multiple inheritance.
- Multi-level Inheritance: A class can inherit from another class (via) which inherit from the parent class.
```
class Child extends Root
class Leaf extends Child 
// So the leaf extends root indirectly
```
### Super Keyword: 
This keyword helps child class to invoke the parent class data.
```
supper.object
```
### Example:
```
class GeeksforGeeks {  
   doPrint() { 
      console.log("This doPrint() from Parent called.")  
   }  
}   
class gfg extends GeeksforGeeks {  
   doPrint() {  
      super.doPrint()  
      console.log("This doPrint() is printing a string.")  
   }  
}  
var obj = new gfg()  
obj.doPrint() 
```
### Output:
```
This doPrint() from Parent called.
This doPrint() is printing a string.
```
