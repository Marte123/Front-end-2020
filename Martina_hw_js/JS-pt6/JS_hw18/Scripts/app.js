
function Animal (aName,aKind) {
    this.name = aName;
    this.kind = aKind;

    this.speak = function(saying) {
       
        let insertHere =document.getElementById("empty");
        insertHere.innerHTML += `${aName} says ${saySmth}!`;
       
    }
}

let saySmth = prompt("Insert a message:");

let dog = new Animal('Rex', 'dog');

console.log(dog.speak(saySmth));
