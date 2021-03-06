/* -------------------------------------------------------------------------- */
/*                               Form validation                              */
/* -------------------------------------------------------------------------- */

// prompting error message with its style per form and input field
const showInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.classList.add(config.errorClass);
};

// removing the error message
const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
};

// checking the validity of specific input
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

// checking the validity of entire form
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

// toggling the submit button active of inactive, to be used based on form validity
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// a function to add event listener for every for input field in the page
const setEventListeners = (formElement, config) => {
  // setting an array of all input fields of a given form
  const inputList = [...formElement.querySelectorAll(config.inputSelector)];

  // declaring the submit button of a given form
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  // setting the initial state of the submit button (will be set to inactive)
  toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);

  // setting event listener for every input field to test validity and respond accordingly
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config.inactiveButtonClass);
    });
  });
};

//
const enableValidation = (config) => {
  const formList = [...document.querySelectorAll(config.formSelector)];
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

enableValidation({
  formSelector: ".welcome__form",
  inputSelector: ".welcome__input",
  submitButtonSelector: ".welcome__submit-button",
  inactiveButtonClass: "welcome__submit-button_inactive",
  inputErrorClass: "welcome__input_state_error",
  errorClass: "welcome__input-error_active",
});
