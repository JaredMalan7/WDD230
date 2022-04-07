
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
        // console.log(templeslist);
        templeServicesList.textContent = `Services:`;
        
        

        
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