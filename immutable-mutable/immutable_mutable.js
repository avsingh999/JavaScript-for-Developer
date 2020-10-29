let a = 1;
let b = a;
b = 2;
console.log(a);//1
console.log(b);//2
// Immutable
//a can not be changed because primitive values can not be changed

let c = {
  name: "c",
  index: 2,
};

let d = c;
d.name = "d";
console.log(c.name);//d
console.log(d.name);//d

// Mutable
//the property name of c is changed because object in JS is mutable so when d changed the property name
//property name of c is changed too.  
