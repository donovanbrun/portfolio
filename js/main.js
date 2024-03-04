import { data } from './Data.js';
import './Experience.js';
import './Project.js';

const homeDiv = document.getElementById('Home');
const aboutDiv = document.getElementById('About');
const projectsDiv = document.getElementById('Projects');
const contactDiv = document.getElementById('Contact');

const homeNav = document.getElementById('NavHome');
const aboutNav = document.getElementById('NavAbout');
const projectsNav = document.getElementById('NavProjects');
const contactNav = document.getElementById('NavContact');

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


homeNav.addEventListener('click', () => {
    navigate("Home");
});
aboutNav.addEventListener('click', () => {
    navigate("About");
});
projectsNav.addEventListener('click', () => {
    navigate("Projects");
});
contactNav.addEventListener('click', () => {
    navigate("Contact");
});

// Generate Projects
const projectsList = document.getElementsByClassName('Projects-list')[0];
data.projects.slice(0, 4).forEach(project => {
    const projectCard = document.createElement('project-card');
    projectCard.setAttribute('name', project.name);
    projectCard.setAttribute('description', project.description);
    projectCard.setAttribute('date', project.date);
    projectCard.setAttribute('img', project.img);
    projectCard.setAttribute('detail', project.detail);
    projectCard.setAttribute('link', project.link);
    projectCard.setAttribute('tech', project.tech);
    projectCard.setAttribute('htmlContent', project.htmlContent);
    projectsList.appendChild(projectCard);
});

// Generate Contacts
const contactsList = document.getElementsByClassName('ContactSection')[0];
data.contacts.forEach(contact => {
    const aElement = document.createElement("a");
    aElement.href = contact.link;
    aElement.target = "_blank";
    aElement.rel = "noreferrer";

    const imgElement = document.createElement("img");
    imgElement.alt = contact.name.toLowerCase();
    imgElement.classList.add("ContactImage");
    imgElement.src = contact.img;
    imgElement.width = 100;
    imgElement.height = 100;
    aElement.appendChild(imgElement);

    contactsList.appendChild(aElement);
});