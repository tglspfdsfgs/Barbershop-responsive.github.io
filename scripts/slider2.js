var slider2_toggle1 = document.querySelector(".slider2__toggle--1");
var slider2_toggle2 = document.querySelector(".slider2__toggle--2");
var slider2_toggle3 = document.querySelector(".slider2__toggle--3");

var item1 = document.querySelector(".slider2__item--1");
var item2 = document.querySelector(".slider2__item--2");
var item3 = document.querySelector(".slider2__item--3");

var prev = document.querySelector(".reviews__switcher--prev");
var next = document.querySelector(".reviews__switcher--next");

slider2_toggle1.addEventListener("click", function ( evt) {	
	item2.classList.remove("slider2__item--active");
	item3.classList.remove("slider2__item--active");
	item1.classList.add("slider2__item--active");

	slider2_toggle2.classList.remove("slider2__toggle--active");
	slider2_toggle3.classList.remove("slider2__toggle--active");
	slider2_toggle1.classList.add("slider2__toggle--active");
} );

slider2_toggle2.addEventListener("click", function ( evt) {	
	item3.classList.remove("slider2__item--active");
	item1.classList.remove("slider2__item--active");
	item2.classList.add("slider2__item--active");

	slider2_toggle3.classList.remove("slider2__toggle--active");
	slider2_toggle1.classList.remove("slider2__toggle--active");
	slider2_toggle2.classList.add("slider2__toggle--active");
} );

slider2_toggle3.addEventListener("click", function ( evt) {	
	item1.classList.remove("slider2__item--active");
	item2.classList.remove("slider2__item--active");
	item3.classList.add("slider2__item--active");

	slider2_toggle2.classList.remove("slider2__toggle--active");
	slider2_toggle1.classList.remove("slider2__toggle--active");
	slider2_toggle3.classList.add("slider2__toggle--active");
} );

next.addEventListener("click", function ( evt) {	
	if (item1.classList.contains("slider2__item--active")) {

		item3.classList.remove("slider2__item--active");
		item1.classList.remove("slider2__item--active");
		item2.classList.add("slider2__item--active");

		slider2_toggle3.classList.remove("slider2__toggle--active");
		slider2_toggle1.classList.remove("slider2__toggle--active");
		slider2_toggle2.classList.add("slider2__toggle--active");

	} else if (item2.classList.contains("slider2__item--active")) {

		item1.classList.remove("slider2__item--active");
		item2.classList.remove("slider2__item--active");
		item3.classList.add("slider2__item--active");

		slider2_toggle2.classList.remove("slider2__toggle--active");
		slider2_toggle1.classList.remove("slider2__toggle--active");
		slider2_toggle3.classList.add("slider2__toggle--active");

	} else if (item3.classList.contains("slider2__item--active")) {

		item2.classList.remove("slider2__item--active");
		item3.classList.remove("slider2__item--active");
		item1.classList.add("slider2__item--active");

		slider2_toggle2.classList.remove("slider2__toggle--active");
		slider2_toggle3.classList.remove("slider2__toggle--active");
		slider2_toggle1.classList.add("slider2__toggle--active");
	}
} );


prev.addEventListener("click", function ( evt) {	
	if (item1.classList.contains("slider2__item--active")) {

		item1.classList.remove("slider2__item--active");
		item2.classList.remove("slider2__item--active");
		item3.classList.add("slider2__item--active");

		slider2_toggle2.classList.remove("slider2__toggle--active");
		slider2_toggle1.classList.remove("slider2__toggle--active");
		slider2_toggle3.classList.add("slider2__toggle--active");

	} else if (item2.classList.contains("slider2__item--active")) {
		
		item2.classList.remove("slider2__item--active");
		item3.classList.remove("slider2__item--active");
		item1.classList.add("slider2__item--active");

		slider2_toggle2.classList.remove("slider2__toggle--active");
		slider2_toggle3.classList.remove("slider2__toggle--active");
		slider2_toggle1.classList.add("slider2__toggle--active");
		
	} else if (item3.classList.contains("slider2__item--active")) {

		item3.classList.remove("slider2__item--active");
		item1.classList.remove("slider2__item--active");
		item2.classList.add("slider2__item--active");

		slider2_toggle3.classList.remove("slider2__toggle--active");
		slider2_toggle1.classList.remove("slider2__toggle--active");
		slider2_toggle2.classList.add("slider2__toggle--active");

	}
} );