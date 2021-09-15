

// $(document).ready(function () {
//     $('.main').slick({
        
    

//     // parent container
//     container : 'main',

//     // content section
//     sections : 'section',

//     // animation speed
//     animateTime : 0.7,

//     // easing for animation
//     animateFunction : 'ease',

//     // current position
//     currentPosition: 0,

//     // display dots navigation
//     displayDots: true,

//     // where to place the dots navigation
//     dotsPosition: 'left'

//     });
// new main('#main', {
//   sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
// });
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
});
  //  $(function(){
  //           $('.slider.single-item').slick({
  //               vertical: true,
  //               verticalSwiping: true,
  //               slidesToShow: 3,
  //             autoplay: true,
  //             // prevArrow: '<img src="../img/up.png">',
  //             // nextArrow: '<img src="/img/down.png">'
  //           });
  //  });
        // $('.carousel').slick({
        //               slidesToShow: 3,
        //               slidesToScroll: 1,
        //               autoplay: true,
        //               autoplaySpeed: 2000,
        //             });
//         $('.autoplay').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
//  $('.autoplay').slick({
//                       slidesToShow: 2,
//                       slidesToScroll: 1,
//                       autoplay: true,
//                       autoplaySpeed: 2000,
//  });
  //  $('.company').slick({
 //   slidesToShow: 5,
 //   slidesToScroll: 1,
//   autoplay: true,
 //   autoplaySpeed: 2000,
 // });
  // $('.nav-btn').click(function () {
  //   $('.overlay-wrapper').addClass('active');
  //   $('.nav-wrapper').addClass('active');
  // });
  // $('.close-nav').click(function () {
  //   $('.overlay-wrapper').removeClass('active');
  //   $('.nav-wrapper').removeClass('active');
  // });
  // $('.overlay').click(function () {
  //   $('.overlay-wrapper').removeClass('active');
  //   $('.nav-wrapper').removeClass('active');
  // });


  // $(function () {
  //   tabInit();
  // });

  // function tabInit() {
  //   $('.myvertical-tabs').delegate('li:not(.chosen)', 'click', function () {
  //     $(this).addClass('chosen').siblings().removeClass('chosen')
  //       .parents('.wrap-myvertical-tabs').find('.myvertical-tabs-content')
  //       .hide().eq($(this).index()).fadeIn(170);
  //   });

  // }
  $(function(){
    $('.slick-vertical').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        autoplay: true,
        
    });
  });
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '60px',
});