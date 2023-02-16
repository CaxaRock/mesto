const showInputError = (inputElement, errorElement, invalidInputClass) => {
  inputElement.classList.add(invalidInputClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (inputElement, errorElement, invalidInputClass) => {
  inputElement.classList.remove(invalidInputClass);
  errorElement.textContent = inputElement.validationMessage;
};

const disableButton = (formSubmitButtonElement, disableSubmitButtonClass) => {
  formSubmitButtonElement.classList.add(disableSubmitButtonClass);
  formSubmitButtonElement.disabled = true;
};

const enableButton = (formSubmitButtonElement, disableSubmitButtonClass) => {
  formSubmitButtonElement.classList.remove(disableSubmitButtonClass);
  formSubmitButtonElement.disabled = false;
};

const toggleButtonState = (
  formSubmitButtonElement,
  disableSubmitButtonClass,
  buttonState
) => {
  if (buttonState) {
    disableButton(formSubmitButtonElement, disableSubmitButtonClass);
  } else {
    enableButton(formSubmitButtonElement, disableSubmitButtonClass);
  }
};

const checkInputValidity = (inputElement, errorElement, invalidInputClass) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, errorElement, invalidInputClass);
  } else {
    showInputError(inputElement, errorElement, invalidInputClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => !input.validity.valid);
};

const handleFormInput = (
  evt,
  form,
  invalidInputClass,
  formSubmitButtonElement,
  disableSubmitButtonClass,
  inputList,
  inputErrorClassTemplate
) => {
  const inputElement = evt.target;
  const errorElement = form.querySelector(
    `${inputErrorClassTemplate}${inputElement.name}`
  );
  const buttonState = hasInvalidInput(inputList);

  checkInputValidity(inputElement, errorElement, invalidInputClass);
  toggleButtonState(
    formSubmitButtonElement,
    disableSubmitButtonClass,
    buttonState
  );
};

const enableValidation = ({
  formSelector,
  inputSelector,
  invalidInputClass,
  submitButtonSelector,
  disableSubmitButtonClass,
  inputErrorClassTemplate,
}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll(inputSelector));
    const formSubmitButtonElement = form.querySelector(submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) =>
        handleFormInput(
          evt,
          form,
          invalidInputClass,
          formSubmitButtonElement,
          disableSubmitButtonClass,
          inputList,
          inputErrorClassTemplate
        )
      );
    });
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  invalidInputClass: "popup__input_type_invalid",
  submitButtonSelector: ".popup__submit-btn",
  disableSubmitButtonClass: "popup__submit-btn_disabled",
  inputErrorClassTemplate: ".popup__input-error_field_",
});
