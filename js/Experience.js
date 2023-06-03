export class ExperienceCard extends HTMLElement {
    constructor() {
        super();

        const company = this.getAttribute('company');
        const type = this.getAttribute('type');
        const location = this.getAttribute('location');
        const date = this.getAttribute('date');
        const detail = this.getAttribute('detail');

        this.innerHTML = `
        <div class="Experience">
            <div class="displayed">
                <h1 class="ExperienceTitle">${company}</h1>
                <p>${type}</p>
                <p>${location}</p>
                <p>${date}</p>
            </div>
            <div class="hidden">
                <p class="ExperienceDetail">${detail}</p>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        this.addEventListener('mouseenter', () => this.show());
        this.addEventListener('mouseleave', () => this.show());

        const descDiv = this.querySelector('.StacksDescription');
        const description = this.getAttribute('description');

        if (description) {
            description.split(';').forEach(d => {
                let p = document.createElement('p');
                p.className = "StacksTitle";
                p.innerHTML = d;
                descDiv.appendChild(p);
            });
        }
    }

    show() {
        const displayedDiv = this.children[0].children[0];
        const hiddenDiv = this.children[0].children[1];
        const animationSpeed = 500;

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
}

customElements.define('experience-card', ExperienceCard);