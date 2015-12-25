function fitImageToHolder () {
	$('.image-holder.fit').each(function () {
		var $holder = $(this);
		var $image = $holder.find('img');
		var image = $image.get(0);
		var holderWidth = $holder.width(),
			holderHeight = $holder.height(),
			imageWidth = $image.width(),
			imageHeight = $image.height();
			// imageWidth = image.naturalWidth,
			// imageHeight = image.naturalHeight;
		function fitImg (img) {
			if (holderWidth - imageWidth < holderHeight - imageHeight) {
				$(img).css({
					'width': 'auto',
					'height': '100%'
				});
			} else {
				$(img).css({
					'width': '100%',
					'height': 'auto'
				});
			}
		}
		if (imageWidth) {
			fitImg (image);
		} else {
			$image.on('load', function () {
				imageWidth = this.naturalWidth;
				imageHeight = this.naturalHeight;
				fitImg (this);
			});
		}
	});
}
fitImageToHolder ();
function fitOnResize () {
	clearTimeout(fitImageToHolder.timeoutId);
	fitImageToHolder.timeoutId = setTimeout(fitImageToHolder, 500);
}

$(window).on('resize', function () {
	$('.mobile-top-navbar').css({
		'min-height': $('body').height()
	});
	fitOnResize ();
});

/* NEW from Kolya [arrow-show-hide] */
$('.side-label, #arrow-hide').on('click', function () {
	$('.modal-dialog .side-bar #arrow-show').toggleClass('to-show').toggleClass('to-hide');
	$('.modal-dialog .side-bar #arrow-hide').toggleClass('to-show').toggleClass('to-hide');					
	$('.modal-dialog .side-bar .bx-wrapper').toggleClass('to-hide');

	// Add text
	if ($('.modal-dialog .side-bar #arrow-hide').hasClass('to-hide')) {
		// $(this).children('arrow-hide').children('span').text('Ð Ð°Ð·Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ');
		$('.modal-dialog .side-bar #arrow-hide').children('span').text('Развернуть');
	} else {
		// $(this).children('arrow-hide').children('span').text('Ð¡Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ');
		$('.modal-dialog .side-bar #arrow-hide').children('span').text('Свернуть');
	}
});
/* NEW from Kolya [social-block-hide-in-modal-window] */
$('.modal-dialog .to-hide-social').on('click', function() {
	$(this).closest('.social-counters').toggleClass('to-hide');
});




///////////////SLIDERS///////////////////////
$('.semislider').bxSlider({
  auto: true,
  autoControls: true
});
$('.slider10').bxSlider({
	slideWidth: 263,
	minSlides: 1,
	maxSlides: 2,
	slideMargin: 0
});
$('#top-navbar .modal-link').on('click', function () {
	closeAllModals ();
	$(this).closest('.dropdown').toggleClass('active');
});
$('#show-open').on('click', function () {
	$(this).closest('#tr-1').toggleClass('open');
});
$('#show-close').on('click', function () {
	$(this).closest('#tr-1').toggleClass('open');
});
$('#show-open2').on('click', function () {
	$('#tr-2').toggleClass('open');
	$('#tr-3').toggleClass('open');
});
$('#show-close2').on('click', function () {
	$('#tr-2').toggleClass('open');
	$('#tr-3').toggleClass('open');
});
$('#md-show4').on('click', function () {
	$('#md-open4').toggleClass('open');
	closeAllModals ();
	$(this).closest('.dropdown').toggleClass('active');
});
$('#md-show6').on('click', function () {
	$('#md-open4').toggleClass('open');
	closeAllModals ();
	$(this).closest('.dropdown').toggleClass('active');
});
$('#md-show5').on('click', function () {
	$('#md-open5').toggleClass('open');
	closeAllModals ();
	$(this).closest('.dropdown').toggleClass('active');
});
///////Open,Close md-show9///////////////
$('.md-show9').on('click', function (e) {
	e.preventDefault ();
	console.log($('#md-open9').get(0))
	$('#md-open9').toggleClass('open');
	$('#mobile-shadow').toggleClass('active');
});
$('#mobile-shadow').on('click', function (e) {
	e.preventDefault ();
	console.log($('#md-open9').get(0))
	$('#md-open9').removeClass('open');
	$('#mobile-shadow').removeClass('active');
});
$('#mymodal').one('shown.bs.modal', function (e) {
	e.stopPropagation();
	// if ($(window).width() < 1000) {
	// 	window.location.href = "test";
	// };
	$('#mymodal .bxslider').bxSlider({
	  pagerCustom: '#bx-pager'
	});
	$('.slider1').bxSlider({
		slideWidth: 280,
		minSlides: 2,
		maxSlides: 3,
		slideMargin: 0
		});
	  $('.slider8').bxSlider({
		mode: 'vertical',
		slideWidth: 300,
		minSlides: 2,
		slideMargin: 10
	  });
	  $('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 104,
		itemMargin: 6,
		asNavFor: '#slider'
	  });
	 
	  $('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	  });
});
$('#mymodal').on('hide.bs.modal', function (e) {
	closeAllModals ();
});
function closeAllModals () {
	$('.modal-link').each(function () {
		$(this).parent().removeClass('active');
	});
}