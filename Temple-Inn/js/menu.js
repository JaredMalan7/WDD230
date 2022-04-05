
const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');
const closebutton = document.querySelector('#xbutton');
const hamburger = document.querySelector('#hamburger');

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
    closebutton.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
}, false);
