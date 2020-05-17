$(document).ready(function () {
  var modalActive = false;
  var stepBtn = $('.swiper-menu__item').first();
  stepBtn.toggleClass('step--active');
  

  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn =  $('.modal__close');
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    modalActive = !(modalActive);
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    modalActive = !(modalActive);
  });
  $(document).keydown(function(event) { 
    if (event.key=='Escape' && (modalActive)) { 
      modal.toggleClass('modal--visible');
      modalActive = !(modalActive);
    }
  });
  $(document).on('click', function(event) {
    if ($(event.target).is(modal)) {
      modal.toggleClass('modal--visible');
      modalActive = !(modalActive);
    }
  });

  $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
          $('.scroll-up').fadeIn();
      } else {
          $('.scroll-up').fadeOut();
      }
  });
  $('.scroll-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 900);
      return false;
  });

  var mySwiper = new Swiper ('.stepswipe-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.stepswipe-pagination',
      type: 'bullets', 
    },
    navigation: {
      nextEl: '.stepswipe-button-next',
      prevEl: '.stepswipe-button-prev',
    },
  });

  var mySwiper2 = new Swiper ('.projectswipe-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.projectswipe-pagination',
      type: 'bullets', 
    },
    navigation: {
      nextEl: '.projectswipe-button-next',
      prevEl: '.projectswipe-button-prev',
    },
  });

  $('.stepswipe-button-prev').on('click', function() {
    console.log(mySwiper[0].realIndex);
    stepBtn.toggleClass('step--active');
    const index = mySwiper[0].realIndex;
    stepBtn = $('.swiper-menu__item').slice(index, index+1);
    console.log(stepBtn);
    stepBtn.toggleClass('step--active');

  });

  $('.stepswipe-button-next').on('click', function() {
    console.log(mySwiper[0].realIndex);
    stepBtn.toggleClass('step--active');
    const index = mySwiper[0].realIndex;
    stepBtn = $('.swiper-menu__item').slice(index, index+1);
    console.log(stepBtn);
    stepBtn.toggleClass('step--active');

  });
  $('.swiper-menu').on('click',  '.swiper-menu__item', function() {
    // console.log(stepBtn);
    stepBtn.toggleClass('step--active');
    const index = $(this).data('index');
    mySwiper[0].slideTo(index);
    mySwiper[1].slideTo(index);
    stepBtn = $(this);
    console.log($(this));
    stepBtn.toggleClass('step--active');
 });

  var next = $('.projectswipe-button-next');
  var prev = $('.projectswipe-button-prev');
  var next2 = $('.stepswipe-button-next');
  var prev2 = $('.stepswipe-button-prev');
  var bullets = $('.projectswipe-pagination');
  var bullets2 = $('.stepswipe-pagination');

  bullets.css('left', prev.width()+18);
  bullets2.css('left', prev2.width()+18);
  next.css('left', prev.width()+18+bullets.width()+18);
  next2.css('left', prev2.width()+18+bullets2.width()+18);

  $(function(){

    $('.scroll-down').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#project').offset().top }, 900);
      e.preventDefault();
    });
    
  });


});