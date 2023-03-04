// alert("hello");
// function handleclick(){
//     alert("drum cliked!");

//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();

// }


numberOfBtns = document.querySelectorAll(".drum").length;
//button press
for (var i = 0; i < numberOfBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener(
    "click",
    function () {
    makeSound(this.textContent);
    transition(this.textContent);
    } //end anonymous fxn
  );
}

//keypress
document.addEventListener("keydown",function(event){
   makeSound(event.key);
   transition(event.key);
});


function makeSound(key){
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
  } //end switch
}//end fxn

function transition(key)
{
  var btn=document.querySelector("."+key);
  btn.classList.add('pressed');
  setTimeout(function(){
    btn.classList.remove('pressed');
  },100);
}