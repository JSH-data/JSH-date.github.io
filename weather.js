const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY = "bd8a925354589e5dc57d9970c4da9e66";

function getWeather(lati, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const tem = json.main.temp;
            const place = json.name;
            weather.innerText = `${tem} @ ${place}`;
        });
    // then 함수는 데이터가 완전히 들어온뒤에 다음을 호출하는 함수이다. 
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const coordsObj = {
        latitude: lati,
        longitude: longi
    };
    saveCoords(coordsObj);
    getWeather(lati, longi); 
}

function handleGeoError() {
    console.log("can't access")
}

function askForCoord() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
    // 자신의 현재위치를 파악하게 도와줍니다. 
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoord();
    } else {
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();