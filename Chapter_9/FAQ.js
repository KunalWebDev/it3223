"use strict";
$(document).ready(function() {
	$("#faqs h2").click(function(evt) {
		$(this).toggleClass("minus"); // toggleClass must be camel case to execute function
		if ($(this).attr("class") !== "minus") {
			$(this).next().hide();
		}	
		else {
			$(this).next().show();
		}	
		evt.preventDefault(); // cancel default action
	 }); // end click
	 $("#faqs").find("a:first").focus(); // set focus on 
	  									 // first <a> tag
}); // end ready	