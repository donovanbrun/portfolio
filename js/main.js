import './Experience.js';
import './Project.js';
import './Stack.js';

const r = document.querySelector(':root')

const homeDiv = document.getElementById('Home');
const aboutDiv = document.getElementById('About');
const projectsDiv = document.getElementById('Projects');
const contactDiv = document.getElementById('Contact');

// const homeNav = document.getElementById('NavHome');
// const aboutNav = document.getElementById('NavAbout');
// const projectsNav = document.getElementById('NavProjects');
// const contactNav = document.getElementById('NavContact');

const darkmodeButton = document.getElementById('DarkModeBtn');

const background = document.getElementById('background');
const cloud = document.getElementById('cloud');

// scroll to bottom
window.addEventListener('load', () => {
    window.scrollTo(0, document.body.scrollHeight);
});

let dark = true;
r.style.setProperty('--background-color', '#101010')
r.style.setProperty('--color-primary', 'white')
r.style.setProperty('--color-secondary', '#080808')
r.style.setProperty('--title-color', 'white')

function darkmode() {
    if (!dark) {
        dark = true;
        r.style.setProperty('--background-color', '#101010')
        r.style.setProperty('--color-primary', 'white')
        r.style.setProperty('--color-secondary', '#080808')
        r.style.setProperty('--title-color', 'white')
    }
    else {
        dark = false;
        r.style.setProperty('--background-color', 'white')
        r.style.setProperty('--color-primary', 'white')
        r.style.setProperty('--color-secondary', '#101010')
        r.style.setProperty('--title-color', '#101010')
    }
}
// darkmodeButton.addEventListener('click', darkmode)

function navigate(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const midpointX = rect.left + rect.width / 2;
    const midpointY = rect.top + rect.height / 2;

    return midpointX >= 0 && midpointX <= windowWidth && midpointY >= 0 && midpointY <= windowHeight;
}


// homeNav.addEventListener('click', () => {
//     navigate("Home");
// });
// aboutNav.addEventListener('click', () => {
//     navigate("About");
// });
// projectsNav.addEventListener('click', () => {
//     navigate("Projects");
// });
// contactNav.addEventListener('click', () => {
//     navigate("Contact");
// });


window.addEventListener('scroll', () => {
    // get percentage
    const scrollPercent = 100 - (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    const gradientPercent = scrollPercent / 100;
    const red = Math.round(119 - gradientPercent * 119); // Interpolating R value
    const g = Math.round(181 - gradientPercent * 181); // Interpolating G value
    const b = Math.round(254 - gradientPercent * 254); // Interpolating B value
    const color = `rgb(${red},${g},${b})`;
    r.style.setProperty('--background-color', color);

    // homeInViewport(isInViewport(homeDiv));
    // aboutInViewport(isInViewport(aboutDiv));
    // projectsInViewport(isInViewport(projectsDiv));
    // contactInViewport(isInViewport(contactDiv));
    background.style.opacity = scrollPercent / 100;
    cloud.style.opacity = 0.5 - (scrollPercent / 100);
});

function homeInViewport(isInViewport) {
    if (isInViewport) {
        homeNav.classList.add('NavItemCurrent');
    }
    else {
        homeNav.classList.remove('NavItemCurrent');
    }
}

function aboutInViewport(isInViewport) {
    if (isInViewport) {
        aboutNav.classList.add('NavItemCurrent');
    }
    else {
        aboutNav.classList.remove('NavItemCurrent');
    }
}

function projectsInViewport(isInViewport) {
    if (isInViewport) {
        projectsNav.classList.add('NavItemCurrent');
    }
    else {
        projectsNav.classList.remove('NavItemCurrent');
    }
}

function contactInViewport(isInViewport) {
    if (isInViewport) {
        contactNav.classList.add('NavItemCurrent');
    }
    else {
        contactNav.classList.remove('NavItemCurrent');
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 100;
let result = "";
for (let i = 0; i < STAR_COUNT; i++) {
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`;
}
background.style.boxShadow = result.substring(0, result.length - 1);