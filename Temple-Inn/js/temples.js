// temples": [
//     {
//         "name":     "Mount Timpanogos, Utah, Temple",
//         "address":  "742 N 900 E, American Fork, UT 84003",
//         "image":    "./temples/timpanogos-temple.webp",
//         "phone":    "+1 (801) 763-4540",    
//         "services": ["Clothing rental available", "No cafeteria available", "No patron housing available", "Distribution center nearby"],
//         "ordinances":   "By appointment only.",
//         "sessions": "By appointment only.",
//         "closures": ["Saturday, 2 April 2022","Monday, 9 May 2022 - Monday, 23 May 2022","Saturday, 1 October 2022","Monday, 7 November 2022 - Tuesday, 22 November 2022","Wednesday, 23 November 2022 - Thursday, 24 November 2022","Saturday, 24 December 2022","Saturday, 31 December 2022"],
//         "history":  ["3 October 1992 - Announced","9 October 1993 - Groundbreaking","13 October 1996 - Dedicated"],
//         "spotlight": "Featured"

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function


const requestURL = "./js/temples.json"
const temples = document.querySelector('.temple-list');

async function getTemples() {
    console.log('calling');
    const response = await fetch(requestURL);
    const templesjson = await response.json()
    return templesjson
  }

  const displayTemples = async() => {
    const templeslist =  await getTemples()
    console.log('templelist', templeslist)

    templeslist.temples.forEach(temple => {
        // li tag
        const templeListElement = document.createElement('li');
        templeListElement.className = 'temples-list-element'
        
        // li children
        const templeImage = document.createElement('img');
        const templeNameSpan = document.createElement('span')
        const templeServicesList = document.createElement('ul');
        
        if(Array.isArray(temple.services)) {
            temple.services.forEach(service => {
                const serviceElement = document.createElement('p')
                serviceElement.textContent = service
                templeServicesList.appendChild(serviceElement)
            })
        } else {
            const serviceElement = document.createElement('p')
            serviceElement.textContent = temple.services
            templeServicesList.appendChild(serviceElement)
        }

        // li children attributes
        templeImage.src = temple.image
        templeImage.className = 'temple-image'
        templeNameSpan.textContent = temple.name

        // li append all children
        templeListElement.appendChild(templeImage)
        templeListElement.appendChild(templeNameSpan)
        templeListElement.appendChild(templeServicesList);
        // address
        //phone


        // li append to ul
        temples.appendChild(templeListElement)
    });    
}

displayTemples() 