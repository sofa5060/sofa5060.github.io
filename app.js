const navLinks = [...document.getElementById("side-nav").children];

document.getElementById("menu-icon").addEventListener("click", () => {
  openSideNav();
});

document.getElementById("back-drop").addEventListener("click", () => {
  closeSideNav();
});

navLinks.map((link) => {
  link.addEventListener("click", () => {
    closeSideNav();
  });
});

const disableScroll = () => {
  document.body.style.overflow = "hidden";
  document.querySelector("html").scrollTop = window.scrollY;
};

const enableScroll = () => {
  document.body.style.overflow = null;
};

const openSideNav = () => {
  disableScroll();
  document.getElementById("back-drop").style.display = "block";
  document.getElementById("side-nav").style.display = "flex";
};

const closeSideNav = () => {
  enableScroll();
  document.getElementById("back-drop").style.display = null;
  document.getElementById("side-nav").style.display = "none";
};
