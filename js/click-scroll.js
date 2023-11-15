//jquery-click-scroll

var sectionArray = [1, 2, 3, 4, 5, 6, 7];

$(document).scroll(function () {
    $.each(sectionArray, function (index, value) {
        var sectionId = 'section_' + value;
        var sectionElement = $('#' + sectionId);

        // Pemeriksaan apakah elemen dengan id yang diharapkan ada
        if (sectionElement.length > 0) {
            var offsetSection = sectionElement.offset().top - 84;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;

            if (docScroll1 >= offsetSection) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
            }
        } else {
            console.error('Elemen dengan id ' + sectionId + ' tidak ditemukan.');
        }
    });
});

$('.click-scroll').click(function (e) {
    var index = $(this).index('.click-scroll');
    var offsetClick = $('#' + 'section_' + sectionArray[index]).offset().top - 84;
    e.preventDefault();
    $('html, body').animate({
        'scrollTop': offsetClick
    }, 300);
});

$(document).ready(function () {
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});
