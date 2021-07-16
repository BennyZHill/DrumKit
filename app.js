const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

window.addEventListener("keydown", function(event) {

    switch (event.which){
        case 49:     
            let boom = new Audio("sounds/boom.wav");
            boom.play();
            break;
        case 50:    
            let clap = new Audio("sounds/clap.wav");
            clap.play();
            break;
        case 51:        
            let hihat = new Audio("sounds/hihat.wav");
            hihat.play();
            break;
        case 52:         
            let kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        case 53:         
            let openhat = new Audio("sounds/openhat.wav");
            openhat.play();
            break;
        case 54:        
            let ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        case 55:        
            let snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        case 56:        
            let tink = new Audio("sounds/tink.wav");
            tink.play();
            break;
        case 57:         
            let tom = new Audio("sounds/tom.wav");
            tom.play();
            break;
    }   
    
}, true);
