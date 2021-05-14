const Timer = require("./helpers/Timer");
const Readline = require("./helpers/Readline");
const {rl} = new Readline();

rl.question("What is number ? ", (number) => {
    const timer = new Timer();
    timer.startTimer();
    const n = Number(number);
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    timer.endTimer();
    console.log({result})
    rl.close();
});