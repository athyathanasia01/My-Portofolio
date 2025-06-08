window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const background = document.getElementById("background");
  const textProjectDesc = document.getElementById("projectDesc");
  const btnToProject = document.getElementById("btn-to-project");
  const btnToCertif = document.getElementById("btn-to-certificate");

  const blurValue = Math.min(scrollY / 700, 2);
  const opacityValue = Math.max(1 - scrollY / 120, 0.2);

  background.style.filter = `blur(${blurValue}px)`;
  background.style.opacity = opacityValue;

  if (scrollY > 50) {
    console.log("scrolled");
    //scrolled
    textProjectDesc.style.color = "#4537b3";
    btnToProject.style.backgroundColor = "#21157a";
    btnToCertif.style.backgroundColor = "#4537b3";
    btnToProject.style.color = "#ffffff";
    btnToCertif.style.color = "#ffffff";
  } else {
    //before scrolled
    textProjectDesc.style.color = "#000000";
    btnToProject.style.backgroundColor = "#f19b4f";
    btnToCertif.style.backgroundColor = "#f1ad71";
    btnToProject.style.color = "#000000";
    btnToCertif.style.color = "#000000";
  }
});

function updateGalleryAlignment() {
  const gallery = document.querySelector(".gallery");

  if (!gallery) return;

  const contentWidth = gallery.scrollWidth;
  const containerWidth = gallery.clientWidth;

  if (contentWidth > containerWidth) {
    gallery.style.justifyContent = "flex-start";
  } else {
    gallery.style.justifyContent = "center";
  }
}

// Panggil saat halaman dimuat dan saat resize
window.addEventListener("load", updateGalleryAlignment);
window.addEventListener("resize", updateGalleryAlignment);
