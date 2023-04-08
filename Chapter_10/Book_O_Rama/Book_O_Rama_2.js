
"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {
var isValid = true;

/*REMINDER OF WHERE TO PUT ALERT TO DEBUG */


 alert(I am here);
//get values for user entries
  /*var email = $("email_address").value;
  var email_2 = $("confirm-email").value;
  var first_name = $("first_name").value;
  var last_name = $("last_name").value;
  var phone = $("phone").value;
  var state_code = $("state_code").value;
  var zip_code = $("zip_code").value;*/

  var email_about = $("email-about").checked;



    //email 
  /*
  if (email == "") {

     alert("WOW2");
     $("email_address").nextElementSibling.firstChild.nodeValue = "Must be a valid email address";
     isValid = false;
  } 
  else {
      
    $("email_address").nextElementSibling.firstChild.nodeValue = "";
  }


  // email confirmation

  if (email_2 == "") {
    
    $("confirm-email").nextElementSibling.firstChild.nodeValue = "Must equal first email entry";
        isValid = false;  
  
  }   

  else {
      
    $("confirm-email").nextElementSibling.firstChild.nodeValue = "";
  
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

    
    
    $("last_name").nextElementSibling.firstChild.nodeValue = "";
        isValid = false;  
  
  }   

  else {
      
    $("last_name").nextElementSibling.firstChild.nodeValue = "";
  
  }

   // phone

  if (phone == "") {

    
    
    $("phone").nextElementSibling.firstChild.nodeValue = "";
        isValid = false;  
  
  }   

  else {
      
    $("phone").nextElementSibling.firstChild.nodeValue = "";
  
  }


  // state code confirmation

  if (state_code == "") {

    
    $("state").nextElementSibling.firstChild.nodeValue = "Use 2-character code";
        isValid = false;  
  
  }   

  else {
      
    $("state").nextElementSibling.firstChild.nodeValue = "";
  
  }


  // zip code confirmation

  if (zip_code == "") {

    
    
    $("zip").nextElementSibling.firstChild.nodeValue = "Use 99999 format";
        isValid = false;  
  
  }   

  else {
      
    $("zip").nextElementSibling.firstChild.nodeValue = "";
  
  }


  
  // NOW CURRENTLY WORKING ON THIS PART 
  */
  
 
  alert(email_about);

  if (email_about == false) {

    $("email-about").nextElementSibling.firstChild.nodeValue = "This box must be checked. ";
        isValid = false;  
  } else {
            $("email-about").nextElementSibling.firstChild.nodeValue = "";
  }

  // NOW CURRENTLY WORKING ON THIS PART 

  

  if (isValid == true) {
     $("email_form").submit();  
  }

};

var resetForm = function() {
    $("email_form").reset();
   /* $("email_address").nextElementSibling.firstChild.nodeValue = "*";
    $("confirm-email").nextElementSibling.firstChild.nodeValue = "*";
    $("first_name").nextElementSibling.firstChild.nodeValue = "*";
    $("last_name").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";
    $("state").nextElementSibling.firstChild.nodeValue = "*";
    $("zip").nextElementSibling.firstChild.nodeValue = "*"; */
    $("email_about").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus(); 
};

window.onload = function() {
  $("Submit").onclick = processEntries;
  $("Reset").onclick = resetForm;
  $("email_address").focus();
};