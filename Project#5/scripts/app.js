
let boxes = document.querySelectorAll('.box');

let scrollAmount = 0;
let oldScrollAmount = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    boxes.forEach( box => {
        if (scrollTop + window.innerHeight > box.offsetTop) {
            if (scrollTop > oldScrollAmount){
                scrollAmount--;
            } else if ( scrollTop <oldScrollAmount) {
                scrollAmount++;
            }
           
            box.style.transform = `translateY(${scrollAmount * 0.7}px)`;
        }
    })
    oldScrollAmount =scrollTop;
});