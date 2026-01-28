(function($) {

    "use strict";

    // MENU
    $('#sidebarMenu .nav-link').on('click', function() {
        $("#sidebarMenu").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function() {
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height();

        scrollToDiv(elWrapped, header_height);
        return false;

        function scrollToDiv(element, navheight) {
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop - navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });

})(window.jQuery);


var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
          delay: 3000, // 3 secondes par slide
          disableOnInteraction: false, // pour que l'autoplay continue même après une interaction
  
  },
  });
  



