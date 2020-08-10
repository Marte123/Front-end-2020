/***** Sum of min&max number using *for* loop  *****/

let arrayOfNums = [16, -3, 26, -20, 12, -9, 10]; 
console.log(`Array: ${arrayOfNums}`);

let max = 0;
let min = 0;

for (i=0; i<arrayOfNums.length; i++) {
    if (arrayOfNums[i]>max) {
        max = arrayOfNums[i];
    }
}
console.log(`MAX: ${max}`);

for (i=0; i<arrayOfNums.length; i++) {
    if (arrayOfNums[i]<min) {
        min = arrayOfNums[i];
    }
}
console.log(`MIN: ${min}`);

function findSum() 
{ 
    return max + min;
}
let sum = max + min;
findSum (arrayOfNums); 
console.log(`Sum of the max and min: ${sum}`);




/***** Sum of min&max number using *apply*  *****/
/*
let arrayOfNums = [16, -3, 26, -20, 12, -9, 10]; 


let maxNum = Math.max.apply(null, arrayOfNums);
console.log(`MAX: ${maxNum}`);

let minNum = Math.min.apply(null, arrayOfNums);
console.log(`MIN: ${minNum}`);

function findSum() 
{ 
    return max + minNum;
}
let sum = max + minNum;
findSum (arrayOfNums); 
console.log(`Sum of the max and min: ${sum}`); 
*/