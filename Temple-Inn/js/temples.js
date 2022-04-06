const jasonData= "./js/temples.json"

fetch(jasonData)
    .then(function (response) {
        return response.json();
    })
    .then(functoin (jsonObject){
        const temples = jsonObject['temples'];
        const filteredTemples = temples.filter((temple) => {
            return temple.
        })
    })