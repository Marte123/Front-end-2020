
let newToDo = [];
let addBtn = document.getElementById("AddBtn");
let msg = document.getElementById("status");


  function ToDo(name,isCompleted) {
      this.name = name;
      this.isCompleted = isCompleted;
  }

  function addToDo (thing) {
      newToDo.push(thing);
      msg.innerText="";
      msg.innerText="New thing to do is added on your list!";
  }

  function clearInputs() {
    let someInput = document.getElementById("todoInput");
    someInput.value = "";
}
addBtn.addEventListener("click", function (thingsList) {
 
    let listUl =document.getElementById("list");
    let li = document.createElement("li");
    let thing = document.getElementById("todoInput");
    li.appendChild(document.createTextNode(thing.value));
    if (thing === "") {
        msg.innerText="";
        msg.innerText="You must write what you need to do!";
      } else {
        listUl.appendChild(li);
      }


    addToDo (thing);
    clearInputs();
});