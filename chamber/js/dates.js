const today = new Date();
let weekDay = today.getDay()

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastmod").textContent = `Last Updated: ${document.lastModified}`;

const datefieldUK = document.querySelector(".current-date");


const special_banner = document.getElementById('top-banner')

if(special_banner) {
	if (weekDay == 1 || weekDay == 2)
		special_banner.style.display = 'block';
	else
		special_banner.style.display = 'none';
}


const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);


datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
