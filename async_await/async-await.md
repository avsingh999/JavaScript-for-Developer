# defination

``` 
new Promise() --> Creates an object that represents an eventual completion (or failure) of an asynchronous operation and its resulting value;

resolve() --> Returns a new Promise object that is resolved with the given value.

setTimeout() --> Calls a function or evaluates an expression after a specified number of milliseconds.

async --> An async function is a function declared with the async keyword. Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise

await --> Await expressions suspend progress through an async function, yielding control and subsequently resuming progress only when an awaited promise-based asynchronous operation is either fulfilled or rejected.
```

# example

```js
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
}
  
async function addOne(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
}
  
addOne(10).then(v => {
    console.log(v);  
});
  
async function addTwo(x) {
    var a = await resolveAfter2Seconds(20);
    var b = await resolveAfter2Seconds(30);
    return x + a + b;
}
  
addTwo(10).then(v => {
    console.log(v);  
});
````

# Output addOne

```60```
after 2 seconds

# Output addOne

```60```
 after 2 seconds
