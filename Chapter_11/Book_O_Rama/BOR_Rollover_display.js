/*

"use strict";
$(document).ready(function() {
        // Set the default image
        $("#largeImg").attr("src", "images/marvel-thumbnail.png");
        $("#largeImg").fadeIn();

        // Function to show the large image on mouseover
        $(".thumbnail").mouseover(function() {
          $("#largeImg").attr("src", $(this).attr("src").replace("-thumbnail", ""));
          $("#largeImg").fadeIn();
        });

        // Function to hide the large image on mouseout
        $(".thumbnail").mouseout(function() {
          $("#largeImg").fadeOut();
        });
      });

*/


"use strict";
$(document).ready(function() {

$(".slider").bxSlider({
 autoControls: true,
 auto: true,
 pager: true,
 slideWidth: 600,
 mode: "fade",
 captions: true,
 speed: 1000
});


$('.slider').bxSlider({
  autoControls: true,
  auto: true,
  pager: true,
  slideWidth: 600,
  mode: 'fade',
  captions: true,
  speed: 1000
});