class Timer {
    time;
    static NS_PER_SEC = 1e9;
    constructor() {
    }

    startTimer() {
        this.time = process.hrtime();
    }

    endTimer(){
        const diff = process.hrtime(this.time);
        console.log("\n________________________TIME_________________________");
        console.log(`${(diff[0] * Timer.NS_PER_SEC + diff[1])/1000000000} seconds`);
        console.log("\n_____________________RESULT_________________________");
    }
}

module.exports = Timer;


