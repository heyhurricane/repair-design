$(document).ready(function () {
  var modalActive = false;
  var messageActive = false;
  var stepBtn = $('.swiper-menu__item').first();
  stepBtn.toggleClass('step--active');
  
  var styleBtn = $('.stylename').first();
  styleBtn.toggleClass('stylename--active');

  // Сообщение об успешной отпрвке формы
  var modalMessage = $('.message');

  // Модальное окно
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
    $('.modal__form')[0].reset();
  });
  $(document).keydown(function(event) { 
    if (event.key=='Escape' && (modalActive)) { 
      modal.toggleClass('modal--visible');
      modalActive = !(modalActive);
      $('.modal__form')[0].reset();
    }
    else {
      if (event.key=='Escape' && (messageActive)) { 
        modalMessage.toggleClass('message--visible');
        messageActive = !(messageActive);
      }

    }
  });

  $(document).on('click', function(event) {
    if ($(event.target).is(modal)) {
      modal.toggleClass('modal--visible');
      modalActive = !(modalActive);
      $('.modal__form')[0].reset();
    }
    else {
      if ($(event.target).is(modalMessage)) {
        modalMessage.toggleClass('message--visible');
        messageActive = !(messageActive);
      }
    }
  });

  // Кнопка Наверх и Анимация
  $(window).scroll(function () {
    var windowHeight = $(window).height();
      if ($(this).scrollTop() > 0) {
          $('.scroll-up').fadeIn();
      } else {
          $('.scroll-up').fadeOut();
      }
      $('.footer__title').each(function() {
        var self = $(this),
        height = self.offset().top + self.height();
        if ($(document).scrollTop() + windowHeight >= height) {
          self.addClass('animated');
        }
      });

  });

  $('.scroll-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 900);
      return false;
  });

  // Кнопка Листайте вниз
  $(function(){
    $('.scroll-down').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 900);
      e.preventDefault();
    });
    $('.nav__item').on('click', function(e){
      var section = $(this).data('index');
      console.log(section);
      $('html,body').stop().animate({ scrollTop: $('#'+section).offset().top }, 900);
      e.preventDefault();
    });
  });


  $('.message__button').click(function () {
    modalMessage.toggleClass('message--visible');
    messageActive = !(messageActive);
});

  // Слайдер в секции 6 Шагов
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

  // Слайдер в секции Проекты
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

  // Слайдер в секции Стили
  var mySwiper3 = new Swiper ('.stylesswipe-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    navigation: {
      nextEl: '.stylesswipe-button-next',
      prevEl: '.stylesswipe-button-prev',
    },
  });

  // Кнопки вперёд/назад в слайдере в секции 6 Шагов
  $('.stepswipe-button-prev').on('click', function() {
    stepBtn.toggleClass('step--active');
    const index = mySwiper[0].realIndex;
    stepBtn = $('.swiper-menu__item').slice(index, index+1);
    stepBtn.toggleClass('step--active');

  });

  $('.stepswipe-button-next').on('click', function() {
    stepBtn.toggleClass('step--active');
    const index = mySwiper[0].realIndex;
    stepBtn = $('.swiper-menu__item').slice(index, index+1);
    stepBtn.toggleClass('step--active');

  });
  // Переключение слайдов в секции 6 Шагов при нажатии на меню над слайдером
  $('.swiper-menu').on('click',  '.swiper-menu__item', function() {
    stepBtn.toggleClass('step--active');
    const index = $(this).data('index');
    mySwiper[0].slideTo(index);
    mySwiper[1].slideTo(index);
    stepBtn = $(this);
    stepBtn.toggleClass('step--active');
 });

  //  Навигация и пагинация для слайдера в Проектах
  var next = $('.projectswipe-button-next');
  var prev = $('.projectswipe-button-prev');
  var bullets = $('.projectswipe-pagination');
  bullets.css('left', prev.width()+18);
  next.css('left', prev.width()+18+bullets.width()+18);
  //  Навигация и пагинация для слайдера в 6 Шагах
  var next2 = $('.stepswipe-button-next');
  var prev2 = $('.stepswipe-button-prev');
  var bullets2 = $('.stepswipe-pagination');
  bullets2.css('left', prev2.width()+18);
  next2.css('left', prev2.width()+18+bullets2.width()+18);


  new WOW().init();

    // Валидация форм

  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement : 'div',
    ignore: ':hidden:not(:checkbox)',
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    rules: {
      // simple rule, converted to {required:true}
      nameUser: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phoneUser: {
        required: true,
        minlength: 17,
        maxlength: 17
      },
      // compound rule
      emailUser: {
        required: true,
        email: true
      },
      checkUser: "required"
    },
    messages: {
      nameUser: {
        required: "Имя обязательно",
        minlength: 'Имя не короче 2 символов',
        maxlength: 'Имя не длиннее 15 символов'
      },
      phoneUser: {
        required: "Телефон обязателен",
        minlength: 'Телефон должен содержать 10 символов',
        maxlength: 'Телефон должен содержать 10 символов'
      },
      emailUser: {
        required: "Обязательно укажите email",
        email: "Введите в формте: name@domain.com"
      },
      checkUser: "Согласие с обработкой данных обязательно"
    },
    submitHandler: function(form) {
      // $(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "sendmodal.php",
        data: $(form).serialize(),
        success: function (response) {
          // alert("Форма отправлена! Наш менеджер свяжется с Вами в течение 15 минут");
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalMessage.toggleClass('message--visible');
          messageActive = !(messageActive);
          modalActive = !(modalActive);

        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }
  });

  $('.measure__form').validate({
    errorClass: "invalid",
    errorElement : 'div',
    ignore: ':hidden:not(:checkbox)',
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    rules: {
      // simple rule, converted to {required:true}
      measurenameUser: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      measurephoneUser: {
        required: true,
        minlength: 17,
        maxlength: 17
      },
      // compound rule
      measureemailUser: {
        required: true,
        email: true
      },
      measurecheckUser: "required"
    },
    messages: {
      measurenameUser: {
        required: "Имя обязательно",
        minlength: 'Имя не короче 2 символов',
        maxlength: 'Имя не длиннее 15 символов'
      },
      measurephoneUser: {
        required: "Телефон обязателен",
        minlength: 'Телефон должен содержать 10 символов',
        maxlength: 'Телефон должен содержать 10 символов'
      },
      measureemailUser: {
        required: "Обязательно укажите email",
        email: "Введите в формте: name@domain.com"
      },
      measurecheckUser: "Согласие с обработкой данных обязательно"
    },
    submitHandler: function(form) {
      // $(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "sendmeasure.php",
        data: $(form).serialize(),
        success: function (response) {
          // alert("Форма отправлена! Наш менеджер свяжется с Вами в течение 15 минут");
          $(form)[0].reset();
          modalMessage.toggleClass('message--visible');
          messageActive = !(messageActive);
        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement : 'div',
    ignore: ':hidden:not(:checkbox)',
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    rules: {
      // simple rule, converted to {required:true}
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true,
        minlength: 17,
        maxlength: 17
      },
      userQuestion: "required",
      usercheck: "required"
    },
    messages: {
      username: {
        required: "Имя обязательно",
        minlength: 'Имя не короче 2 символов',
        maxlength: 'Имя не длиннее 15 символов'
      },
      userphone: {
        required: "Телефон обязателен",
        minlength: 'Телефон должен содержать 10 символов',
        maxlength: 'Телефон должен содержать 10 символов'
      },
      userQuestion: "Если Вы хотите задать вопрос, обязательно его введите",
      usercheck: "Согласие с обработкой данных обязательно"
    },
    submitHandler: function(form) {
      // $(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "sendfooter.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalMessage.toggleClass('message--visible');
          messageActive = !(messageActive);
        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }
    
    
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement : 'div',
    ignore: ':hidden:not(:checkbox)',
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17,
        maxlength: 17
      },
      userСheck: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: 'Имя не короче 2 символов',
        maxlength: 'Имя не длиннее 15 символов'
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: 'Телефон должен содержать 10 символов',
        maxlength: 'Телефон должен содержать 10 символов'
      },
      userСheck: "Согласие с обработкой данных обязательно"
    },
    submitHandler: function(form) {
      // $(form).ajaxSubmit();
      $.ajax({
        type: "POST",
        url: "sendcontrol.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalMessage.toggleClass('message--visible');
          messageActive = !(messageActive);
        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }
  });
  // Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  // карта

//Переменная для включения/отключения индикатора загрузки
// var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором map


  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  function init() {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap.behaviors.disable('scrollZoom');
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Наш офис'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/mappin.png',
            // Размеры метки.
            iconImageSize: [35, 35],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);    
    var layer = myMap.layers.get(0).get(0);
 
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      // spinner.removeClass('is-active');
    });
  };


// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 


// Основная функция, которая проверяет когда мы навели на блок с классом ymap-container
  var ymap = function() {
  $(window).scroll(function () {
      $('.ymap-container').each(function() {
        var windowHeight = $(window).height();
        var self = $(this),
        height = self.offset().top + self.height();
        if ($(document).scrollTop() + windowHeight >= height) {
          if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
          // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true; 
          console.log('зашёл2');
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function() {
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
            });  
          }
        };
    });
  });
}


  // $('.ymap-container').mouseenter(function(){
  //     if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	//   	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
  //       check_if_load = true; 
  //       console.log('зашёл2');
	// 	// Показываем индикатор загрузки до тех пор, пока карта не загрузится
  //       // spinner.addClass('is-active');
 
	// 	// Загружаем API Яндекс.Карт
  //       loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
  //          // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
  //          ymaps.load(init);
  //       });                
  //     }
  //   }
  // );  
// }
 
$(function() {
  ymap();
});

  // Переключение между стилями интерьера

  // Переключение слайдов в секции 6 Шагов при нажатии на меню над слайдером
  $('.styles__list').on('click',  '.stylename', function() {
    styleBtn.toggleClass('stylename--active');
    const ID = $(this).attr('id');
    // mySwiper[0].slideTo(index);
    // mySwiper[1].slideTo(index);
    styleBtn = $(this);
    styleBtn.toggleClass('stylename--active');

    switch (ID) {
      case '1':
        $(".styles__image1").attr("src", "img/styles/american-classic/amclassic1.jpg");
        $(".styles__image2").attr("src", "img/styles/american-classic/amclassic2.jpg");
        $(".styles__image3").attr("src", "img/styles/american-classic/amclassic3.jpg");
        $(".styles__image4").attr("src", "img/styles/american-classic/amclassic4.jpg");
        break;
      case '2':
        $(".styles__image1").attr("src", "img/styles/ampir/ampir1.jpg");
        $(".styles__image2").attr("src", "img/styles/ampir/ampir2.jpg");
        $(".styles__image3").attr("src", "img/styles/ampir/ampir3.jpg");
        $(".styles__image4").attr("src", "img/styles/ampir/ampir4.jpg");
        break;
      case '3':
        $(".styles__image1").attr("src", "img/styles/classic/classic1.jpg");
        $(".styles__image2").attr("src", "img/styles/classic/classic2.jpg");
        $(".styles__image3").attr("src", "img/styles/classic/classic3.jpg");
        $(".styles__image4").attr("src", "img/styles/classic/classic4.jpg");
        break;
      case '4':
        $(".styles__image1").attr("src", "img/styles/loft/loft1.jpg");
        $(".styles__image2").attr("src", "img/styles/loft/loft2.jpg");
        $(".styles__image3").attr("src", "img/styles/loft/loft3.jpg");
        $(".styles__image4").attr("src", "img/styles/loft/loft4.jpg");
        break;
      case '5':
        $(".styles__image1").attr("src", "img/styles/minimalism/min1.jpg");
        $(".styles__image2").attr("src", "img/styles/minimalism/min2.jpg");
        $(".styles__image3").attr("src", "img/styles/minimalism/min3.jpg");
        $(".styles__image4").attr("src", "img/styles/minimalism/min4.jpg");
        break;
      case '6':
        $(".styles__image1").attr("src", "img/styles/provence/provence1.jpg");
        $(".styles__image2").attr("src", "img/styles/provence/provence2.jpg");
        $(".styles__image3").attr("src", "img/styles/provence/provence3.jpg");
        $(".styles__image4").attr("src", "img/styles/provence/provence4.jpg");
        break;
      case '7':
        $(".styles__image1").attr("src", "img/styles/romantic/romantic1.jpg");
        $(".styles__image2").attr("src", "img/styles/romantic/romantic2.jpg");
        $(".styles__image3").attr("src", "img/styles/romantic/romantic3.jpg");
        $(".styles__image4").attr("src", "img/styles/romantic/romantic4.jpg");
        break;
      case '8':
        $(".styles__image1").attr("src", "img/styles/scandinavian/scandi1.jpg");
        $(".styles__image2").attr("src", "img/styles/scandinavian/scandi2.jpg");
        $(".styles__image3").attr("src", "img/styles/scandinavian/scandi3.jpg");
        $(".styles__image4").attr("src", "img/styles/scandinavian/scandi4.jpg");
        break;
      case '9':
        $(".styles__image1").attr("src", "img/styles/mediterranean/med1.jpg");
        $(".styles__image2").attr("src", "img/styles/mediterranean/med2.jpg");
        $(".styles__image3").attr("src", "img/styles/mediterranean/med3.jpg");
        $(".styles__image4").attr("src", "img/styles/mediterranean/med4.jpg");
        break;
      case '10':
        $(".styles__image1").attr("src", "img/styles/hightech/high1.jpg");
        $(".styles__image2").attr("src", "img/styles/hightech/high2.jpg");
        $(".styles__image3").attr("src", "img/styles/hightech/high3.jpg");
        $(".styles__image4").attr("src", "img/styles/hightech/high4.jpg");
        break;
      case '11':
        $(".styles__image1").attr("src", "img/styles/eclecticism/eclectic1.jpg");
        $(".styles__image2").attr("src", "img/styles/eclecticism/eclectic2.jpg");
        $(".styles__image3").attr("src", "img/styles/eclecticism/eclectic3.jpg");
        $(".styles__image4").attr("src", "img/styles/eclecticism/eclectic4.jpg");
        break;
    }
  });

});