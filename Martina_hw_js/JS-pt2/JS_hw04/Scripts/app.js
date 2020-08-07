 
/* 
function calculateAge (birthYear, currentYear) {
    let years =  currentYear - birthYear;
    console.log(`You are ${years} years old.`);
}

calculateAge(1997, 2020); 
calculateAge(1996, 2020); 
calculateAge(1995, 2020); 
    
*/
 
 /***** BONUS *****/

    function calculateAge (birthYear) {

      let currentYear = new Date();
      let birthDate = new Date(birthYear);

      let years= currentYear.getFullYear() - birthDate; //Date().getFullYear() ја дава тековната годината 
      console.log(`You are ${years} years old`);
 }
 calculateAge(1997, 2020); 
 calculateAge(2017, 2020); 
 calculateAge(1967, 2020);



