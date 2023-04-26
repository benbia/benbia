//carousel

$(".carousel").owlCarousel({
    margin: 10,
    loop:true,
    nav: false,
    autoplay:true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      1000:{
        items: 3,
      } 
    }

});


// scroll 

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
    headerEl.classList.add('header-scrolled')
    } else if (window.scrollY <=20) {
        headerEl.classList.remove('header-scrolled') 
    }
})