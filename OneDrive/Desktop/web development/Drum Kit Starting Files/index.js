var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//for click button
for(var i  = 0 ; i <numberOfDrumButtons  ; i ++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){

   var buttonToClick = this.innerHTML;
   makeSound(buttonToClick);
   buttonAnimation(buttonToClick);
  });
}
// keyboard press
document.addEventListener("keydown",function(event)
    {
      makeSound(event.key);
     buttonAnimation(event.key);
   });


function makeSound(key)
{
  switch(key)
  {
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
    var audio = new Audio("sounds/Oops.mp3");
    audio.play();
  }

}
function buttonAnimation(selectKey)
{
   var keySelect = document.querySelector("." + selectKey);
   keySelect.classList.add("pressed");

   setTimeout(function(){
     keySelect.classList.remove("pressed");
   },100);
}
