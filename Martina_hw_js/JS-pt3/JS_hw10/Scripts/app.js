let firstName = ["Gerard", "Robert", "Angelina"];
let lastName = ["Butler", "Downey", "Jolie"];
let orderNum =["1", "2", "3"];
let result = [];

function FullNameofActors(num, first, last) {
    for (i = 0; i < orderNum.length; i++){
      result[i] = orderNum[i] + "." + firstName[i] + " " + lastName[i];
  }
}
FullNameofActors (orderNum, firstName, lastName);

for (i = 0; i < result.length; i++) {
}

function printFullName() {
  console.log(result.map(FullNameofActors));

}

printFullName();


