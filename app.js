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
  document.getElementById("side-nav").classList.add("openSideNav");
  document.getElementById("side-nav").style.display = "flex";
  document.getElementById("back-drop").style.display = "block";
  setTimeout(() => {
    document.getElementById("side-nav").classList.remove("openSideNav");
  }, 500);
};

const closeSideNav = () => {
  document.getElementById("side-nav").classList.add("closeSideNav");
  setTimeout(() => {
    enableScroll();
    document.getElementById("side-nav").classList.remove("closeSideNav");
    document.getElementById("back-drop").style.display = null;
    document.getElementById("side-nav").style.display = "none";
  }, 500);
};
