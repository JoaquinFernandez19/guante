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
      document
        .querySelector(".mute__icon")
        .classList.add(isMuted ? "fa-volume-high" : "fa-volume-xmark");
      document
        .querySelector(".mute__icon")
        .classList.remove(!isMuted ? "fa-volume-high" : "fa-volume-xmark");
    };

    //Eyes following (se uso jQuery porque me recontra robe el codigo saludos)
    const eye1 = document.querySelector(".eye-left");
    const eye2 = document.querySelector(".eye-right");
    window.addEventListener("mousemove", (evt) => {
      let x = -(383 - evt.pageX) / 160;
      let y = -(72 - evt.pageY) / 160;
      console.log(x);
      if (y >= 2.9) y = 2.9;
      if (x >= 6) x = 6;

      eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
      eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });
  };
};
