// new Date() creates a new date object with the current date and time:
var date = new Date();

//getFullYear() --> Get the year as a four digit number (yyyy)
const year = date.getFullYear();
//getMonth()--> Get the month as a number (0-11)
const month = date.getMonth();
//getDate() --> Get the day as a number (1-31)
const day = date.getDate();
//getHours() --> Get the hour (0-23)
const hours = date.getHours();
//getMinutes() --> Get the minute (0-59)
const minutes = date.getMinutes();
//getSeconds() --> Get the second (0-59)
const seconds = date.getSeconds();


console.log(year);
console.log(month+1);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);