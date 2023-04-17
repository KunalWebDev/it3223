
/*
$(document).ready(function() {
  var btn = $(".button");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});
*/

/*

$(document).ready(function(){
  $('#slider').bxSlider({
    auto: true,
    autoControls: true,
    captions: true,
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 250,
    slideMargin: 10
  })
});

*/

$(document).ready(function(){
			// Initialize Bxslider
			var slider = $('.slider').bxSlider({
				mode: 'horizontal', // Carousel mode
				auto: false, // Auto play is disabled by default
				pager: true, // Display the pager
				controls: true, // Show the next and previous buttons
				slidesToShow: 2, // Display two slides at a time
				slideWidth: $(window).width() / 2 // Set the width of each slide to half of the viewport
			});

			// Handle play button click event
			$('#button play').click(function(){
				slider.startAuto();
			});

			// Handle pause button click event
			$('#button pause').click(function(){
				slider.stopAuto();
			});
		});