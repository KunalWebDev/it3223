main.js file
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}


// the event handler for the click event of each h2 element
const toggle = evt => {
    const h2Element = evt.currentTarget; // get the clicled h2
    const divElement = h2Element.nextElementSibling; // get h2's sibling div

    h2Element.classList.toggle("minus");
    divElement.classList.toggle("open");

    evt.preventDefault(); // cancel defaul;t action of h2's child
};

document.addEventListener("DOMContentLoaded", () => {

 // get h2 tags
 const h2Elements = document.querySelectorAll("#faqs h2");
 
 // attach event handler for each h2 tag
 for (let h2Element of h2Elements) {
    h2Element.addEventListener("click, toggle");
 }   

 // ste focus on first h2 tag's <a> tag
 h2Elementss[0].firstChild.focus();

});


