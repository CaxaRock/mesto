//trash for me


  /*________ 6 practic work____________*/
//   const formCard = document.forms.place;
//   const FormCardFields = Array.from(formCard.querySelectorAll(".popup__input_type_add-form"))
//   const sumbitBtnCard = document.querySelector(".popup__submit-btn_card");
//   const invalidFieldClass = document.querySelector(".popup__input_type_invalid");

//   const checkFieldValidity = (elementField, elementError, invalidFieldClass) => {
//     const validationMessage = elementField.validationMessage;
//     const valid = elementField.validity.valid;

//     const params = {
//       validationMessage,
//       valid,
//       invalidFieldClass
//     }
//     setFieldError(elementField, elementError, params);
//     return valid;
//   }
//   const setFieldError = (elementField, elementError, params ) => {
//     elementError.textContent = params.validationMessage;
//     if (params.valid) {
//       elementField.classList.remove(params.invalidFieldClass)
//     } else {
//       elementField.classList.add(params.invalidFieldClass)
//     }
//   }
  

//   FormCardFields.forEach((elementField) => {
//     const elementError = formCard.querySelector(`.form__item-error_field_${elementField.name}`);
    
//     elementField.addEventListener("input", (evt) => {
//       const field = evt.target;
//       const fieldIsValid = field.validity.valid;
//       console.log(fieldIsValid)
//       elementError.textContent = field.validationMessage;

//       checkFieldValidity(field, elementError, invalidFieldClass)



//       /*________________было закоменчено______________________*/
//       // if (!fieldIsValid) {
//       //   field.classList.add("popup__input_type_invalid");
//       // } else {
//       //   field.classList.remove("popup__input_type_invalid");
//       // }
//       /*______________________________________*/

//       const formCardIsValid = FormCardFields.every((item) => item.validity.valid)
//       // toggleCardFormSubmit(sumbitBtnCard, state)
//       console.log(FormCardFields.every((item) => item.validity.valid))
//       if (formCardIsValid) {
//         sumbitBtnCard.removeAttribute("disabled")
//       } else {
//         sumbitBtnCard.setAttribute("disabled", "disabled")
//       } 
//     })
//   })

// /*________________было закоменчено______________________*/
//     // const toggleCardFormSubmi = (elementSubmit, { disable }) => {
//     //   if (disable)
//     // }
   
  
/* функция проверки валидности полей */
  
 





/*________My try____ everythig is working______*/




/*__________________________________*/