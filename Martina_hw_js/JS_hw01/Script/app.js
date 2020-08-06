let price_of_30;
let price_of_phone = 119.95;
let tax_rate = 0.05;

let sales_tax = tax_rate * price_of_phone;
console.log("Sales tax is:" , sales_tax);

let total_cost_of_phone = price_of_phone + sales_tax;
console.log("Total cost of one phone is:", total_cost_of_phone);

price_of_30 = total_cost_of_phone * 30;
console.log("Total price of 30 phones is:", price_of_30);