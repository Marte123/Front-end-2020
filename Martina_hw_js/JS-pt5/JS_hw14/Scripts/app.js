let formBtn = document.getElementById("submitBtn");
let formResult = document.getElementById("formInfo");

formBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let pswd = document.getElementById("pswd").value;
    

    formResult.innerHTML = "";

    if (firstName === "" || lastName === "" || email === "" || pswd === "") {
        formResult.style.color = "red";
        formResult.innerHTML += `<p>Invalid input, please enter some value in the field!</p>`;
    } else {
        formResult.style.color = "black";
        formResult.innerHTML += `<p>Hello ${firstName} ${lastName}, your e-mail is ${email} </p>`;
    }
});
