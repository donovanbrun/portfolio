const modalZone = document.querySelector('.modal-zone');
const modal = document.querySelector('.modal');

modalZone.addEventListener('click', hideModal);

export function showModal(content) {
    modalZone.style.display = 'flex';
    modalZone.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
        duration: 500,
        fill: 'forwards'
    });
    modal.innerHTML = content;
}

export function hideModal(event) {

    // If click is on modal
    const rect = modal.getBoundingClientRect();
    const divX = rect.left;
    const divY = rect.top;
    const divLargeur = rect.width;
    const divHauteur = rect.height;
    const x = event.clientX;
    const y = event.clientY;

    if (x >= divX && x <= divX + divLargeur && y >= divY && y <= divY + divHauteur) {
        return;
    }

    modalZone.animate([
        { opacity: '1' },
        { opacity: '0' }
    ], {
        duration: 500,
        fill: 'forwards'
    });
    setTimeout(() => {
        modalZone.style.display = 'none';
        modal.innerHTML = '';
    }, 500);
}