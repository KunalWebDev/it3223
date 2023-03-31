"use strict",
$(document).ready( () => {

	// create n array of the slide images
	let imageCache = [];
	$("#slides img").each( (index, img) => {
		const image = new Image();
		image.src = $(img).attr("src");
		image.title = $(img).attr("alt");
		imageCache[index] = image;
	});

	// start slideshow
	let imageCounter = 0;
	setInterval( () => {
		$("#caption").fadeOut(1000);
		$("#slide").fadeOut(1000,
			() => {
				imageCounter = (imageCounter + 1) % imageCache.length;
				const nextImage = imageCache[imageCounter];
				$("#slide").attr("src", nextImage.src).fadeIn(1000);
			    $("#caption").text(nextImage.title).fadeIn(1000);
			}); // edn fadeOut() method
	

	},
	3000); // end setInterval() method


});


"use strict",
$(document).ready( () => {
	let nextSlide = $("#slides img:first-child");

	// start slideshow
	setInterval( () => {
		$("#caption").fadeOut(1000);
		$("#slide").fadeOut(1000,
			() => {
				if (nextSlide.next().length == 0) {
					nextSlide = $(#slides img:first-child);
				}
				else {
					nextSlide = nextSlide.next();
				}

				const nextSlideSource = nextSlide.attr("src");
				const nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);
				$("#caption").text(nextCaption).fadeIn(1000);

	        }); // end fadeOut() method

	},
	3000);   // end setInterval() method

});		










