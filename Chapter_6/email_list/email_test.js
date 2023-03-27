"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
	/* alert("hi now"); */


    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
   
    
    let contact = null;
    if ($("text").checked) {
		contact = $("text").value;
	}
	if ($("email").checked) {
		contact = $("email").value;

	}
	if ($("phone").checked) {
		contact = $("phone").value;
	}
	if ($("none").checked) {
		contact = $("none").value;
	}
	alert(contact);

	if (contact == "text") { /* text processing */ }
	else if (contact == "email") { /* email processing */ }
	else if (contact == "phone") { /* phone processing */ }
	else if (contact == "none") { /* none processing */ }
	else { alert("You must select a contact method");}

	if ($("terms").checked) { /*terms processing*/ }
    else { alert("You must accept our terms of service."); }

};

window.onload = function() {
	/* alert("work now"); */
    $("join_list").onclick = joinList;
   	$("email_address1").focus();
}; 


