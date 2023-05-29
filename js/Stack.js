export class StackCard extends HTMLElement {
    constructor() {
        super();

        const title = this.getAttribute('title');
        const description = this.getAttribute('description');

        this.innerHTML = `
        <div class='Stacks'>
            <div class="StacksDetail displayed">
                <p class='StacksTitle'>${title}</p>
                <i class="arrow-down"></i>
            </div>
            <div class="StacksDescription hidden">
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

customElements.define('stack-card', StackCard);