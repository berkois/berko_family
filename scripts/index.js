const welcomeWindow = document.querySelector(".welcome");
const welcomeMessage = welcomeWindow.querySelector(".welcome__message");
const welcomeForm = welcomeWindow.querySelector(".welcome__form_type_welcome");
const passwordForm = welcomeWindow.querySelector(".welcome__form_type_password");
const formVisibilityClass = "welcome__form_visible";
const nameInput = welcomeForm.querySelector(".welcome__input");
const passwordInput = passwordForm.querySelector(".welcome__input");
const welcomeGoButton = welcomeWindow.querySelector(".welcome__go-button");
const correctPassword = "9194";

const isCorrectPassword = (input) => {
  if (input === correctPassword) {
    return true;
  } else {
    return false;
  }
};

const showGoButton = () => {
  welcomeGoButton.classList.add("welcome__go-button_active");
  welcomeGoButton.style.animationPlayState = "running";
};

const showWelcomeMessage = (givenName) => {
  welcomeMessage.textContent = `איזה כיף לראותך, ${givenName}!`;
  welcomeMessage.classList.add("welcome__message_active");
};

const makeFormVisible = (form) => {
  form.classList.add(formVisibilityClass);
};

const makeFormInvisible = (form) => {
  form.classList.remove(formVisibilityClass);
};

document.addEventListener("click", () => {
  welcomeForm.classList.add("welcome__form_no_animation");
});

welcomeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  makeFormInvisible(welcomeForm);
  makeFormVisible(passwordForm);
});

passwordForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userName = nameInput.value;
  const passwordEntered = passwordInput.value;
  if (isCorrectPassword(passwordEntered)) {
    makeFormInvisible(passwordForm);
    showWelcomeMessage(userName);
    showGoButton();
  } else {
    showInputError(passwordForm, passwordInput, { inputErrorClass: "welcome__input_state_error", errorClass: "welcome__input-error_active" });
    alert("איזה מין ברקואים אתם???");
  }
});

makeFormVisible(welcomeForm);
