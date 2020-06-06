const https = require('https')
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5937&lon=78.9629&units=metric&appid=61626ccd65968fd27ec359bc721a4d04`;
const request = https.request(url, (response) => {
    let data = ' ';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error Occured', error)
})
request.end()