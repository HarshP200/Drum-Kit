
// Mouse Press

let drum_count = document.querySelectorAll(".drum").length;
for(let i=0;i<drum_count;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    sound_create(this.innerHTML);
    key_pressed(this.innerHTML);
});
}



// Keyboard Press

document.addEventListener("keypress",function(event){
    sound_create(event.key);
    key_pressed(event.key);
});

// Function that will make sound

function sound_create(pressed_key){
    pressed_key = pressed_key.toLowerCase();
    switch(pressed_key){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;  
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;  
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;  
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;  
        case 'j':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;  
        case 'k':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;  
        case 'l':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;  
        default: console.log(pressed_key);
    }
}



function key_pressed(key){
    
    if(key >= 'A'  && key <= 'Z'){
        key = key.toLowerCase();
    }

    let button = document.getElementsByClassName(key)[0];
    button.classList.add("pressed");

    setTimeout(()=>{
        button.classList.remove("pressed");
    },100);

    
}