var fotos = document.getElementsByClassName('imagen');
fotos = [].slice.call(fotos);

fotos.forEach(foto => {
    foto.children[0].addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        element.parentNode.children[1].classList.add('hide-text');
        element.style.width = '120%';
        element.classList.add('hover');
    })

    foto.children[0].addEventListener('mouseleave', (e) => {
        const element = e.currentTarget;
        element.parentNode.children[1].classList.remove('hide-text');
        element.style.width = '100%';
        element.classList.remove('hover');
    })
})