
/*THIS MAY OR MAY NOT WORK SIMILARY TO FAQ.js for the FAQ.html file */

/* You may want o get rid of evt */

 "use strict";
$(document).ready(function() {
	$("#image_rollovers img").each(function() {	
		var oldURL = $(this).attr("src"); //gets the src attr 
		var newURL = $(this).attr("id"); //gets the id attr

		// preload rollover image
		var rolloverImage = new Image();
		rolloverImage.src = newURL;

		//set up event handlers
		$(this).hover(
			function() {
				$(this).attr("src", newURL); // sets the src attribute
			},
			function() {
				$(this).attr("src", oldURL); // sets the src attribute
			}
		); // end hover
	}); // end each
}); //end ready 	 	







