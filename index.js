//  here annimation stertst for header //
window.onscroll = ()=>{
let header = document.querySelector('.header') ;
header.classList.toggle('sticky', window.scrollY > 100)
} ;