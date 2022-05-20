let isMuted = true;
const audioVolume = 0.2;

window.onload = () => {
  document.querySelector(".enter-site").onclick = () => {
    //Play audio and loop
    let audio = document.querySelector("audio");
    audio.volume = audioVolume;
    isMuted = false;
    audio.play();
    
    audio.addEventListener("ended", () => {
      audio.play();
    });
    
    //Hide welcome window
    
    document.querySelector(".welcome").classList.add("fade-out");
    document.querySelector(".guante-img").classList.add("fade-in");
    
    //Add mute control
    document.querySelector(".mute__icon").classList.add("fa-volume-high");
    document.querySelector(".mute__btn").onclick = () => {
      let audio = document.querySelector("audio");
      audio.volume = isMuted ? 0 : audioVolume;
      isMuted = !isMuted;
      document.querySelector(".mute__icon").classList.add(isMuted ? "fa-volume-high" : "fa-volume-xmark");
      document.querySelector(".mute__icon").classList.remove(!isMuted ? "fa-volume-high" : "fa-volume-xmark");
    };
  };
};
