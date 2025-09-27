const menuBtn = document.querySelector(".menu-btn");
const mainMenu = document.querySelector("#main-menu");
console.log(menuBtn);
console.log(mainMenu);
menuBtn.addEventListener("click", () => {
  const IsExpanded = menuBtn.getAttribute("aria-expanded") === "true";
  if (IsExpanded) {
    menuBtn.setAttribute("aria-expanded", false);
    mainMenu.classList.add("hide");
  } else {
    mainMenu.classList.remove("hide");
    menuBtn.setAttribute("aria-expanded", true);
  }
});
