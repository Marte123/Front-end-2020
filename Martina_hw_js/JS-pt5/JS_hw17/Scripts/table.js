//function to create the table
function createTable(){
    let table= document.getElementById("tableA");
    let row =document.getElementById("rows").value;
    let col =document.getElementById("cols").value;

    for(let iRow =0; iRow<row; iRow++) {
        let tr =document.createElement('tr');

        for(let iCol=0; iCol<col; iCol++){
            let td =document.createElement('td');
            let data =document.createTextNode("Column" + iCol);

            td.appendChild(data);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
}

//function to delete the table
function deleteTable() {
    let deleteTable = document.getElementById('tableA');
    let parentEl = deleteTable.parentElement;
    parentEl.removeChild(deleteTable);
}

//eventListeners
document.getElementById("ClickToCreate").addEventListener("click", createTable);
document.getElementById("ClickToErase").addEventListener("click", deleteTable);


function clearInputs() {
    let RInput = document.getElementById("rows");
    let CInput = document.getElementById("cols");

    RInput.value = "";
    CInput.value = "";
}
clearInputs();

