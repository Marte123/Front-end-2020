function Book (bookTitle, bookAuthor, readingStatus) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.readingStatus =readingStatus;

    this.returnInfo = function(bookTi,bookAu,statusR) {
        let bookT =document.getElementById("bTitle");
        let bookA =document.getElementById("bAuthor");
    /*  //  let bookS =document.getElementsByClassName("options");
        let text =document.getElementById("message");

       let status = document.getElementsByClassName("options").value;
        if (status.checked = true) {
            text.innerHTML +=`Already read ${bookT} by ${bookA}`;
        } else if( status.checked = false) {
            text.innerHTML +=`You still have not read the ${bookT} by ${bookA}`;
        }else 
            text.innerHTML +=`You are currently reading ${bookT} by ${bookA}`;
   
    */
   let status = document.forms[5];
   let txt = "";
    if (status.checked) {
      txt = txt + status.value + " ";
    }else {
  document.getElementById("message").value =    `Already read ${bookT} by ${bookA} ${txt}`;
} 

let bookT =document.getElementById("bTitle");
let bookA =document.getElementById("bAuthor");

let book1 = new Book(bookT, bookA);

let show= document.getElementById("myBtn");
show.addEventListener("click",book1.returnInfo());
    
  //  show.addEventListener("click",book1.returnInfo());

//'The Da Vinci Code', 'Dan Brown' 
