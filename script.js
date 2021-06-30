function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running
  audio.currentTime = 0; //rewind  to the start
  audio.play();
  key.classList.add("playing");
}
function transitionend(e) {
  if (e.propertyName !== "transform") return; //skip if its not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", transitionend)); //listen for a transitionend evt on each of the key

window.addEventListener("keydown", playSound);

/////////////////aplaying sound onclick
keys.forEach((key) => {
  key.addEventListener("click", function playSoundOnClick(e) {
    console.log(this.classList);
    //e.preventDefault();

    const audioQ = document.querySelector(".q");
    audioQ.play()
    
    const audioW = document.querySelector("audio.w");
    if(audioW){
      audioW.play()
    } 

    const audioE = document.querySelector("audio.e");
    audioE.play();
  });
});












//Plays all audio on a click
// keys.forEach((key) => {
//   key.addEventListener("click", function playSoundOnClick(e) {
//     //e.preventDefault();
//     const audios = document.querySelectorAll("audio");
//     audios.forEach((audio) => {
//       audio.play();
//       console.log(audio);
//     });
//     console.log(audios, "do re mi");
//   });
// });



// ['keydown', 'click'].forEach(e => {
//     keys.addEventListener(e, playSound)
// })