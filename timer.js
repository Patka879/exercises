"use strict"

const readline = require('readline');

function main() {
    let startTime;
    let stopTime;
    console.log("Application started, type 'start' to start timer...")
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    rl.on('line', (line) => {
        if (line === "start") {
            startTime = new Date();
            console.log("Timer has started. Please type 'stop' to stop the timer");
        } else if (line === "stop") {
            stopTime = new Date();
            const elapsedMinutes = parseInt((stopTime - startTime) / 60 / 1000);
            console.log(
                `Timer has stopped. Time elapsed: ${
                    elapsedMinutes ? `${elapsedMinutes}m` : "" 
                } ${Math.floor((stopTime - startTime - elapsedMinutes * 60 * 1000) / 1000)}s`
            );
        } else {
            const startOrStop = startTime ? 'stop' : 'start'
            console.log(`I said type '${startOrStop}'. Please type '${startOrStop}' to ${startOrStop} timer...`);
        } 
    });
}

main()