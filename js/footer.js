$(window).resize(() => {
    var header = document.getElementById('header').offsetHeight +
    document.getElementById('barra').offsetHeight,
    body = document.getElementById('cuerpo').offsetHeight,
    footer = document.getElementById('footer');
    fsize = footer.offsetHeight;

    console.log(`Header ${header}. Body ${body}. Footer ${fsize}`);
    // footer.style.height = `calc(100vh)`;
});