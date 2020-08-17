let registeredUsers = [];
let messageResult = document.getElementById("message");
let tbody = document.getElementById("tbody");
let registerBtn = document.getElementById("registerBtn");


function User(firstName, lastName, username, email, password) {
    this.fName = firstName;
    this.lName = lastName;
    this.uName =username;
    this.email = email;
    this.psw =password;
}


function registerUser(user) {
    registeredUsers.push(user);
    messageResult.innerText = "";
    messageResult.innerText = "You have been successfully registered!";
}



function displayUsers(usersList) {
    tbody.innerHTML = "";
    for (let i = 0; i < usersList.length; i++) {
        tbody.innerHTML += `
        <tr>
            <td>${usersList[i].fName}</td>
            <td>${usersList[i].lName}</td>
            <td>${usersList[i].uName}</td>
            <td>${usersList[i].email}</td>
        </tr>
    `
    }
}

function clearInputs() {
    let firstNameInput = document.getElementById("firstName");
    let lastNameInput = document.getElementById("lastName");
    let userNameInput = document.getElementById("userName");
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");

    firstNameInput.value = "";
    lastNameInput.value = "";
    userNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let firstNameInput = document.getElementById("firstName").value;
    let lastNameInput = document.getElementById("lastName").value;
    let userNameInput = document.getElementById("userName").value;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("pswd").value;

    if (firstNameInput === "" || lastNameInput === "" || userNameInput === ""|| emailInput === "" || passwordInput === "") {
       messageResult.innerText = "";
       messageResult.innerText = "You must fill all the fields!"
    } else {
        let newUser = new User(firstNameInput, lastNameInput, userNameInput, emailInput, passwordInput);
        registerUser(newUser);
        displayUsers(registeredUsers);
        clearInputs();
    }
});