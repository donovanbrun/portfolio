export class StackCard extends HTMLElement {

    isShown = false;

    constructor() {
        super();

        const title = this.getAttribute('title');

        this.innerHTML = `
        <div class='Stacks'>
            <div class="StacksDetail">
                <p class='StacksTitle'>${title}</p>
            </div>
        </div>
        `;
    }

    connectedCallback() {
        this.addEventListener('click', () => this.show());
    }

    show() {
        const div = this.children[0];
        const title = this.getAttribute('title');
        let description = this.getAttribute('description');
        description = "<ul>" + description.split(';').map(d => `<li>${d}</li>`).join("<br>") + "</ul>";

        if (!this.isShown) {
            div.animate([
                {
                    height: "5rem"
                },
                {
                    height: "15rem"
                }
            ], {
                duration: 250,
                easing: 'ease-in-out',
                fill: 'forwards'
            }).finished.then(() => {
                const descDiv = this.querySelector('.StacksTitle');
                descDiv.innerHTML = description;
            })

            this.isShown = true;
            return;
        }

        div.animate([
            {
                height: "15rem"
            },
            {
                height: "5rem"
            },
        ], {
            duration: 250,
            easing: 'ease-in-out',
            fill: 'forwards'
        })

        const descDiv = this.querySelector('.StacksTitle');
        descDiv.innerHTML = title;

        this.isShown = false;
    }
}

customElements.define('stack-card', StackCard);