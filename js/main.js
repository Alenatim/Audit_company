$(function(){
	

	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

  $('.menu ul li').on('click', function(){
    $('.menu ul').slideToggle();
   })

  $('nav a').on('click', function(e){
	if(this.hash != '') {
		e.preventDefault();
		const hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 68 +'px'
		}, 800);
	}
	})

});