const readline = require("readline");

class Readline {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.rl.on("close", () => {
            process.exit(0);
        });
    }
}

module.exports = Readline;