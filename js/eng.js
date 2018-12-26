(function ($) {
  "use strict"; // Start of use strict

   var typed = new Typed('#types', {
    stringsElement: '#types-strings',
    typeSpeed: 100,
    backSpeed: 0,
    backDelay: 1000,
    startDelay: 1000
  });
  
  //change navbar color
  $(window).scroll(function () {
    if ($(window).width() <= 768) {
      $('nav').toggleClass('scrolled', $(this).scrollTop() >= 0);
      $('.nav-link').toggleClass('scrolled', $(this).scrollTop() >= 0);
    } else {
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
      $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 200);
    }
  });

  //close nav while click menu
  $('.navbar-nav>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });


  //scroll up button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
      $('.scrolltop').stop(true, true).fadeOut();
    }
  });

  $(function () {
    $(".scroll").click(function () {
      $("html,body").animate({
        scrollTop: $("#page-top").offset().top
      }, 1000, "easeInOutExpo");
      return false;
    })
  });


})(jQuery); // End of use strict