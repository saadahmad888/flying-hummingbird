$(document).ready(function() {
  var owl = $('#main-meal-slider');
  owl.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: false,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      dots: false,
      navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1,
          }
      }
  });

  $('#main-meal-slider').on('translate.owl.carousel', function(e) {
    var index = e.item.index;
    $('.content-box').removeClass('animate__animated animate__bounceInRight');
    $('.content-box').eq(index).addClass('animate__animated animate__bounceInRight');
    $('.img-box').removeClass('animate__animated animate__bounceInUp');
    $('.img-box').eq(index).addClass('animate__animated animate__bounceInUp');
  });
});


// $(document).ready(function(){
//   var owl = $('#main-meal-slider');
//   var currentSlideIndex = 0;

//   owl.owlCarousel({
//       loop: true,
//       margin: 0,
//       nav: true,
//       autoplay: false,
//       autoplayTimeout: 1000,
//       autoplayHoverPause: true,
//       animateOut: 'fadeOut',
//       dots: false,
//       navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
//       responsive: {
//           0: {
//               items: 1
//           },
//           600: {
//               items: 1
//           },
//           1000: {
//               items: 1,
//           }
//       }
//   });

//   owl.on('changed.owl.carousel', function(event) {
//       var currentSlide = event.item.index;
//       resetAnimations();
//       applyAnimations(currentSlide);
//   });

//   function applyAnimations(slideIndex) {
//       // Reset animations
//       $('[id^="imageBox"]').removeClass('animate__animated animate__bounceInUp');
//       $('[id^="contentBox"]').removeClass('animate__animated animate__bounceInRight');
      
//       // Apply animations based on slide index
//       $('#imageBox' + (slideIndex + 1)).addClass('animate__animated animate__bounceInUp');
//       $('#contentBox' + (slideIndex + 1)).addClass('animate__animated animate__bounceInRight');
//   }

//   function resetAnimations() {
//       // Remove all animation classes
//       $('[id^="imageBox"]').removeClass('animate__animated animate__bounceInUp');
//       $('[id^="contentBox"]').removeClass('animate__animated animate__bounceInRight');
//   }
// });