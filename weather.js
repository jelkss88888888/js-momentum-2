const weather = document.querySelector(".js-weather");

const API_KEY = "c51aca0751865870e4c5f1d769d70fa8";

const COORDS_LS = localStorage.getItem("currentCoords");

function saveCoords(coordsObj) {
    localStorage.setItem("coords", JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response) {
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const name = json.name;
        weather.innerText = `${temp}    ${name}`;
    });
}

function geoSuccess(position) {
    const coords = position.coords;
    const lat = coords.latitude;
    const lon = coords.longitude;
    const coordsObj = {
        lat,
        lon
    };
    saveCoords(coordsObj);
    getWeather(lat, lon)
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(geoSuccess);

}

function loadCoords() {
    if (COORDS_LS !== null) {
        const parsedCoords = JSON.parse(COORDS_LS);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    } else {
        askForCoords();
    }
}

function init() {
    loadCoords();
}
init();