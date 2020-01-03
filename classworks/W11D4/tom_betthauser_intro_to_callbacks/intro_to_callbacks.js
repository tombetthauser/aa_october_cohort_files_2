class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    
    const date = new Date();

    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();

    this._tick = this._tick.bind(this);
    
    setInterval(this._tick, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.

      console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    this.seconds += 1;

    if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
    }
    if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
    }
    if (this.hours === 24) {
        this.hours = 0;
    }

    this.printTime();
  }
}

// const clock = new Clock();

/* 
Sum argument numbers one at a time and print running sum after each addition
pass final sum to callback function
*/

const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number", function (number) {
      const parsedNum = parseInt(number);
      numsLeft--;
      sum += parsedNum;
      console.log(sum);

      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));






