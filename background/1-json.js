const fs = require('fs')
// const book = {
//     title: 'Shubham Singh',
//     author: 'SS'
// }
// var bookJSON = JSON.stringify(book)  //object ko string mein convert krta hai 

// console.log(bookJSON)

// =======================external json se below data ko extract kr rkha hai=================
// {"title":"Shubham Singh","author":"SS"}
// var parsedDATA=JSON.parse(bookJSON)  //string to wapas se objectv mein convert krta hai
// console.log(parsedDATA.author)   
// fs.writeFileSync('1-json.json',bookJSON)

// ==========================
// const dataBuffer=fs.readFileSync('1-json.json') //buffer return mein aayege bits data
// console.log(dataBuffer.toString())
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON);   //parse again to json object
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.planet='Random'
data.age='26'
const userdata=JSON.stringify(data)
fs.writeFileSync('1-json.json',userdata)






