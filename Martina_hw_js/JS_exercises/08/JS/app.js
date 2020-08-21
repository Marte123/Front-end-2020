
let formBtn =document.getElementById("storyBtn");

formBtn.addEventListener("click", storyTeller);

function storyTeller(who, what, when) {
    let whoN =document.getElementById("whoName").value;
    let whatN =document.getElementById("whatName").value;   
    let whenN =document.getElementById("whenName").value;

    document.getElementById("storyPlot").innerHTML = `${whoN} is an incredible ${whatN} who time-travels from ${whenN}.`
}

function clearInputs() {
    let whoInput = document.getElementById("whoName");
    let whatInput = document.getElementById("whatName");
    let whenInput = document.getElementById("whenName");

    whoInput.value = "";
    whatInput.value = "";
    whenInput.value = "";
}

clearInputs();