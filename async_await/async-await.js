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
    // show 60 after de 2 seconds.
    console.log(v);  
});
  
async function addTwo(x) {
    var a = await resolveAfter2Seconds(20);
    var b = await resolveAfter2Seconds(30);
    return x + a + b;
}
  
addTwo(10).then(v => {
    // show 60 after de 4 seconds.
    console.log(v);  
});