let myConctacts = [];
	let msgResult = document.getElementById("msg");
	let tbody = document.getElementById("tbody");
	let saveBtn = document.getElementById("saveBtn");
	
	function Contact(firstName, lastName, phone) {
	    this.fName = firstName;
	    this.lName = lastName;
	    this.phone = phone;
	}
	
	function addContact(contact) {
	    myConctacts.push(contact);
	    msgResult.innerText = "";
	    msgResult.innerText = "Successfully added new contact!";
	}
	
	function displayContacts(contactList) {
	    tbody.innerHTML = "";
	    for (let i = 0; i < contactList.length; i++) {
	        tbody.innerHTML += `
	        <tr>
	            <td>${contactList[i].fName}</td>
	            <td>${contactList[i].lName}</td>
	            <td>${contactList[i].phone}</td>
	        </tr>
	    `
	    }
	}
	
	function clearInputs() {
	    let firstNameInput = document.getElementById("firstName");
	    let lastNameInput = document.getElementById("lastName");
	    let phoneInput = document.getElementById("phone");
	
	    firstNameInput.value = "";
	    lastNameInput.value = "";
	    phoneInput.value = "";
	}
	
	saveBtn.addEventListener("click", function (e) {
	    e.preventDefault();
	    let firstNameInput = document.getElementById("firstName").value;
	    let lastNameInput = document.getElementById("lastName").value;
	    let phoneInput = document.getElementById("phone").value;
	
	    if (firstNameInput === "" || lastNameInput === "" || phoneInput === "") {
	        msgResult.innerText = "";
	        msgResult.innerText = "You must fill all the inputs!"
	    } else {
	        let newContact = new Contact(firstNameInput, lastNameInput, phoneInput);
	        addContact(newContact);
	        displayContacts(myConctacts);
	        clearInputs();
        }
    });

    
    deleteBtn.addEventListener("click", function(e) {
       e.preventDefault();

       let row = tbody.children;
      // let deleted = row.children;
       let deleted = row.removeChild(row.lastChild);

       console.log(deleted);
      // let row = body.childNodes;
     //  let td = row.children;
      // let deleted = row.removeChild(row.lastChild);
     //  console.log(deleted);
          
  }); 