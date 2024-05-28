(function ($) {
 "use strict";
    
	//---------------------------------------------
	//Nivo slider
	//---------------------------------------------
	$('#ensign-nivoslider').nivoSlider({
		effect: 'random',                // Animation effect, 'random' means randomly chosen animation effect
		slices: 15,                      // Number of slices, used for certain animation effects like slice
		boxCols: 8,                      // Number of box columns, used for box animation effects
		boxRows: 4,                      // Number of box rows, used for box animation effects
		animSpeed: 700,                  // Animation speed, in milliseconds
		pauseTime: 9000,                 // Time each slide is shown, in milliseconds
		startSlide: 0,                   // Starting slide index, 0 means the first slide
		directionNav: true,              // Whether to display left and right navigation arrows
		controlNavThumbs: false,         // Whether to display thumbnail navigation
		pauseOnHover: false,             // Whether to pause the slider when hovering
		controlNav: true,                // Whether to display navigation controls (dots navigation)
		prevText: '<i class="zmdi zmdi-chevron-left"></i>', // Custom HTML content for the previous button
		nextText: '<i class="zmdi zmdi-chevron-right"></i>' // Custom HTML content for the next button
	});
	

})(jQuery); 