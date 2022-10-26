var but;
var audio;
for (i=0;i<7;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var click = this.innerHTML;
    handleClick(click);
});
}
document.addEventListener("keydown",function(event)
{
    
    handleClick(event.key);
    console.log(event.key);
});
function handleClick(but)
{
  
    switch (but) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
            case "w":
                audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                break;
            case "a":
                audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                break;
            case "s":
                audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                break;
            case "d":
                audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                break;
            case "j":
                audio = new Audio("sounds/crash.mp3")
                audio.play();
                break;
            case "k":
                audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                break;
             case "l":
                audio = new Audio("sounds/snare.mp3")
                audio.play();
                break;
        default:
            console.log(this.innerHTML);
            break;
    }
    
    
    
}


