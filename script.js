window.onload = () => {
  document.querySelector(".enter-site").onclick = () => {
    //Play audio and loop
    let audio = document.querySelector("audio");
    audio.play();
    audio.addEventListener("ended", () => {
      audio.play();
    });

    //Hide welcome window

    document.querySelector(".welcome").classList.add("fade-out");
    document.querySelector(".guante-img").classList.add("fade-in");
  };
};
