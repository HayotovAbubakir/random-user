const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

darkBtn.addEventListener("click", () => {
  body.classList.add("dark");
  darkBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");
});

lightBtn.addEventListener("click", () => {
  body.classList.remove("dark");
  lightBtn.classList.add("hidden");
  darkBtn.classList.remove("hidden");
});
