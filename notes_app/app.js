const notes = require('./notes.js')
const yargs = require('yargs')
// yargs.command({
//     command: 'add',
//     describe: 'add a title and body',
//     builder: {
//         title: {
//             describe: 'add title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'add body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function (argv) {
//         notes.addNotes(argv.title, argv.body)
//     }
// })


// yargs.command({
//     command: 'remove',
//     describe: 'remove a title and body',
//     builder: {
//         title: {
//             describe: 'add title',
//             demandOption: true,
//             type: 'string'
//         }

//     },
//     handler: function (argv) {
//         notes.removeNotes(argv.title)
//     }
// })


// =====================new modified with arrow fxn========================
// working of above program and below is same
yargs.command({
    command: 'add',
    describe: 'add a title and body',
    builder: {
        title: {
            describe: 'add title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'add body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'remove a title and body',
    builder: {
        title: {
            describe: 'add title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list all notes title',
    handler(argv) {
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'read a title and body',
    builder: {
        title: {
            describe: 'add title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.argv