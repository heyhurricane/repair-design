// document.addEventListener("DOMContentLoaded", function(event) {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   

//   const switchModal = () => { 
//     modal.classList.toggle('modal--visible');
//     modalActive = !(modalActive);
//   };

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

//   document.addEventListener('click', (event) => {
//     if (event.target == modal) {
//       switchModal();
//     }
//   });

//   document.addEventListener('keydown', (event) => {
//     if (event.key=='Escape' && (modalActive)) {
//       switchModal();
//     }
//   });
// });

$(document).ready(function () {
  var modalActive = false;
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
  // $( "#target" ).keyup(function() {
  //   alert( "Handler for .keyup() called." );
  // });
  $(document).ready(function(){   
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
});
});