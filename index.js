

let scoreHome = 0;
let scoreGuest = 0;

let scoreHomeEl = document.getElementById("score-home-el") 
let scoreGuestEl = document.getElementById("score-guest-el") 

function add1() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome    
    
}

function add2() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome    
    
}

function add3() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome   
    
}

function add1G() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest    
    
}

function add2G() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest    
    
}

function add3G() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest   
    
}