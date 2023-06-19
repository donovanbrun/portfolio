import { showModal } from "./Modal.js";

export class ProjectCard extends HTMLElement {

    content;

    constructor() {
        super();

        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const detail = this.getAttribute('detail');
        const link = this.getAttribute('link');
        this.content = this.innerHTML;

        this.innerHTML = `
        <div class="Project">
          <div class="displayed">
            <h1 class="ProjectTitle">${title}</h1>
            <p class="ProjectDescription">${description}</p>
          </div>
          <div class="hidden">
            <p class="ProjectDescription">${detail}</p>
            <div class="ProjectTech">
            </div>
            <a class="ProjectLink" target="_blank">See more</a>
          </div>
        </div>
        `;
    }

    connectedCallback() {
        this.addEventListener('mouseenter', () => this.show());
        this.addEventListener('mouseleave', () => this.show());

        const techDiv = this.querySelector('.ProjectTech');
        const tech = this.getAttribute('tech');

        if (tech) {
            tech.split(',').forEach(tech => {
                const img = document.createElement('img');
                img.src = `img/tech/${tech}.png`;
                img.alt = tech;
                img.title = tech;
                img.classList.add('ProjectImage');
                techDiv.appendChild(img);
            });
        }

        const projectDiv = this.querySelector('.Project');
        projectDiv.addEventListener('click', () => this.open());
    }

    show() {
        const displayedDiv = this.children[0].children[0];
        const hiddenDiv = this.children[0].children[1];

        const animationSpeed = 700;

        if (displayedDiv.style.display === 'none') {
            displayedDiv.style.display = 'flex'
            displayedDiv.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], {
                duration: animationSpeed,
                easing: 'ease-in-out',
                fill: 'forwards'
            })
            hiddenDiv.style.display = 'none'
        }
        else {
            displayedDiv.style.display = 'none'
            hiddenDiv.style.display = 'flex'
            hiddenDiv.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], {
                duration: animationSpeed,
                easing: 'ease-in-out',
                fill: 'forwards'
            })
        }
    }

    open() {
        if (this.content !== '') {
            showModal(this.content);
        }
    }
}

customElements.define('project-card', ProjectCard);