import { data } from './Data.js';
import './Project.js';

const projectsList = document.getElementsByClassName('Projects-list')[0];
data.projects.forEach(project => {
    const projectCard = document.createElement('project-card');
    projectCard.setAttribute('name', project.name);
    projectCard.setAttribute('description', project.description);
    projectCard.setAttribute('detail', project.detail);
    projectCard.setAttribute('link', project.link);
    projectCard.setAttribute('tech', project.tech);
    projectCard.setAttribute('htmlContent', project.htmlContent);
    projectsList.appendChild(projectCard);
});