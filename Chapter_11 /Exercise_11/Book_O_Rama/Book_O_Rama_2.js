"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
var isValid = true;

/*REMINDER OF WHERE TO PUT ALERT TO DEBUG */
/* alert("WOOOOW");	*/


//get values for user entries
	var email = $("email_address").value;
	var email_2 = $("email_address_2").value;
	var first_name = $("first_name").value;
	var last_name = $("last_name").value;
	var state_code = $("state_code").value;
	var zip_code = $("zip_code").value;
	var email_about1 = $("email_about1").checked;
	var email_about2 = $("email_about2").checked;
	var email_about3 = $("email_about3").checked;


  	//email 

	if (email == "") {
		 
		 $("email_address").nextElementSibling.firstChild.nodeValue = "Must be a valid email address";
		 isValid = false;
	} 
	else {
			
		$("email_address").nextElementSibling.firstChild.nodeValue = "";
	}


	// email confirmation

	if (email_2 == "") {
		
		$("email_address_2").nextElementSibling.firstChild.nodeValue = "Must equal first email entry";
				isValid = false;	
	
	}		

	else {
			
		$("email_address_2").nextElementSibling.firstChild.nodeValue = "";
	
	}

	

	// first name confirmation

	if (first_name == "") {

		
		
		$("first_name").nextElementSibling.firstChild.nodeValue = "This field is required";
				isValid = false;	
	
	}		

	else {
			
		$("first_name").nextElementSibling.firstChild.nodeValue = "";
	
	}


	// last name confirmation

	if (last_name == "") {
		$("last_name").nextElementSibling.firstChild.nodeValue = "This field is required";
				isValid = false;
	}		
	else {
			
		$("last_name").nextElementSibling.firstChild.nodeValue = "";
	
	}

	// state code confirmation

	if (state_code == "") {

		
		$("state_code").nextElementSibling.firstChild.nodeValue = "Use 2-character code";
				isValid = false;	
	
	}		

	else {
			
		$("state_code").nextElementSibling.firstChild.nodeValue = "";
	
	}


	// zip code confirmation

	if (zip_code == "") {

		
		
		$("zip_code").nextElementSibling.firstChild.nodeValue = "Use 99999 format";
				isValid = false;	
	
	}		

	else {
			
		$("zip_code").nextElementSibling.firstChild.nodeValue = "";
	
	}


	if (email_about1 == false && email_about2 == false && email_about3 == false) {
		$("email_about3").nextElementSibling.firstChild.nodeValue = "Select One";
		isValid = false;	
	} 

	else {
				$("email_about3").nextElementSibling.firstChild.nodeValue = "";
	}

	if (isValid == true) {
	   $("email_form").submit();	
	}

};

	

var resetForm = function() {
		$("email_form").reset();
		$("email_address").nextElementSibling.firstChild.nodeValue = "*";
		$("email_address_2").nextElementSibling.firstChild.nodeValue = "*";
		$("first_name").nextElementSibling.firstChild.nodeValue = "*";
		$("last_name").nextElementSibling.firstChild.nodeValue = "*";
		$("state_code").nextElementSibling.firstChild.nodeValue = "*";
		$("zip_code").nextElementSibling.firstChild.nodeValue = "*";
		$("email_about").nextElementSibling.firstChild.nodeValue = "*";
		$("email_address").focus();	
};

window.onload = function() {

	/*REMINDER OF WHERE TO PUT ALERT TO DEBUG */
	$("register").onclick = processEntries;
	$("reset_form").onclick = resetForm;
	$("email_address").focus();
};	

/*

*/