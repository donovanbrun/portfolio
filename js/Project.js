import { showModal } from "./Modal.js";

export class ProjectCard extends HTMLElement {

    content;

    constructor() {
        super();
    }

    connectedCallback() {
        const name = this.getAttribute('name');
        const description = this.getAttribute('description');
        const img = this.getAttribute('img');
        this.content = this.getAttribute('htmlContent');

        this.innerHTML = `
        <div class="Project">
            <h1 class="ProjectTitle">${name}</h1>
            <p class="ProjectDescription">${description}</p>
            ${img.length ? '<img src="' + img + '" class="ProjectIllustration" width="300px" height="200px" alt="' + name + '">' : ''}
        </div>
        `;

        const projectDiv = this.querySelector('.Project');
        projectDiv.addEventListener('click', () => this.open());
    }

    open() {
        if (this.content !== '') {
            showModal({
                title: this.getAttribute('name'),
                description: this.getAttribute('description'),
                img: this.getAttribute('img'),
                date: this.getAttribute('date'),
                detail: this.getAttribute('detail'),
                try: this.getAttribute('try'),
                link: JSON.parse(this.getAttribute('link')),
                tech: this.getAttribute('tech'),
                body: this.content
            });
        }
    }
}

customElements.define('project-card', ProjectCard);