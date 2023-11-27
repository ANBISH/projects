const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: false,
    speed: 1200,
    autoHeight: true
  });

  document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click',function () {
    slider.goTo('next');
  });
  (function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass
          ('catalog__content_active').eq($(this).index()).addClass
          ('catalog__content_active');
      });

      function toggleSlide(item){
        $(item).each(function(i){
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });
      };
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

      //modal

      $('[data-modal=consultation').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click',function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });
      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        })
      });

      //validate

      function validateForms(form){
          $(form).validate({
            rules: {
              name: {
                required: true,
                minlength: 4
              },
              phone: "required",
              email: {
                required: true,
                email: true
              }          
            },
            messages: {
              name: {
                  required: "Будь ласка, вкажіть своє ім'я",
                  minlength: jQuery.validator.format("Потрібно принаймні {0} символа!")
              },
              phone: "Будь ласка, вкажіть свій номер телефона",
              email: {
                required: "Нам потрібна ваша електронна адреса, щоб зв'язатися з вами",
                email: "Будь ласка, вкажіть свою електронну адресу, вона має бути у форматі name@domain.com"
              }
            }
        });
      };

      validateForms('#consultation-form');
      validateForms('#order form');
      validateForms('#consultation form');

      $('input[name=phone').mask("+380 (999) 99-99-99");


      //scroll

      $(window).scroll(function(){
        if($(this).scrollTop()>1600){
          $('.pageup').fadeIn();
        }else{
          $('.pageup').fadeOut();
        }
      });

      $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();   
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 2, function(){
            window.location.hash = hash;
          });
        }
      });
      
    });
})(jQuery);
