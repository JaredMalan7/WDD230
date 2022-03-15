const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=f0c0d0a7b7dce39bfd0195af70ad1025";

fetch( apiURL )
    .then( response => response.json())
    .then( data => {
        if( data.cod == 401 || data.cod == 404 )
            console.log(`ERROR (#${data.cod}): ${data.message}`);
        else {
            //console.log(data);
            const iconSrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            const desc = data.weather[0].description;
            
            document.querySelector('#temp').textContent = data.main.temp.toFixed(1);
            document.querySelector('.wheater-imge > img').setAttribute('src', iconSrc);
            document.querySelector('.wheater-imge > img').setAttribute('alt', desc);
            document.querySelector('#wheater-api').textContent = desc;
            document.querySelector("#speed").textContent = data.wind.speed;
            
        }
    });


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });
