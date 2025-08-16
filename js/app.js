const form = document.getElementById("form");
const formButton = document.getElementById("form__button");
const user = document.getElementById("user");
const clearBtn = document.getElementById("clear__button");

// Refresh tugma
formButton.addEventListener("click", (e) => {
  e.preventDefault();
  reload();
  clearBtn.classList.remove("hidden");
});

// Clear tugma
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  user.innerHTML = "";
  clearBtn.classList.add("hidden");
});

// Qidiruv bo‘yicha filter
form["form__input"].addEventListener("input", () => {
  const inputValue = form["form__input"].value.toLocaleLowerCase();
  const names = document.querySelectorAll(".user__name");

  names.forEach((item) => {
    if (
      item.lastElementChild.textContent.toLocaleLowerCase().includes(inputValue)
    ) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

// UI yangilash
const updateUI = (data) => {
  user.innerHTML = "";
  data.forEach((item) => {
    const { picture, gender, name, location, dob } = item;
    user.innerHTML += `
      <li class="user__item">
        <button class="user__delete--btn">
          <i class="fas fa-trash"></i>
        </button>
        <img class="user__img" alt="User photo" src=${picture.large} width="100" height="100" />
        <div class="user__name">
          <span class="material-symbols-outlined">badge</span>
          <span>- ${name.title} ${name.first} ${name.last}</span>
        </div>
        <div class="user__year">
          <span class="material-symbols-outlined">cake</span>
          <span>- ${dob.age} years old.</span>
        </div>
        <div class="user__location">
          <span class="material-symbols-outlined">person_pin_circle</span>
          <span>- ${location.city}, ${location.country}</span>
        </div>
        <div class="user__gender">
          <span class="material-symbols-outlined">man</span>
          <span>- ${gender}</span>
        </div>
      </li>
    `;
  });
};

// Delete tugmasi (event delegation)
document.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".user__delete--btn");
  if (deleteBtn) {
    deleteBtn.parentElement.remove();
    if (!user.children.length) {
      clearBtn.classList.add("hidden");
    }
  }
});
