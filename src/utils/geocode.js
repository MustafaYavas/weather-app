const request = require("request");

const getGeoCode = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoibXVzdGFmYXlhdmFzMSIsImEiOiJja2ZtZjljMHAxeTJpMnJudjJ6aGsxODVhIn0.846kURoqpcQw-cHfN-f0kQ&limit=1`;

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback("Unable to connect to location services", undefined);
        } else if(body.features.length === 0){
            callback("Unable to find location. Try another search", undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = {
    getGeoCode
}