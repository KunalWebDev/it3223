const name = $("#name").value;
const comment = $("#comment").value;

if (name.length == 0) { alert("Please enter a name.");}
if (comment.length == 0) { alert("Please enter a comment."); }

const country = $("#country").value;
if (country == "usa") { /* USA processing */ }
else if (country == "can") { /* Canada processing */ }
else if (country == "mex") { /* Mexico processing */ }
else ( alert("Please select a country."); }


/* Javascript code to set the text box, text area, and select list values */

$("#country").value = "";
$("#name").value = "";
$("comment").value = "";
