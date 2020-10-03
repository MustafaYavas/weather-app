const request = require("request");

const getForecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=8634c785497e95715aa30c9ed3a98d04&query=${latitude},${longitude}`;

    request({url, json: true}, (error, {body}) => {
        if(error)
            callback("Unable to connect to weather services", undefined);
        else if(body.error)
            callback("Unable to find location. Try another search", undefined);
        else{
            console.log(body.current);
            callback(undefined, `It is ${body.current.weather_descriptions[0]} and ${body.current.feelslike}°C. There is a ${body.current.precip}% chance of rain. Wind speed ${body.current.wind_speed} kmh and wind direction ${body.current.wind_dir}. The humidity ${body.current.humidity}%`);
        }
    })
}


module.exports = {getForecast}