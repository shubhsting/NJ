var request = require("request");
var geocode = require('./utils/geocode.js')
var forecast = require('./utils/forecast.js')





// geocode("delhi", (error, data) => {
//     console.log("Error is -> ", error);
//     console.log("Data is -> ", data)
// })


// console.log(process.argv)
const city = process.argv[2]
if (!city) console.log('Please add city in command Line!!!!!!...')
else {
    geocode(process.argv[2], (error, datap) => {
        if (error) console.log(error)
        else
            forecast(datap.latitude, datap.longitude, (error, data) => {
                if(error)
                console.log('Error', error)
                else{
                console.log(datap.location)
                console.log('Data', data)
                }
            })
    })

}