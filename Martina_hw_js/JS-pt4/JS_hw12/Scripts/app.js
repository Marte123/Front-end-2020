let myarray = [1,2,3,4,5,5];
let sum = 0;

//Function to print the elements of the array
function printElements(array) {
    for (let i = 0; i < myarray.length; i++) {
        let li = document.createElement("li");
        let text = document.createTextNode(myarray[i]);
        li.appendChild(text);
        document.getElementById("Mylist").appendChild(li);
     
    }
};


//Function to print the whole mathematical equation
function getSum(a) {
    for (let i=0; i<myarray.length; i++) {
        sum+=myarray[i];
        //document.getElementById("result").innerHTML= sum;
        //let elements = myarray.toString();
        let elements = document.getElementById("result");
        elements.innerHTML = myarray.join('+');
        document.getElementById("result").innerHTML += `= ${sum} `;
    }  
  
} 


printElements(myarray);
getSum(myarray);


