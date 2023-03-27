

function imageHover() {
  var images = document.getElementsByClassName("mySlides");
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function(event) {
      event.srcElement.src = event.srcElement.getAttribute("onmouseover");
    });

    images[i].addEventListener("mouseout", function(event) {
      event.srcElement.src = event.srcElement.getAttribute("onmouseout");
    });
  }
}

imageHover();

