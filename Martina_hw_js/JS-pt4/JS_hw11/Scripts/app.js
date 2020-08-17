let changeh1 =document.getElementById("myTitle");
changeh1.innerText="Awesome page";

let paragraphs =document.getElementsByTagName("p");
paragraphs.innerText="The text in the paragraphs is added by JS!";

document.querySelector("text").innerText = "This is also text!";

let lastDiv = document.getElementsByTagName("body")[0].lastElementChild;

let h3Divlast = lastDiv.getElementsByTagName("h3")[0];
let h1Divlast = h3Divlast.previousElementSibling;

h3Divlast.innerText = "This is a brand new text!";
h1Divlast.innerText = "Also this!";
