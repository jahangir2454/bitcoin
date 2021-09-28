$(function () {
	"use strict";


// home page2  banner slider
$('#hero').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	arrows:false,
	fade: true,
  cssEase: 'linear'
  });

// infinites js
$('.scroll2').infiniteslide({
	speed: 100,
	direction: 'left'
});


// team slider
$('.team-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	 autoplay: true,
	 arrows:false,
	autoplaySpeed: 2000,
	centerMode: true,
	centerPadding: '0px',
  });






// preloder
$(window).load(function() {
	//$("#loading").delay(2000).fadeOut(500);
	$("#loading").fadeOut(1000);
})

// team part js
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	 asNavFor: '.slider-nav',
	 dotsClass:'banner-dots'
  });
  $('.slider-nav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	autoplaySpeed: 2000,
	centerMode: true,
	focusOnSelect: true,
	centerPadding: '0px',
	arrows:false,
	dotsClass:'banner-dots'
  });

// home page post part js
$('.post-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	centerMode: true,
	centerPadding: '0px',
	arrows:false,
  });


// // scrollup
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-double-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

});    
