const jasonData= "./js/temples.json"

fetch(jasonData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject){
        const temples = jsonObject['temples'];
    //    forEach.temple in temples(displayTemples)
        const filteredTemples = temples.filter((temple) => {
            return temple.spotlight == "Featured";
        });

        let first = Math.floor(Math.random()*filteredTemples.lenght);
        let firstTemple = filteredTemples[i];

        var firstSpotlight = document.getElementById('.home-temples');

        let firstImage = document.createElement('img');
        firstImage.src = firstTemple.image;
        firstImage.setAttribute('alt', firstTemple.name);
    })
