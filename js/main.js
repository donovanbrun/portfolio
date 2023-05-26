var r = document.querySelector(':root')
r.style.setProperty('--color-primary', 'white')
r.style.setProperty('--color-secondary', 'black')

function darkmode() {
    var r = document.querySelector(':root')
    if (r.style.getPropertyValue('--color-primary') === 'white') {
        r.style.setProperty('--color-primary', 'black')
        r.style.setProperty('--color-secondary', 'white')
    }
    else {
        r.style.setProperty('--color-primary', 'white')
        r.style.setProperty('--color-secondary', 'black')
    }
}

function show(element) {
    const animationSpeed = 700;

    if (element.children[0].style.display === 'none') {
        element.children[0].style.display = 'flex'
        element.children[0].animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: animationSpeed,
            easing: 'ease-in-out',
            fill: 'forwards'
        })
        element.children[1].style.display = 'none'
    }
    else {
        element.children[0].style.display = 'none'
        element.children[1].style.display = 'flex'
        element.children[1].animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: animationSpeed,
            easing: 'ease-in-out',
            fill: 'forwards'
        })
    }
}