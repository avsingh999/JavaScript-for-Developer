# defination
            new Date() creates a new date object with the current date and time.
            The same object could be used to called various methods such as:
            getFullYear() --> Get the year as a four digit number (yyyy).
            getMonth() --> Get the month as a number (0-11).
            getDate() --> Get the day as a number (1-31).
            getMinutes() --> Get the minute (0-59).
            getSeconds() --> Get the second (0-59).
# example
            var date = new Date();

            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();


            console.log(year);
            console.log(month+1);
            console.log(day);
            console.log(hours);
            console.log(minutes);
            console.log(seconds);
# Output
            2020
            10
            6
            0
            11
            35
# Actual Time and date while running the above code 
            Time: 00:11:35
            Date:06-10-2020
