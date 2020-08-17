let clickBtn =document.getElementById("BtnClick");
let paragraphs =document.getElementById("p1");

clickBtn.addEventListener("click", function() {
    paragraphs.style.color = "red";
    paragraphs.style.fontFamily = "Arial, Helvetica, sans-serif";
    paragraphs.style.fontSize = "x-large"; 
})

