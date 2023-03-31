"use strict",
$(document).ready( () => {
	let nextSlide = $("#slides img:first-child");

	// the function for the slideshow
	const runSlideShow = () => {
		$("#caption").fadeOut(1000);
		$("#slides").fadeOut(1000,
			() => {
				if (nextSlide.next().length == 0) {
					nextSlide = $("#slides img:first-child");
				}

				else {
					nextSlide = nextSlide.next();
				}
				const nextSlideSource = nextSlide.attr("src");
				const nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource.src).fadeIn(1000);
			    $("#caption").text(nextCaption.title).fadeIn(1000);
			}
		}; // end fadeOut() method
		   // end runSlideShow() arror function

		// start slideshow
		let timer1 = setInterval(runSlideShow, 3000);

		// starting and stopping the slideshow
		$("#slide").click( () => {
			if (timer1 != null) {
				clearInterval(timer1);   // stop 
				timer1 = null; 
			}

			else {
				runSlideShow();  //starts now
				timer1 = setInterval(runSlideShow, 3000); // change evry 3 sec
			}


		});


	});