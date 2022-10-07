const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

$(document).ready(function(){
  $('.my-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
]
  });
});