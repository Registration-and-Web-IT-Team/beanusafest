//jquery-click-scroll

var sectionArray = [1, 2, 3, 4, 5, 6, 7];

$(document).scroll(function () {
    $.each(sectionArray, function (index, value) {
        var sectionId = 'section_' + value;
        var sectionElement = $('#' + sectionId);

        if (sectionElement.length > 0) {
            var offsetSection = sectionElement.offset().top - 84;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;

            if (docScroll1 >= offsetSection) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active').removeClass('inactive');
            }
        } else {
            console.error('Elemen dengan id ' + sectionId + ' tidak ditemukan.');
        }
    });
});

$('.click-scroll').click(function (e) {
    e.preventDefault();
    var index = $(this).index('.click-scroll');
    
    // Cek apakah ini link ke formulir pendaftaran
    if (sectionArray[index] === 7) {
        // Gantilah URL_FORMULIR dengan URL formulir Google Anda
        var urlFormulir = "http://bit.ly/beanusafest";
        window.location.href = urlFormulir;
    } else {
        var sectionId = 'section_' + sectionArray[index];
        var offsetClick = $('#' + sectionId).offset().top - 84;
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 300);
    }
});

$(document).ready(function () {
    $('.navbar-nav .nav-item .nav-link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active').removeClass('inactive');
});
