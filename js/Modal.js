const modalZone = document.querySelector('.modal-zone');
const modal = document.querySelector('.modal');
const title = document.querySelector('.modal-title');
const body = document.querySelector('.modal-body');

modalZone.addEventListener('click', hideModal);

export function showModal(content) {
    modalZone.style.display = 'flex';
    modalZone.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 250,
        fill: 'forwards'
    });
    title.innerHTML = content.title;
    body.innerHTML = content.body;

    if (content.link.length === 0) return;

    const links = content.link.map(l => `<a href="${l.url}" target="_blank">${l.name}</a>`);

    body.innerHTML += `<div> ${links.join("")} </div>`;
}

export function hideModal(event) {
    // If click is only modal background
    if (event.target.classList.contains('modal-zone')) {
        modalZone.animate([
            { opacity: '1' },
            { opacity: '0' }
        ], {
            duration: 250,
            fill: 'forwards'
        });
        setTimeout(() => {
            modalZone.style.display = 'none';
        }, 500);
    }
}