const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', ()=>{
        menu.classList.add('active');
    });

    close.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });

const counted    = document.querySelectorAll('.skill__progress-counted'),
        background = document.querySelectorAll('.background');

        counted.forEach((item, i) => {
            background[i].style.width = item.innerHTML;
        });



(function($) {
    $(function() {
        function validateForms(form){
            $(form).validate({
              rules: {
                name: {
                  required: true,
                  minlength: 4
                },
                email: {
                  required: true,
                  email: true
                },
                text:{
                    required: true,
                    minlength: 4
                }
              },
              messages: {
                name: {
                    required: "Будь ласка, вкажіть своє ім'я",
                    minlength: jQuery.validator.format("Потрібно принаймні {0} символа!")
                },
                email: {
                  required: "Нам потрібна ваша електронна адреса, щоб зв'язатися з вами",
                  email: "Будь ласка, вкажіть свою електронну адресу"
                },
                text: {
                    required: "Будь ласка, вкажіть повідомлення",
                    minlength: jQuery.validator.format("Потрібно принаймні {0} символа!")
                }
              }
          });
        };
  
        validateForms('#contacts__form');        
    });

    $(window).scroll(function(){
      if($(this).scrollTop()>1000){
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
        }, 500, function(){
          window.location.hash = hash;
        });
      }
    });

})(jQuery);