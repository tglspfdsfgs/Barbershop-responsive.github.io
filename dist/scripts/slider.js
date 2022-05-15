var slider_toggle1 = document.querySelector(".slider__toggle--1");
var slider_toggle2 = document.querySelector(".slider__toggle--2");
var slider_toggle3 = document.querySelector(".slider__toggle--3");

var advantages_fast = document.querySelector(".advantages__item--fast");
var advantages_cool = document.querySelector(".advantages__item--cool");
var advantages_price = document.querySelector(".advantages__item--price");


slider_toggle1.addEventListener("click", function ( evt) {	
	advantages_cool.classList.remove("slider__item--active");
	advantages_price.classList.remove("slider__item--active");
	advantages_fast.classList.add("slider__item--active");

	slider_toggle2.classList.remove("slider__toggle--active");
	slider_toggle3.classList.remove("slider__toggle--active");
	slider_toggle1.classList.add("slider__toggle--active");
} );

slider_toggle2.addEventListener("click", function ( evt) {	
	advantages_price.classList.remove("slider__item--active");
	advantages_fast.classList.remove("slider__item--active");
	advantages_cool.classList.add("slider__item--active");

	slider_toggle3.classList.remove("slider__toggle--active");
	slider_toggle1.classList.remove("slider__toggle--active");
	slider_toggle2.classList.add("slider__toggle--active");
} );

slider_toggle3.addEventListener("click", function ( evt) {	
	advantages_cool.classList.remove("slider__item--active");
	advantages_fast.classList.remove("slider__item--active");
	advantages_price.classList.add("slider__item--active");

	slider_toggle2.classList.remove("slider__toggle--active");
	slider_toggle1.classList.remove("slider__toggle--active");
	slider_toggle3.classList.add("slider__toggle--active");
} );