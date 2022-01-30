const welcomeWindow = document.querySelector(".welcome");
const welcomeMessage = welcomeWindow.querySelector(".welcome__message");
const welcomeForm = welcomeWindow.querySelector(".welcome__form_type_welcome");
const activityForm = welcomeWindow.querySelector(".welcome__form_type_activity");
const formVisibilityClass = "welcome__form_visible";
const nameInput = welcomeForm.querySelector(".welcome__input");
const userName = nameInput.value;

const makeFormVisible = (form) => {
  form.classList.add(formVisibilityClass);
  welcomeMessage.classList.add("welcome__message_top");
};

const makeFormInvisible = (form) => {
  form.classList.remove(formVisibilityClass);
  welcomeMessage.classList.remove("welcome__message_top");
};

welcomeWindow.addEventListener("click", () => {
  if (!(welcomeForm.classList.contains(formVisibilityClass) || activityForm.classList.contains(formVisibilityClass))) {
    makeFormVisible(welcomeForm);
  }
});

welcomeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  makeFormInvisible(welcomeForm);
  makeFormVisible(activityForm);
});
