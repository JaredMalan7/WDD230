const d = new Date();
const year = d.getFullYear();


//using get ElementById
//document.querySelector("#currentyear").textContent = year;
//document.getElementById("lastupdated").textContent = "Last Updated: " + document.lastModified;   (Professor prefers us to use a template literal insteda of concatenation)


const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Updated: ${document.lastModified}`;