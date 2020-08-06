console.log("Connected");

let userInput = parseInt(prompt ("How much money do you have?"));

let confirmed = confirm('You have ' + userInput + ' dollars ');

if(confirmed === true){
    console.log("You pressed OK!");
}
else {
    console.log("You pressed Cancel!"); 
}
    if (userInput <= 10) {
      console.log(`With cash of ${userInput} dollars, you can buy a chocolate!`);
    } else if (userInput <= 100) {
        console.log(`With cash of ${userInput}, You can have a takeaway!`);
    }else if(userInput <= 500) {
        console.log(`With cash of ${userInput} dollars, you can buy youself some furniture!`);
    }else if(userInput <= 1000) {
        console.log(`With cash of ${userInput} dollars, you can buy youself a bike!`);
    }else if(userInput <= 10000) {
        console.log(`With cash of ${userInput} dollars, you can go to Las Vegas!`);
    }else {
        console.log("You can do whatever you want!");
    }
    