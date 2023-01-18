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
    popup.classList.add("popup__opened")
    nameInput.value = newUserName.textContent
    jobInput.value = newDescribe.textContent
}

function closePopup() {
    popup.classList.remove("popup__opened")
}

// Обработчик «отправки» формы, хотя пока
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    closePopup()

    // Вставьте новые значения с помощью textContent;
    newUserName.textContent = nameInput.value;
    newDescribe.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 
pencilBtn.addEventListener("click", editPopup);
closeBtn.addEventListener("click", closePopup);
