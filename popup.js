let popup = document.querySelector(".popup");
let saveBtn = document.querySelector(".popup__submit-btn");
let closeBtn = document.querySelector(".popup__close-btn");
let pencilBtn = document.querySelector(".profile__pencil-btn");
let popupContainer = document.querySelector(".popup__container")

let formElement = document.querySelector(".popup__edit-form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input_element_name");
let jobInput = document.querySelector(".popup__input_element_job");
let newUserName = document.querySelector(".profile__name");
let newDescribe = document.querySelector(".profile__describe");



function editPopup() {
    popup.classList.add("popup__open")
    nameInput.value = newUserName.textContent
    jobInput.value = newDescribe.textContent
}

function closePopup() {
    popup.classList.remove("popup__open")
}
pencilBtn.addEventListener("click", editPopup);
closeBtn.addEventListener("click", closePopup);
saveBtn.addEventListener("click", closePopup)




// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
                                         
    // Получите значение полей jobInput и nameInput из свойства value
    //let jobInput = document.querySelector(".popup__input_element_name").value;
    //let nameInput = document.querySelector(".popup__input_element_job").value;

    // Выберите элементы, куда должны быть вставлены значения полей


    // Вставьте новые значения с помощью textContent;

    newUserName.textContent = nameInput.value;
    newDescribe.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 


saveBtn.addEventListener("click", handleFormSubmit)