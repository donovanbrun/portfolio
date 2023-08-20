export class StackCard extends HTMLElement {

    constructor() {
        super();

        const title = this.getAttribute('title');

        this.innerHTML = `
        <div class='Stacks'>
            <div class="StacksDetail displayed">
                <p class='StacksTitle'>${title}</p>
                <i class="arrow-down"></i>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        this.addEventListener('mouseenter', () => this.show());
        this.addEventListener('mouseleave', () => this.unshow());
    }

    show() {
        const detailSection = document.querySelector('.StackDetailSection');
        const desc = this.getAttribute('description');
        if (desc) {
            desc.split(';').forEach(d => {
                let p = document.createElement('p');
                p.className = "StacksTitle";
                p.innerHTML = d;
                detailSection.appendChild(p);
            });
        }

        detailSection.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: 500,
            easing: 'ease-in-out',
            fill: 'forwards'
        })
    }

    unshow() {
        const detailSection = document.querySelector('.StackDetailSection');
        detailSection.animate([
            { opacity: '1' },
            { opacity: '0' }
        ], {
            duration: 500,
            easing: 'ease-in-out',
            fill: 'forwards'
        })
        detailSection.innerHTML = '';
    }
}

customElements.define('stack-card', StackCard);