

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

