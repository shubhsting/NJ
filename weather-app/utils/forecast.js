const request = require('request')


// const url = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5937&lon=78.9629&units=metric&appid=61626ccd65968fd27ec359bc721a4d04`;
// request({ url: url }, function (error, response) {
//   //  console.log(response)
//     const data = JSON.parse(response.body)
//     console.log(data.current);
// });




// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Can not connect to openweather api!!!!!!!')
//     }
//     else if (response.body.message) {
//         console.log(response.body.message) // agar url mein kuch rh gya to erroer message response mein aayega na ki error mein usi ko handle kiya hai
//     }
//     else {
//         const temp = response.body.current.temp
//         const chances = response.body.current.weather[0].description //chrome mein data paste kro aur dekho
//         console.log(temp + " " + chances);
//     }
// });





const forecast = (lat, long, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&units=metric&appid=61626ccd65968fd27ec359bc721a4d04'
    request({ url: url, json: true }, (error, response) => {
        if (error)
            callback('Cannot connect to openweather api!!!Try Later..', undefined)
        else if (response.body.message)
            callback(response.body.message, undefined)
        else
            callback(undefined, {
                location: response.body.timezone,
                temp: response.body.current.temp,
                chances: response.body.current.weather[0].description
            })
    })

}

module.exports = forecast