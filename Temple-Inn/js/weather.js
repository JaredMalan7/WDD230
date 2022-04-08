const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&appid=c07521f35ad51dfde07c36d1d8632c37';


fetch(apiURL)
    .then( response => response.json())
    .then( jsObject => {
        const iconSrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
        const desc = jsObject.current.weather[0].description;


        document.querySelector('.weather-img > img').setAttribute('src', iconSrc);
        document.querySelector('.weather-img > img').setAttribute('alt', desc)
        document.querySelector('#temp').textContent = jsObject.main.temp.toFixed(1);
        document.querySelector('#speed').textContent = jsObject.wind.speed;

        cal_windchill();
    });

    const cal_windchill = () =>{


        const t = parseInt(document.querySelector("#temp").textContent);
        const s = parseInt(document.getElementById("speed").textContent);
        // console.log(t)
        // console.log(s)
        if(t <= 50 && s > 3) {
            const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
            document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
        }
        else {
            document.querySelector("#windchill").innerHTML = "N/A"
        }
    
    }