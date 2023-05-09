//carousel


// scroll 

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
    headerEl.classList.add('header-scrolled')
    } else if (window.scrollY <=20) {
        headerEl.classList.remove('header-scrolled') 
    }
})


// section scroll

  