"use strict";

const getHour = () => {
    let hora = "";

    for (let i = 16; i < 24; i++) {
        hora += Date()[i]
    }

    return hora;
}

let clock = document.querySelector(".clock");

clock.innerHTML = getHour();

setInterval(()=>{
    clock.innerHTML = getHour();
},1000);
