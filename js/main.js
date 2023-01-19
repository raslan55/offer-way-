// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("scrol");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


  // Navbar collapse on click
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


////


/////
window.addEventListener('scroll', function(e) {

  if( $(window).scrollTop() <= 50) {
      $('.wow').removeClass('animated');
      $('.wow').removeAttr('style');
      new WOW().init();
  }

});

   //Screenshoot slider
   $(".owl-carousel").owlCarousel({
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 3
        }
    },
    loop: true,
    center: true,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: false
});


////

