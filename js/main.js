import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/scrollspy';
import '@fancyapps/fancybox';

function initCollapse() {
  let showed = false;

  $('.faq-collapse__title, .faq-collapse__icon').on('click', function() {
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
    if ($collapse.hasClass('active')) {
      hideCollapse($collapse);
    } else {
      hideCollapse($('.faq-collapse.active'));
      showCollapse($collapse);
    }
  }
}

function initOnePage() {

  $('.trader-prev').on('click', function(e) {
    e.preventDefault();

    $('[data-trader]').removeClass('active');
    // console.log($(this).data('trader'));
    $('[data-trader="' + $(this).data('trader') + '"]').addClass('active');
  });

  // $('.section-1').addClass('viewed');
  // $('.header').addClass('animate');

  // let $main = $('.main');
  // $main.fullpage({
  //   menu: '.page-nav, .menu',
  //   // autoScrolling: false,
  //   // verticalCentered: false,
  //   recordHistory: false,
  //   // paddingTop: '0',
  //   // paddingBottom: '0',
  //   responsiveWidth: 992,
  //   normalScrollElements: '.menu',
  //   bigSectionsDestination: 'top',
  //   // responsiveHeight: 0,
  //   // anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
  //   // sectionsColor: ['#4A6FB1', '#939FAA', '#323539'],
  //   // scrollOverflow: true
  //
  //   afterLoad: function (origin, destination, direction) {
  //     $('.page-number__current').text(('0' + destination).slice(-2));
  //   },
  //   afterRender: function () {
  //     $('.loader').fadeOut();
  //   },
  //   // onLeave: function(origin, destination, direction){
  //   //     $('.page-number__current').text(('0' + destination).slice(-2));
  //   // }
  // });
}

$(function() {
  // initOnePage();
  initCollapse();


  $('.loader').fadeOut();

  const menuConfig = {
    selector: '.menu-list',
    offset: 150,
  };

  $('body').scrollspy({
    target: menuConfig.selector,
    offset: menuConfig.offset,
  });

  $(document).on('click', 'a[data-anchor]', function(e) {
    const targetSelector = $(this).attr('href');

    if (!$(targetSelector).length) return;

    $('html,body').stop().animate({
      scrollTop: $(targetSelector).offset().top - menuConfig.offset + 1,
    }, 1000);
    e.preventDefault();
  });

  $('.trader-prev').on('click', function(e) {
    e.preventDefault();

    $('[data-trader]').removeClass('active');
    // console.log($(this).data('trader'));
    $('[data-trader="' + $(this).data('trader') + '"]').addClass('active');
  });


  $('.h-menu-btn, .menu-list__link').on('click', function() {
    $('.h-menu-btn').toggleClass('active');
    // $('.menu__link')
    $('.menu').toggleClass('active');
    // $('.social-links').toggleClass('active');
  });
});