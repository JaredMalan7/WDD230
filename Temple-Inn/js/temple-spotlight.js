const requestURL = "./js/temples.json"
const templeDOMElement = document.querySelector('.spotlight');

async function getTemple() {
    console.log('calling');
    const response = await fetch(requestURL);
    // https://www.w3schools.com/react/react_es6_destructuring.asp
    const { temples } = await response.json()

    const templeIndex = Math.floor(Math.random() * (temples.length))
    console.log('templeIndex: ', templeIndex)
    return temples[templeIndex]
  }

  const displayTemple = async() => {
    const templeData =  await getTemple()
    console.log('temple Data: ', templeData)

    // spotlight children
    const templeImage = document.createElement('img');
    const templeNameSpan = document.createElement('span')
    const templeServicesList = document.createElement('ul');
    
    if(Array.isArray(templeData.services)) {
        templeData.services.forEach(service => {
            const serviceElement = document.createElement('p')
            serviceElement.textContent = service
            templeServicesList.appendChild(serviceElement)
        })
    } else {
        const serviceElement = document.createElement('p')
        serviceElement.textContent = templeData.services
        templeServicesList.appendChild(serviceElement)
    }

    // li children attributes
    templeImage.src = templeData.image
    templeImage.className = 'temple-image'
    templeNameSpan.textContent = templeData.name

    // li append all children
    templeDOMElement.appendChild(templeImage)
    templeDOMElement.appendChild(templeNameSpan)
    templeDOMElement.appendChild(templeServicesList);
  }

displayTemple()