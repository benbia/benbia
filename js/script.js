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


// typewriter 

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('un píxel a la vez.')
  .pauseFor(6000)
  .start();


  // sobre nosotros

  var app = document.getElementById('cte');

  var typewriter = new Typewriter(cte, {
    loop: true,
    delay: 75,
  });
  
  typewriter
    .pauseFor(1000)
    .typeString('Sobre nosotros')
    .pauseFor(10000)
    .start();

    //servicios

    var app = document.getElementById('serv');

    var typewriter = new Typewriter(serv, {
      loop: true,
      delay: 75,
    });
    
    typewriter
      .pauseFor(1000)
      .typeString('Servicios')
      .pauseFor(10000)
      .start();
  
  

// section scroll

  