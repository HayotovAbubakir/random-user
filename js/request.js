// api
const API = "https://randomuser.me/api/?results=5";

// for leader
const overlay = document.getElementById("overlay");

function toggleLoader(toggle) {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}

const getData = (recourse) => {
  toggleLoader(true);
  fetch(recourse)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const randomData = data.results;
      updateUI(randomData);
      toggleLoader(false);
      clearBtn.classList.remove("hidden"); 
    })
    .catch((error) => {
      console.log(error);
      toggleLoader(false);
    });
};

const reload = () => {
  getData(API);
};

document.addEventListener("DOMContentLoaded", reload);

