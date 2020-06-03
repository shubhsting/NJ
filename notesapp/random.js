const fs = require('./utils.js');
const validator = require('validator')
// console.log(fs(4,-1))
// console.log(fs())
// console.log(validator.isEmail('ab@gmail.com'))
// console.log(validator.isURL('https'))
// // console.log('hello');
// console.log(process.argv)
// console.log(process.argv[2])
const command = process.argv[2]
if (command === 'lu')
    console.log('done')
else if (command == 'fu')
    console.log('fu')
