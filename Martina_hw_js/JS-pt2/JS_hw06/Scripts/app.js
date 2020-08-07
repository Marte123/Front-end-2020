function CalculateMyDogsAge (myAge) {
    return myAge / 7;
  }
  let myDogsYears = CalculateMyDogsAge (23); 
  console.log(`You are ${myDogsYears} years old in dogs years.`);

  // Reverse

  function CalculateMyHumansAge (DogAge) {
    return DogAge * 7;
  }
  let myHumansYears = CalculateMyHumansAge (11); 
  console.log(`Your dog is ${myHumansYears} years old in humans years.`);


/***** Calculate Dog Years with User Input *****/
 function CalculateMyDogsYears (){
    
    let myAge = prompt("How old are you?");
    let DogYear = myAge / 7;
    console.log(`You are ${DogYear} years old in dogs years.`);
   }
   CalculateMyDogsYears();

/***** Calculate Humans Years with User Input *****/ 

  function CalculateMyHumansYears () {

    let DogAge = prompt("How old is your dog?");
    let HumanYear = DogAge * 7;
    console.log(`Your dog is ${HumanYear} years old in humans years.`);
   }
   CalculateMyHumansYears();
