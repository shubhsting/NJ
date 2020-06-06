const request = require('request')


// const longlaturl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?access_token=pk.eyJ1Ijoic2h1YmhzdGluZyIsImEiOiJja2IxdHZnancwMnZ4MnFzMHBvZWpiMmk5In0.p_VUj_2a6pQ2ZDPO5hah8Q&limit=1';
// request({ url: longlaturl, json: true },(error, response)=> {
//     if(error){
//         console.log('Unable to connect to mapbox api!!!!!')
//     }
//     else if(response.body.features.length===0){
//         console.log('Incorrect location or api!!!!')
//     }

//     else{
//     const lati = response.body.features[0].center[0]
//     const longi = response.body.features[0].center[1]
//     console.log(lati+" "+longi)
//     }
// })




const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=pk.eyJ1Ijoic2h1YmhzdGluZyIsImEiOiJja2IxdHZnancwMnZ4MnFzMHBvZWpiMmk5In0.p_VUj_2a6pQ2ZDPO5hah8Q&limit=1'
    data = {
        latitude: 0,
        longitude: 0,
        location: 0
    }
    request({ url: url, json: true }, (error, response) => {
        if (error)
            callback('Cannot Connect to geoservice!!!!Try Again Later...', undefined)
        else if (response.body.features.length === 0)
            callback('Location not found!!!Try Again..', undefined)
        else {
            const data = {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode