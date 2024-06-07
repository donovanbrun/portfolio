const modalZone = document.querySelector('.modal-zone');
const modal = document.querySelector('.modal');
const title = document.querySelector('.modal-title');
const text = document.querySelector('.modal-text');
const img = document.querySelector('.modal-img');
const description = document.querySelector('.modal-description');
const detail = document.querySelector('.modal-detail');
const tech = document.querySelector('.modal-tech');
const date = document.querySelector('.modal-date');
const tryBtn = document.querySelector('.modal-try');
const link = document.querySelector('.modal-link');
const closeBtn = document.querySelector('.modal-close');

modalZone.addEventListener('click', hideModal);
closeBtn.addEventListener('click', (e) => hideModal(e, true));

export function showModal(content) {
    title.innerHTML = '';
    text.innerHTML = '';
    description.innerHTML = '';
    detail.innerHTML = '';
    tryBtn.href = '';
    img.src = '';
    date.innerHTML = '';
    tech.innerHTML = '';
    link.innerHTML = '';

    modalZone.style.display = 'flex';
    modalZone.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 250,
        fill: 'forwards'
    });

    title.innerHTML = content.title;
    text.innerHTML = content.body;
    description.innerHTML = content.description;
    detail.innerHTML = content.detail;
    img.src = content.img;
    date.innerHTML = content.date;

    if (content.try && content.try.length > 0 && content.try !== 'undefined') {
        tryBtn.style.display = 'block';
        tryBtn.href = content.try;
    }
    else {
        tryBtn.style.display = 'none';
    }

    const techList = content.tech;

    if (techList) {
        techList.split(',').forEach(t => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = `img/tech/${t}.png`;
            img.alt = t;
            img.title = t;
            img.width = 36;
            img.height = 36;
            div.classList.add('ProjectImage');
            div.appendChild(img);
            tech.appendChild(div);
        });
    }

    if (content.link.length === 0) return;

    const links = content.link.map(l => `<a href="${l.url}" target="_blank">${l.name}</a>`);

    link.innerHTML += `${links.join("")}`;
}

export function hideModal(event, force = false) {
    // If click is only modal background
    if (event.target.classList.contains('modal-zone') || force) {
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