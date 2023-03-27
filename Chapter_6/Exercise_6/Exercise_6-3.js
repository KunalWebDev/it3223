
/* Javascript code to get RADIO button and a Check box also  */


let contact = null;
if ($("#text").checked) {
	contact = $("#text").value;
}
if ($("#email").checked) {
	contact = $("#email").value;

}

if (contact == "text") { /* text processing */ }
else if (contact == "email") { /* email processing */}
else { alert("You must select a contact method"); }

if ($("accept").checked) { /*accept processing*/ }
else { alert("You must accept our terms of service."); }

/* Javascript code to set the RADIO button and check box values */

$("#text").checked = false;
$("#email").checked = false;
$("#accept").checked = true;