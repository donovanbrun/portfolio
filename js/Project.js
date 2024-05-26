import { showModal } from "./Modal.js";

export class ProjectCard extends HTMLElement {

    content;

    constructor() {
        super();
    }

    connectedCallback() {
        const name = this.getAttribute('name');
        const description = this.getAttribute('description');
        const date = this.getAttribute('date');
        const img = this.getAttribute('img');
        const detail = this.getAttribute('detail');
        const link = this.getAttribute('link');
        this.content = this.getAttribute('htmlContent');

        this.innerHTML = `
        <div class="Project">
          <div class="displayed">
            <h1 class="ProjectTitle">${name}</h1>
            <p class="ProjectDescription">${description}</p>
            ${img.length ? '<img src="' + img + '" class="ProjectIllustration" width="300px" height="200px" alt="' + name + '">' : ''}
          </div>
          <div class="hidden">
            <p class="ProjectDescription">${detail}</p>
            <div class="ProjectTech">
            </div>
            <p class="ProjectDescription">${date}</p>
            <p class="ProjectLink">See more</p>
          </div>
        </div>
        `;

        this.addEventListener('mouseenter', () => this.show());
        this.addEventListener('mouseleave', () => this.show());

        const techDiv = this.querySelector('.ProjectTech');
        const tech = this.getAttribute('tech');

        if (tech) {
            tech.split(',').forEach(tech => {
                const div = document.createElement('div');
                const img = document.createElement('img');
                img.src = `img/tech/${tech}.png`;
                img.alt = tech;
                img.title = tech;
                img.width = 32;
                img.height = 32;
                div.classList.add('ProjectImage');
                div.appendChild(img);
                techDiv.appendChild(div);
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
            showModal({
                title: this.getAttribute('name'),
                link: JSON.parse(this.getAttribute('link')),
                body: this.content
            });
        }
    }
}

customElements.define('project-card', ProjectCard);