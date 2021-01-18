function hamburgerTransform(){
	btn = document.getElementById("hamburgerBTN");
	mobileMenu = document.getElementById("mobileMenu");
	overlay = document.getElementById("overlay");

	if( btn.classList.contains('open')){
		btn.classList.remove('open');
		mobileMenu.classList.remove('show-mobile-menu');

	} else {
		btn.classList.add('open');
		mobileMenu.classList.add('show-mobile-menu');
	}

	if( overlay.classList.contains('overlay')){
		overlay.classList.remove('overlay');
	} else {
		overlay.classList.add('overlay');
	}
}

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");

// // // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }