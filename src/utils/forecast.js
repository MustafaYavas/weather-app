const request = require("request");

const getForecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=8634c785497e95715aa30c9ed3a98d04&query=${latitude},${longitude}`;

    request({url, json: true}, (error, {body}) => {
        if(error)
            callback("Unable to connect to weather services", undefined);
        else if(body.error)
            callback("Unable to find location. Try another search", undefined);
        else
            callback(undefined, ""+ body.current.weather_descriptions[0]+", "+ body.current.feelslike + ". There is a "+body.current.precip+"% chance of rain");
    })
}


module.exports = {getForecast}