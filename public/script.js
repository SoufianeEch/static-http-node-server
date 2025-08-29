// script.js
const target = document.getElementById("hoverTarget");
const audio = document.getElementById("hoverAudio");
const mute = document.getElementById("mute")
const up = document.getElementById("up")

// when mouse enters h1
target.addEventListener("mouseenter", () => {
  audio.play().catch(err => console.error(err));
});

// when mouse leaves h1
target.addEventListener("mouseleave", () => {
  audio.pause();
});

mute.addEventListener("click", ()=> {
  mute.style.display = "none"
  up.style.display = "block"
  audio.muted = false
})
up.addEventListener("click", ()=> {
  mute.style.display = "block"
  up.style.display = "none"
  audio.muted = true
})