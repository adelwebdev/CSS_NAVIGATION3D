const toggleButton = document.getElementById("toggle-button");
const sideBar = document.getElementById("side-bar");

toggleButton.addEventListener("click", show);

function show() {
  sideBar.classList.toggle("active");
}

//REMOVE SIDE BAR IF CLICK ON MAIN CONTENT!!

const content = document.querySelector(".content");

content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});
