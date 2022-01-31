const welcomeWindow = document.querySelector(".welcome");
const welcomeMessage = welcomeWindow.querySelector(".welcome__message");
const welcomeForm = welcomeWindow.querySelector(".welcome__form_type_welcome");
const formInvisibilityClass = "welcome__form_invisible";
const nameInput = welcomeForm.querySelector(".welcome__input");
const welcomeGoButton = welcomeWindow.querySelector(".welcome__go-button");

const showGoButton = () => {
  welcomeGoButton.classList.add("welcome__go-button_active");
  welcomeGoButton.style.animationPlayState = "running";
};

const showWelcomeMessage = (givenName) => {
  welcomeMessage.textContent = `איזה כיף לראותך, ${givenName}!`;
  welcomeMessage.classList.add("welcome__message_active");
};

const makeFormInvisible = (form) => {
  form.classList.add(formInvisibilityClass);
};

document.addEventListener("click", () => {
  welcomeWindow.classList.add("welcome_no_animation");
});

welcomeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userName = nameInput.value;
  makeFormInvisible(welcomeForm);
  showWelcomeMessage(userName);
  showGoButton();
});
