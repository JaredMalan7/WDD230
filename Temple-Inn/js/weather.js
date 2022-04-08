const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&appid=c07521f35ad51dfde07c36d1d8632c37';


fetch(apitURL)
    .then( response => response.json())
    .then( jsObject => {
        const iconSrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
        const desc = jsObject.current.weather[0].description;

        document.querySelector('.weather-image > img').textContent = iconSrc;
        document.querySelector('#weather-img').setAttribute('src', iconsrc);
        document.querySelector('weather-img > img').setAttribute('alt', desc)
        document.querySelector('#temp').textContent = data.main.temp.toFixed(1);
        document.querySelector('#speed').textContent = data.wind.speed;



    });