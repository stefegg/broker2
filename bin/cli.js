#!/usr/bin/env node

const listener = require('../lib/listenMode.js');
const clientUpload = require('../lib/uploadMode.js');


function cliInput() {
    if (process.argv[2] === 'listen') {
        listener.clientListen()
    } else if (process.argv[2] === 'upload') {
        // let file = process.argv[3]
        // let fileName = file.substring(file.lastIndexOf("=") + 1);

        clientUpload.clientUpload()

    } else console.log('Incorrect command, see readme')
}



cliInput();