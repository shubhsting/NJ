var request = require("request");
var geocode = require('./utils/geocode.js')
var forecast = require('./utils/forecast.js')





// geocode("delhi", (error, data) => {
//     console.log("Error is -> ", error);
//     console.log("Data is -> ", data)
// })
geocode("delhi", (error, datap) => {
    if (error) console.log(error)
    else
        forecast(datap.latitude, datap.longitude, (error, data) => {
            console.log(datap.location)
            console.log('Error', error)
            console.log('Data', data)
        })
})

