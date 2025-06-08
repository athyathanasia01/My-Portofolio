window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const background = document.getElementById("background");
  const textAboutme = document.getElementById("text-about-me");
  const nameAboutme = document.getElementById("name-about-me");

  const blurValue = Math.min(scrollY / 700, 2);
  const opacityValue = Math.max(1 - scrollY / 120, 0.2);

  background.style.filter = `blur(${blurValue}px)`;
  background.style.opacity = opacityValue;

  if (scrollY > 50) {
    console.log("scrolled");
    //scrolled
    textAboutme.style.color = "#21157a";
    nameAboutme.style.color = "#21157a";
  } else {
    //before scrolled
    textAboutme.style.color = "#000000";
    nameAboutme.style.color = "#000000";
  }
});
