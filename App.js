const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const millisecond = document.querySelector(".millisecond");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const stopp = document.querySelector(".stop");

let myMinute = 0;
start.addEventListener("click", ()=>{
    let myInterval = setInterval(() => {
        millisecond.innerHTML = ((Number(millisecond.innerText) + 1) % 100).toString().padStart(2, "0");
        if (millisecond.innerHTML == "00") {
            second.innerHTML = ((Number(second.innerText) + 1) % 60).toString().padStart(2, "0");
        }
        if (second.innerText == "59") {
           myMinute++;
            if ((myMinute % 100) == 0) {
                minute.innerHTML = (Number(minute.innerText) + 1).toString().padStart(2, "0");
            }
       }
    }, 10);
    pause.addEventListener("click", ()=> {
        clearInterval(myInterval);
    })
    stopp.addEventListener("click", ()=>{
        clearInterval(myInterval);
        minute.innerHTML = "00";
        second.innerHTML = "00";
        millisecond.innerHTML = "00";
    });

});

    
