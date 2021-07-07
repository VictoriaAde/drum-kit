function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running
  audio.currentTime = 0; //rewind  to the start
  audio.play();
  key.classList.add("playing");
}
window.addEventListener("keydown", playSound);

function transitionend(e) {
  if (e.propertyName !== "transform") return; //skip if its not a transform
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", transitionend)); //listen for a transitionend evt on each of the key

/////////////////play sound onclick
keys.forEach((key) => {
  key.addEventListener("click", function (e) {
    const id = key.id;
    const audio = document.querySelector(`audio#${id}`);
    audio.play();
    key.classList.add("playing");
  });
});
