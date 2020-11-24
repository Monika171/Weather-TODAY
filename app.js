// Init Storage
const storage = new Storage();

//get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI
const ui = new UI();

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    //change location
    weather.changeLocation(city, country);

    //set location in local storage
    storage.setLocationData(city, country);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});

function getWeather() {
        weather.getWeather()
        .then(results => {
            ui.paint(results)
        .catch(err => console.log(err))
        });
}
