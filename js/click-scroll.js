//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5];

$.each(sectionArray, function(index, value) {

    $(document).scroll(function() {
        var offsetSection = $('#' + 'section_' + value).offset().top - 0;
        var docScroll = $(document).scrollTop();
        var docScroll1 = docScroll + 1;


        if (docScroll1 >= offsetSection) {
            $('#sidebarMenu .nav-link').removeClass('active');
            $('#sidebarMenu .nav-link:link').addClass('inactive');
            $('#sidebarMenu .nav-item .nav-link').eq(index).addClass('active');
            $('#sidebarMenu .nav-item .nav-link').eq(index).removeClass('inactive');
        }

    });

    $('.click-scroll').eq(index).click(function(e) {
        var offsetClick = $('#' + 'section_' + value).offset().top - 0;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 300)
    });

});

$(document).ready(function() {
    $('#sidebarMenu .nav-item .nav-link:link').addClass('inactive');
    $('#sidebarMenu .nav-item .nav-link').eq(0).addClass('active');
    $('#sidebarMenu .nav-item .nav-link:link').eq(0).removeClass('inactive');
});

const whatsappIcons = document.querySelectorAll('.whatsapp-icon');
whatsappIcons.forEach(icon => {
    icon.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien

        // Trouver le numéro de téléphone correspondant
        const phoneNumber = this.parentElement.querySelector('.phone-number');

        // Cacher l'icône WhatsApp
        this.classList.add('hidden');

        // Afficher le numéro de téléphone
        phoneNumber.classList.remove('hidden');

        // Animation pour faire apparaître le numéro de téléphone
        setTimeout(() => {
            phoneNumber.classList.add('visible');
        }, 50); // Un léger délai pour permettre à l'icône de disparaître
    });
});