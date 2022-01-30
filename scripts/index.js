const welcomeWindow = document.querySelector(".welcome");
const welcomeMessage = welcomeWindow.querySelector(".welcome__message");
const welcomeForm = document.forms["welcome-form"];
const activityForm = document.forms["activity-form"];

const isFormVisible = welcomeForm.classList.contains("welcome__form_visible") || activityForm.classList.contains("welcome__form_visible");

const makeFormVisible = (form) => {
  form.classList.add("welcome__form_visible");
  welcomeMessage.classList.add("welcome__message_top");
};

const makeFormInvisible = (form) => {
  form.classList.remove("welcome__form_visible");
  welcomeMessage.classList.remove("welcome__message_top");
};

const promptForm = () => {
  welcomeWindow.addEventListener("click", () => {
    if (!isFormVisible) {
      makeFormVisible(welcomeForm);
    } else {
    }
  });
};

promptForm();

welcomeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  makeFormInvisible(welcomeForm);
  makeFormVisible(activityForm);
});
