function initCollapse() {
    var showed = false;

    $('.faq-collapse__title').on('click', function () {
        toggleCollapse($(this).parents('.faq-collapse'));
    });

    function showCollapse($collapse) {
        $collapse.find('.faq-collapse__container').outerHeight($collapse.find('.faq-collapse__body').outerHeight());
        $collapse.addClass('active');

        showed = true;
    }

    function hideCollapse($collapse) {

        $collapse.find('.faq-collapse__container').outerHeight(0);
        $collapse.removeClass('active');

        showed = false;
    }

    function toggleCollapse($collapse) {
        if ( $collapse.hasClass('active') ) {
            hideCollapse($collapse);
        } else {
            hideCollapse($('.faq-collapse.active'));
            showCollapse($collapse);
        }
    }
}

function initOnePage() {

    $('.section-1').addClass('viewed');
    // $('.header').addClass('animate');

    $main = $('.main');


    $main.fullpage({
        menu: '.page-nav, .menu',
        // autoScrolling: false,
        // verticalCentered: false,
        recordHistory: false,
        // paddingTop: '0',
        // paddingBottom: '0',
        responsiveWidth: 992,
        normalScrollElements: '.menu',
        // responsiveHeight: 0,
        // anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        // sectionsColor: ['#4A6FB1', '#939FAA', '#323539'],
        // scrollOverflow: true

        afterLoad: function(origin, destination, direction){
            $('.page-number__current').text(('0' + destination).slice(-2));
        },
        // onLeave: function(origin, destination, direction){
        //     $('.page-number__current').text(('0' + destination).slice(-2));
        // }
    });

    // $main.onepage_scroll({
    //     sectionContainer: ".section",
    //     loop: false,
    //     pagination: false,
    //     responsiveFallback: 900,
    //     beforeMove: function(index) {
    //         $('.page-number__current').text(('0' + index).slice(-2));
    //         $('.page-nav').find('[data-index]').removeClass('active');
    //         $('.page-nav').find('[data-index=' + index + ']').addClass('active');
    //
    //         $('[data-index]').removeClass('viewed');
    //         for (var i = index; i > 0; i--) {
    //             $('[data-index=' + i + ']').addClass('viewed');
    //         }
    //     }
    // });

    // $('.page-nav__item').on('click', function (e) {
    //     e.preventDefault();
    //
    //     $main.moveTo($(this).data('index'));
    // });
}

$(document).ready(function () {
    initOnePage();
    initCollapse();

    $('.menu-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $('.social-links').toggleClass('active');
    });
});