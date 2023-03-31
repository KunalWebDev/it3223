

"use strict";
$(document).ready(function() {
$("#faqs h2").click(function(evt) { $(this).toggleClass("minus"); // toggleClass must be camel case t 
  if ($(this).attr("class") !== "minus") { $(this).next().hide();
}
else {
$(this).next().show();
}
evt.preventDefault(); // cancel default action
}); // end click
$("#faqs").find("a:first").focus(); // set focus on // first <a> tag

/* test code  
$('#show-image').click(function() {
    $('#my-image').toggle();
  });
*/
$(document).ready(function() {
  // Hide all images initially
  $('.my-image').hide();
  
  // Attach click event to links
  $('.show-image').click(function() {
    // Hide all images
    $('.my-image').hide();
    
    // Get the data-images attribute value of the clicked link
    var images = $(this).data('img');
    
    // Show the images for the selected set
    $('.my-image.' + images).show();
  });
});


}); // end ready

