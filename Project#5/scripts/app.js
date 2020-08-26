
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
           
            box.style.transform = `translateY(${scrollAmount * 0.5 }px)`;
        }
    })
    oldScrollAmount =scrollTop;
});

function slideIn (func, wait=20, immediatte =true) {
    let timeout;

}

let $star =$(".shootingstar");
let $win =$(window);

$win.on("scroll", function() {
    let top =$win.scrollTop()/2;
    $star.css('transform', "skewY("+top+"deg)");
});
