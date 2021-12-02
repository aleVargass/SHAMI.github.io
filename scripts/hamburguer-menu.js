document.addEventListener("click", (e) => {
  if (
    e.target === document.getElementById("hamburguer-menu") ||
    e.target.matches("#hamburguer-menu *")
  ) {
    document.getElementById("nav-menu-mobile").classList.toggle("display");
  }
  if (e.target.matches("#nav-menu-mobile *")) {
    document.getElementById("nav-menu-mobile").classList.remove("display");
  }
});
