"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
  var isValid = true;

  alert(I am here);

  var email_about = $("email_about").checked;

  alert(email_about);

  if (email_about == false) {

    $("email_about").nextElementSibling.firstChild.nodeValue = "This box must be checked. ";
        isValid = false;  
  } else {
            $("email_about").nextElementSibling.firstChild.nodeValue = "";
  }
 
  if (isValid == true) {
     $("email_form").submit();  
  }

};

var resetForm = function() {
    $("email_form").reset();
    $("email_about").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus(); 
};

window.onload = function() {
  alert("WOW!");
  $("Submit").onclick = processEntries;
  $("Reset").onclick = resetForm;
  $("email_address").focus();
};
