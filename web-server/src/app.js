const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))
// console.log(__filename)
const pubdirpath = path.join(__dirname, '../public')
const app = express()

app.use(express.static(pubdirpath))

//app.com
// app.get('', (req, res) => {
//     res.send("Hello Express!!!!")
// })

// app.get('/help', (req, res) => {
//     res.send("Help done!!!")
// })


// //this will send html  code
// app.get('/about', (req, res) => {
//     res.send('<h1>ABOUT ME!!!HAHA...</h1>')
// })

// //this will send the json data 
// app.get('/weather', (req, res) => {
//     res.send({
//         name: 'shubham',
//         branch: 'cse'
//     })
// })

app.listen(3000, () => {
    console.log("server is up on port 3000!!!")
})