window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});