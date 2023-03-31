/*
"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  var listNode = $("image_list");
  var captionNode = $("caption");
  var imageNode = $("main_image");

  var imageLinks = listNode.getElementsByTagName("a");

  //process image links

  var i, image, link;
  for (i = 0; i < imageLinks.length; i++) {
    //preload image
    image = new Image();
    image.src = imageLinks[i].getAttribute("href");

    // attach event handler
    imageLinks[i].onclick = function (evt) {
      link = this; // the link that was clicked


      // set new image and caption
      imageNode.src = link.getAttribute("href");
      captionNode.firstChild.nodeValue = link.getAttribute("title");
      link.getAttribute("title");

      // cancel the default action of the event
      if (!evt) {
        evt = window.event;
      }
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnFalse = false;
      }
    };
  }

  // set focus on fist image link
  imageLinks[0].focus();
};    
*/




"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  var listNode = $("image_list");
  var captionNode = $("caption");
  var imageNode = $("main_image");

  var imageLinks = listNode.getElementsByTagName("a");

  //process image links

  var i, image, link;
  for (i = 0; i < imageLinks.length; i++) {
    //preload image
    image = new Image();
    image.src = imageLinks[i].getAttribute("href");

    // attach event handler
    imageLinks[i].onclick = function (evt) {
      link = this; // the link that was clicked

      // set new image and caption
      imageNode.src = link.getAttribute("href");
      captionNode.firstChild.nodeValue = link.getAttribute("title");
      link.getAttribute("title");

      // cancel the default action of the event
      if (!evt) {
        evt = window.event;
      }
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnFalse = false;
      }
    };
  }

  // set focus on fist image link
  imageLinks[0].focus();
};