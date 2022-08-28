const weather = require('openweather-apis');
const config = require("./config.json");

const getWeather = async () => {
    return new Promise((resolve, reject) => {
        weather.setLang('en');

        // or set the coordinates (latitude,longitude)
        weather.setCoordinate(12.9716, 77.5946);

        // 'metric'  'internal'  'imperial'
        weather.setUnits('metric');

        // check http://openweathermap.org/appid#get for get the APPID
        weather.setAPPID(config.apiKey);

        // get all the JSON file returned from server (rich of info)
        weather.getAllWeather(function (err, weatherData) {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve(weatherData);
                return;
            }
        });
    })
}

module.exports = {
    getWeather
};