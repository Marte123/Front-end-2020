
let amount = 1000;  

checkAmount();

function checkAmount() {
    alert('You have ' + amount + ' dollars on your bank account.');
   
}

requestMoney();

function requestMoney() {
    let withdrawMoney = parseInt(prompt('How much money do you want to withdrawal?'));
    let leftMoney = amount - withdrawMoney; 

    if(withdrawMoney<amount) {
        alert("You can take your " + withdrawMoney + " dollars.Now you have " + leftMoney + " dollars left on your account.");
    }else if(withdrawMoney>amount) {
        alert('You do not have the enough amount of money you requested! You only have ' + amount + ' dollars!');
    }else (isNaN(withdrawMoney) || withdrawMoney === ''); {
        alert('Please enter a number!');
    }
}
