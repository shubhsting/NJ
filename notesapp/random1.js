// const ch = require('chalk');
const yarg = require('yargs');
// const name = 'Shubham'
// console.log(ch.green('Hello ')+name)
// console.log(ch`{bold.rgb(10,100,200) Hello!}`);
//console.log(ch.blue.bold.inverse.underline('Hepolo'))//aage peeche bhi likh skte hai

// node random1.js add--title = "hello" --body = "f you"   code to run command line arguments in node
yarg.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Title add krne ke liye',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'add body',
            demandOption: true,//mandatoy hai input lena 
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(argv.title + "  " + argv.body)
    }
});
yarg.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a command')
    }
});
yarg.command({
    command: 'list',
    describe: 'Listing all note',
    handler: function () {
        console.log('Adding description')
    }
});
console.log(yarg.argv);
// yarg.argv;