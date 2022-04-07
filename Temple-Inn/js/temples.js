
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
        const templeNameSpan = document.createElement('span');
        const templePhone = document.createElement('li');
        const Services = document.createElement('li');
        const templeServicesList = document.createElement('ul');
        const templeOrdinances = document.createElement('li');
        const templeSessions = document.createElement('li');
        const tClosures = document.createElement ('li')
        const templeClosures = document.createElement('ul');
        const tHistory = document.createElement('li')
        const templeHistory = document.createElement('ul');
        // console.log(templeslist);
        
        templeServicesList.textContent = ``;
        
   
        if(Array.isArray(temple.services)) {
            temple.services.forEach(service => {
                const serviceElement = document.createElement('ul')
                serviceElement.textContent = service
                templeServicesList.appendChild(serviceElement)
            })
        } else {
            const serviceElement = document.createElement('ul')
            serviceElement.textContent = temple.services
            templeServicesList.appendChild(serviceElement)
        }

        templeClosures.textContent = ``;

        if(Array.isArray(temple.closures)) {
            temple.closures.forEach(closure => {
                const closureElement = document.createElement('ul')
                closureElement.textContent = closure
                templeClosures.appendChild(closureElement)
            })
        } else {
            const closureElement = document.createElement('ul')
            closureElement.textContent = temple.closures
            templeClosures.appendChild(closureElement)
        }

        templeHistory.textContent = ``;


        if(Array.isArray(temple.history)) {
            temple.history.forEach(history => {
                const historyElement = document.createElement('ul')
                historyElement.textContent = history
                templeHistory.appendChild(historyElement)
            })
        } else {
            const historyElement = document.createElement('ul')
            historyElement.textContent = temple.history
            templeHistory.appendChild(historyElement)
        }
       

        // li children attributes
        templeImage.src = temple.image
        templeImage.className = 'temple-image'
        templeNameSpan.textContent = temple.name
        templePhone.textContent = `Phone: ${temple.phone}`
        Services.textContent = `Services: `
        templeOrdinances.textContent = `ordinances: ${temple.ordinances}`
        templeSessions.textContent = `Sessions: ${temple.sessions}`
        tClosures.textContent = `Closures: `
        tHistory.textContent = `History: `




        // li append all children
        templeListElement.appendChild(templeImage)
        templeListElement.appendChild(templeNameSpan)
        templeListElement.appendChild(templePhone)
        templeListElement.appendChild(Services)
        templeListElement.appendChild(templeServicesList)
        templeListElement.appendChild(templeOrdinances)
        templeListElement.appendChild(templeSessions)
        templeListElement.appendChild(tClosures)
        templeListElement.appendChild(templeClosures)
        templeListElement.appendChild(tHistory)
        templeListElement.appendChild(templeHistory)
        // address
        //phone


        // li append to ul
        temples.appendChild(templeListElement)
    });    
}

displayTemples() 