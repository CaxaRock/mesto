const showInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.add(invalidInputClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  const hideInputError = (inputElement, errorElement, invalidInputClass) => {
    inputElement.classList.remove(invalidInputClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  const disableButton = (formSubmitButtonElement, disableSubmitButtonClass) => {
    formSubmitButtonElement.classList.add(disableSubmitButtonClass);
    formSubmitButtonElement.disabled = true;
  }
  
  const enableButton = (formSubmitButtonElement, disableSubmitButtonClass) => {
    formSubmitButtonElement.classList.remove(disableSubmitButtonClass);
    formSubmitButtonElement.disabled = false;
  }
  
  const toggleButtonState = (formSubmitButtonElement, disableSubmitButtonClass, buttonState) =>{
    if(buttonState) {
      disableButton(formSubmitButtonElement, disableSubmitButtonClass);
    } else {
      enableButton(formSubmitButtonElement, disableSubmitButtonClass);
    }
  }
  
  const checkInputValidity = (inputElement, errorElement, invalidInputClass) => {
    if (inputElement.validity.valid) {
      hideInputError(inputElement, errorElement, invalidInputClass);
    } else {
      showInputError(inputElement, errorElement, invalidInputClass);
    }
  }
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((input) => !input.validity.valid);
  }
  
  const handlerFormInput = (
    evt, form, invalidInputClass, formSubmitButtonElement, disableSubmitButtonClass, inputList) => {
    const inputElement = evt.target;
    const errorElement = form.querySelector(`.popup__input-error_field_${inputElement.name}`);
    const buttonState = hasInvalidInput(inputList);
    
    checkInputValidity(inputElement, errorElement, invalidInputClass);
    toggleButtonState(formSubmitButtonElement, disableSubmitButtonClass, buttonState);
  }
  
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
  }
  
  const enableValidation = ({ 
    formSelector, 
    inputSelector,
    invalidInputClass, 
    submitButtonSelector, 
    disableSubmitButtonClass 
    }) => {
    const formList =  Array.from(document.querySelectorAll(formSelector))
    formList.forEach((form) => {
        const inputList = Array.from(form.querySelectorAll(inputSelector));
        const formSubmitButtonElement = form.querySelector(submitButtonSelector)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", (evt) =>  handlerFormInput(
              evt, form, invalidInputClass, formSubmitButtonElement, disableSubmitButtonClass, inputList))
          })
          
          form.addEventListener("submit", handleFormSubmit);
    })
    
  }
  
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    invalidInputClass: "popup__input_type_invalid",
    submitButtonSelector: ".popup__submit-btn",
    disableSubmitButtonClass: "popup__button_disabled"
  });

  
 
  