

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastmod").textContent = `Last Updated: ${document.lastModified}`;

const datefieldUK = document.querySelector(".current-date");


// This is currently not working

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);


datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
