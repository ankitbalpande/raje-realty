AOS.init({

  duration: 600,
  delay:500,
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
};

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
};

$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 86){
      $("header").addClass("shrink");
    }
    else
    {
        $("header").removeClass("shrink");
    }
});

var swiper = new Swiper(".trusted", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    300:{
      slidesPerView: 1,
      spaceBetween: 5,
    },
    400:{
      slidesPerView: 1.5,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,

    },
    1024: {
      slidesPerView: 5,

    },
  },
});

$(document).ready(function(){
  $('#testimonials').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,

  responsive:{
      10:{
          items:1
      },
  },

  })
  $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
})

$(document).ready(function(){
  $('#projects').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    responsive:{
      10:{
          items:1
      },
    },    
  })
  $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
})

var swiper = new Swiper("#Projects", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
          },
      },
  });

  var swiper = new Swiper("#testimonials-slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
  var swiper = new Swiper("#testimonials-blog", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 965.5333251953125) {
      $(".horizontal-top-fix").addClass("sticky-section");
      console.log('check');
    } else {
      $(".horizontal-top-fix").removeClass("sticky-section");
      console.log('no check');

    }
  });


  // //CODE UPDATE PANDING
  //   $(window).scroll(function() {
  //   // if ($(window).scrollTop() > 750) {
  //      if($(window).scrollTop() < 600) {
  //       // $(".contact-form").removeClass("contact-form-stop");
  //       console.log('no check');
  //       $(".contact-form").css('position','absolute');
  //       $('.contact-form')[0].style.cssText += 'top:0px !important;';
  //       $('.contact-form')[0].style.cssText += 'width: 93% !important;';
  //     }
  //     else if ($(window).scrollTop() > 750 && $(window).scrollTop() < 1581) {

      
  //     // $(".contact-form").addClass("contact-form-stop");
  //     $(".contact-form").css('position','fixed');
  //     $(".contact-form").css('top','120px');
  //     $('.contact-form')[0].style.cssText += 'width: 27.7% !important;';
  //     console.log('check');
  //     console.log($(window).scrollTop());
  //   }else if($(window).scrollTop() > 1400) {
  //     // $(".contact-form").removeClass("contact-form-stop");
  //     console.log('no check');
  //     $(".contact-form").css('position','absolute');
  //    // $(".contact-form").css('','');
  //    $('.contact-form')[0].style.cssText += 'top:auto !important;';
  //     $('.contact-form')[0].style.cssText += 'bottom:105px !important;';
  //     $('.contact-form')[0].style.cssText += 'width: 93% !important;';
  //   }else if($(window).scrollTop() > 1682) {
  //     // $(".contact-form").removeClass("contact-form-stop");
  //     console.log('no check');
  //     $(".contact-form").css('position','absolute');
  //    // $(".contact-form").css('','');
  //    $('.contact-form')[0].style.cssText += 'top:auto !important;';
  //     $('.contact-form')[0].style.cssText += 'bottom:105px !important;';
  //     $('.contact-form')[0].style.cssText += 'width: 93% !important;';
  //   }
  // });
  


  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var footerHeight = $("footer").outerHeight();
  
    if (scrollPosition < 740) {

      if(window.innerWidth < 992){

        $(".contact-form").css({
          position: 'fixed',
          top: '120px',
          width: '32.7%',
        });


      }else{

      
      // If the scroll position is less than 600 pixels
      $(".contact-form").css({
        position: 'absolute',
        top: '0px',
      });
      $('.contact-form')[0].style.cssText += 'width: 92% !important;';
    }

      // 750
    } else if (scrollPosition > 740 && scrollPosition < (documentHeight - windowHeight - footerHeight)) {
      // If the scroll position is between 750 pixels and above the footer
      // $(".contact-form").css({
      //   position: 'fixed',
      //   top: '120px',
      //   width: '27.7%',
      // }).css('width', '27.7% !important');

      if(window.innerWidth < 992){

    $(".contact-form").css({
        position: 'fixed',
        top: '120px',
        width: '32.7%',
      });


      }else{
            $(".contact-form").css('position','fixed');
            $(".contact-form").css('top','120px');
            $('.contact-form')[0].style.cssText += 'width: 28.3% !important;';
      }

          } else {

            if(window.innerWidth < 992){

              $(".contact-form").css({
                position: 'fixed',
                top: '120px',
                width: '32.7%',
              });
      
      
            }else{

      // If the scroll position is at or below the footer
      $(".contact-form").css({
        position: 'absolute',
        top: 'auto',
        bottom: '0px',
      });
      $('.contact-form')[0].style.cssText += 'width: 93% !important;';
    }

    }
   
  });
  



  var items = $(".list-wrapper .gallery-list-item");
  var numItems = items.length;
  var perPage = 6;

  items.slice(perPage).hide();

  $('#pagination-container').pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
          var showFrom = perPage * (pageNumber - 1);
          var showTo = showFrom + perPage;
          items.hide().slice(showFrom, showTo).show();
      }
  });






$(function(){
  $('.modal-project-btn').click(function(){
    $('.active-modal').modal('show');
})

$('.back-button').click(function(){
    $('.modal').modal('hide');
})
});

$("ul.nav-tabs a").click(function (e) {
  e.preventDefault();  
    $(this).tab('show');
});






$(document).ready(function() {
  $('.image').click(function() {
    $('#exampleModal_image').modal('show');
    var path = $(this).data('path');
      $('.modal_image').attr('src', path);
  });
});









