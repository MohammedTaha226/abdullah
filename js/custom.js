$(function(){

	new WOW().init();
	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 100) {
			
			
			$(".header").addClass("HeaderFixed");
						
		} else {
			
			$(".header").removeClass("HeaderFixed");
		}
		
	});

	$.scrollIt({topOffset:-90});
	

	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	

	$(".closeX,.BgClose,.menuMobile .menuContent .menuRes li .link").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	$(".menuMobile .menuContent .menuRes li a").click(function (){
		
		
		$(this).siblings().slideToggle();
		
	});

	

	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			$('.active-slide').removeClass('active-slide');
			$('.the-slider-inner > li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
			$(".fade-In").addClass("animated fadeIn");
			$(".fade-In-Down").addClass("animated fadeInDown");
			$(".fade-In-DownBig").addClass("animated fadeInDownBig");
			$(".fade-In-Left").addClass("animated fadeInLeft");
			$(".fade-In-LeftBig").addClass("animated fadeInLeftBig");
			$(".fade-In-Right").addClass("animated fadeInRight");
			$(".fade-In-RightBig").addClass("animated fadeInRightBig");
			$(".fade-In-Up").addClass("animated fadeInUp");
			$(".fade-In-UpBig").addClass("animated fadeInUpBig");
		},
		onSlideBefore: function () {
			$(".fade-In").removeClass("animated fadeIn");
			$(".fade-In-Down").removeClass("animated fadeInDown");
			$(".fade-In-DownBig").removeClass("animated fadeInDownBig");
			$(".fade-In-Left").removeClass("animated fadeInLeft");
			$(".fade-In-LeftBig").removeClass("animated fadeInLeftBig");
			$(".fade-In-Right").removeClass("animated fadeInRight");
			$(".fade-In-RightBig").removeClass("animated fadeInRightBig");
			$(".fade-In-Up").removeClass("animated fadeInUp");
			$(".fade-In-UpBig").removeClass("animated fadeInUpBig");
		},
		onSliderLoad: function () {
			$('.the-slider-inner > li').eq(1).addClass('active-slide');
		}
	});
	
	

	/****************************************************************************/
		
	var lFollowX = 0,
	    lFollowY = 0,
	    x = 0,
	    y = 0,
	    friction = 1 / 30;
	
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
	
	  $('.bgMove').css({
	    '-webit-transform': translate,
	    '-moz-transform': translate,
	    'transform': translate
	  });
	
	  window.requestAnimationFrame(moveBackground);
	}
	
	$(window).on('mousemove click', function(e) {
	
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (10 * lMouseY) / 100;
	
	});
	
	moveBackground();
	/****************************************************************************/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
