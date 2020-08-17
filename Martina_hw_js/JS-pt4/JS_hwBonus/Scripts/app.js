
//function for input 
function createRecipe(rname) {
    let name = prompt("Please enter the name of your recipe:"); 
    if (name != null) {
      document.getElementById("recipeName").innerHTML = `This is recipe for ${name}`;
    }
}
//createRecipe(name);

//function for ingredients
  function writeIngredients(){
    let numOfIng = prompt("How many ingredients does your recipe have?");
    let arrOfIng = [];
    for(let i = 0; i < numOfIng; i++){
       arrOfIng.push(prompt("Enter the ingredient:"));
       let li = document.createElement("li");
       let ingredient = document.createTextNode(arrOfIng[i]);
       li.appendChild(ingredient);
       document.getElementById("MyIng").appendChild(li);
    }
}