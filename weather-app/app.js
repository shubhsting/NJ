var request = require("request");
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5937&lon=78.9629&units=metric&appid=61626ccd65968fd27ec359bc721a4d04`;
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


const longlaturl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?access_token=pk.eyJ1Ijoic2h1YmhzdGluZyIsImEiOiJja2IxdHZnancwMnZ4MnFzMHBvZWpiMmk5In0.p_VUj_2a6pQ2ZDPO5hah8Q&limit=1';
request({ url: longlaturl, json: true },(error, response)=> {
    if(error){
        console.log('Unable to connect to mapbox api!!!!!')
    }
    else if(response.body.features.length===0){
        console.log('Incorrect location or api!!!!')
    }
    
    else{
    const lati = response.body.features[0].center[0]
    const longi = response.body.features[0].center[1]
    console.log(lati+" "+longi)
    }
})