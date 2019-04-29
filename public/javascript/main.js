//Project smooth scroll
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          800,
          function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              return false;
            } else {
              $target.focus();
            }
          },
        );
      }
    }
  });

//Hide Contact Icons at top of page
$('.contact-div').hide();
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.contact-div').show();
  } else {
    $('.contact-div').hide();
  }
});

//Contact Icons open new tab
$('.contact-div')
  .children()
  .attr('target', '_blank');
