/*ADD MORE COMMENTS TO UNDERSTAND WHY THE JS FUNCTIONS LIEK THIS NOW */

var currentIndex = 0
var interval = null;

var $ =
    function (id) { return document.getElementById(id); };
window.onload = function () {

    startBtn.disabled = false;
    pauseBtn.disabled = true;

};

/*this command below is what starts the button */

var startBtn = $('start');
var pauseBtn = $('pause');

function start() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;

    interval = setInterval(function () {

        let listNode = $("image_list").querySelectorAll("a");
        let listLength = listNode.length;
        let captionNode = $("caption");
        let imageNode = $("image");
        currentIndex += 1;
        if (currentIndex >= listLength) {
            currentIndex = 0;
        }       

        imageNode.src = listNode[currentIndex].href;
        imageNode.alt = listNode[currentIndex].title;

        captionNode.innerText = listNode[currentIndex].title;
    }, 2000);

}

function pause() {

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(interval);
}