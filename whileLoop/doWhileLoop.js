let number = 0;

do { // This block of code will execute at least once even if the condition is false. The code block is executed before the condition is tested.
    console.log(`Current number => ${number}`) 
    number++
} while (number != 10) 
