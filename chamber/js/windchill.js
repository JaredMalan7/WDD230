
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=484752097f280044c18d81076e89e052";


fetch( apiURL )
    .then( response => response.json())
    .then( data => {
        if( data.cod == 401 || data.cod == 404 )
            console.log(`ERROR (#${data.cod}): ${data.message}`);
        else {

            const iconSrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            const desc = data.weather[0].description;
            
            document.querySelector('#temp').textContent = data.main.temp.toFixed(1);
            document.querySelector('.weather-img > img').setAttribute('src', iconSrc);
            document.querySelector('.weather-img > img').setAttribute('alt', desc);
            document.querySelector('#weather-api').textContent = desc;
            document.querySelector("#speed").textContent = data.wind.speed;
            cal_windchill();
        }
    });
const cal_windchill = () =>{


    const t = parseInt(document.querySelector("#temp").textContent);
    const s = parseInt(document.getElementById("speed").textContent);
    console.log(t)
    console.log(s)
    if(t <= 50 && s > 3) {
        const windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16)
        document.querySelector("#windchill").innerHTML = `${Math.round(windchill)}&#176;`;
    }
    else {
        document.querySelector("#windchill").innerHTML = "N/A"
    }

}