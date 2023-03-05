const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const range = document.getElementById("range");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    //playPause.querySelector(".pause-btn").classList.toggle("hide");
    //playPause.querySelector(".play-btn").classList.toggle("hide");
    playPause.classList.add("playing");
    audio.play();
  } else {
    audio.pause();
    //playPause.querySelector(".pause-btn").classList.toggle("hide");
    //playPause.querySelector(".play-btn").classList.toggle("hide");
    playPause.classList.remove("playing");
  }
});

audio.addEventListener("timeupdate", () => {range.value = audio.currentTime;});
range.addEventListener("timeupdate", () => {audio.currentTime = range.value;});


  