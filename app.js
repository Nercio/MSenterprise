const options = {
  
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    } 
  });
},{
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.5,
})

const head = document.querySelectorAll(".header");
head.forEach((el) => observer.observe(el));

const home = document.querySelectorAll(".home-content");
home.forEach((el) => observer.observe(el));


const hiddenElements = document.querySelectorAll(".quemsomos");
hiddenElements.forEach((el) => observer.observe(el));

const method = document.querySelectorAll(".metodoligia");
method.forEach((el) => observer.observe(el));

const services = document.querySelectorAll(".grid-content");
services.forEach((el) => observer.observe(el));

const contacto = document.querySelectorAll(".contactos");
contacto.forEach((el) => observer.observe(el));



$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('header').addClass("sticky")
      } else{
          $('header').removeClass("sticky")
      }if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show")
      }else{
          $('.scroll-up-btn').removeClass("show")
      }
  })

  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0})
  })
})
