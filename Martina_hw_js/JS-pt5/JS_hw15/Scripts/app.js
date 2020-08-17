window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    
    document.getElementById("win").innerHTML = "Width:" + myWidth + " " + "Height:" + myHeight;
};