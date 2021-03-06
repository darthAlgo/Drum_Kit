
var noOfButtons = document.querySelectorAll(".drum").length;

//for mouse click
for(var i = 0; i < noOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var btnInnerHTML = this.innerHTML;

        makeSound(btnInnerHTML);

        btnAnimate(btnInnerHTML);
    
    });
}

//for keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    btnAnimate(event.key);
    //console.log(event);
});

//collective fkn to make sounds
function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("invalid "+key);
    }
}

//animaor fkn
function btnAnimate(currKey) {

    var activeBtn = document.querySelector("."+currKey);

    activeBtn.classList.add("pressed");

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}

