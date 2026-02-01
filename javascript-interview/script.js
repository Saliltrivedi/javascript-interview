$(document).ready(function () {

  // Smooth scroll
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();

  const target = $($(this).attr('href'));
  if (!target.length) return;

  $('html, body').stop().animate(
    {
      scrollTop: target.offset().top - 90
    },
    800,
    'swing'
  );
});


  // Scroll reveal animation
  function reveal() {
    $('.fade-up').each(function () {
      const top = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll + windowHeight - 100 > top) {
        $(this).addClass('show');
      }
    });
  }

  reveal();
  $(window).on('scroll', reveal);

  // Contact form submit
  $('#contactForm').submit(function (e) {
    e.preventDefault();
    $('.success-msg').text('Message sent successfully! 🚀');
    this.reset();
  });

});


$(window).on('scroll', function () {
  $('.fade-up').each(function () {
    const top = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const height = $(window).height();

    if (scroll + height - 100 > top) {
      $(this).addClass('show');
    }
  });
});

$('#contactForm').submit(function(e){
  e.preventDefault();
  $('.success-msg').text('Thank you! I will get back to you soon.');
  this.reset();
});


const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  smoothWheel: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
