
/*
let slideIndex = 0;

function startClicked() {
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("initialSlide").style.display = "none";
  startSlideshow();
}

function pauseClicked() {
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
}

function startSlideshow() {
  if (document.getElementById("start").disabled) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(startSlideshow, 2000);
  }
}
window.onload = function() {
  alert("I am here")
  $("Start").onclick = startSlideshow;
  $("Pause").onclick = pauseClicked;
};    
*/


  var $ = function(id) { return document.getElementById(id); };
   window.onload = function() {
      alert("I am here")
       var listNode = $("image_list");
       var captionNode = $("caption");
       var imageNode = $("image");
       var links = listNode.getElementsByTagName("a");
       // Process image links
       var i, linkNode, image;
       var imageCache = [];
       for ( i = 0; i < links.length; i++ ) {
           linkNode = links[i];
           image = new Image();
           image.src = linkNode.getAttribute("href");
           image.title = linkNode.getAttribute("title");
           imageCache[imageCache.length] = image;
    }

    // Start slide show
       var imageCounter = 0;
       var  timer = setInterval(
           function () {
               imageCounter =
                   (imageCounter + 1) % imageCache.length;
               image = imageCache[imageCounter];
               imageNode.src = image.src;
               captionNode.firstChild.nodeValue =
      }, 
      2000);
 };
