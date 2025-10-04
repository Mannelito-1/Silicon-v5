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




const accordionButtons = document.querySelectorAll('.btn-link');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const collapse = card.querySelector('.card-body');

    
    collapse.classList.toggle('collapse-show');
    collapse.classList.toggle('collapse');

    
    accordionButtons.forEach(otherButton => {
      const otherCard = otherButton.closest('.card');
      const otherCollapse = otherCard.querySelector('.card-body');
      if (otherCollapse !== collapse) {
        otherCollapse.classList.remove('collapse-show');
        otherCollapse.classList.add('collapse');
      }
    });
  });
});


const darkModeSwitch = document.querySelector("#darkmode-switch");
const body = document.body;

if (localStorage.getItem("darkmode") === "enabled") {
  body.classList.add("darkModeSwitch");
  darkModeSwitch.checked = true;

}

darkModeSwitch.addEventListener ("change", () => {
  if (darkModeSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkmode", "disabled")
  }
});


