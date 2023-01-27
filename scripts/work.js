let popup = document.querySelector(".popup");
let saveBtn = document.querySelector(".popup__submit-btn");
let closeBtn = document.querySelector(".popup__close-btn");
let editProfileBtn = document.querySelector(".profile__pencil-btn");
let popupContainer = document.querySelector(".popup__container")

let formElement = document.querySelector(".popup__edit-form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input_element_name");
let jobInput = document.querySelector(".popup__input_element_job");
let newUserName = document.querySelector(".profile__name");
let newDescribe = document.querySelector(".profile__describe");

//_____Open&Close addCard popup_______
const addCardBtn = document.querySelector(".profile__plus-btn")
const popupCard = document.querySelector(".popup_type_add-card")
addCardBtn.addEventListener("click", openAddCardPopup)
function openAddCardPopup() {
    popupCard.classList.add("popup_opened")
};
function closeAddCardPopup() {
    popupCard.classList.remove("popup_opened")
};
closeBtn.addEventListener("click", closeAddCardPopup);
//______________________________

// добавление работы кнопки like
const elementLikes = document.querySelector(".elements__white-area");
const like = document.querySelector(".elements__like-btn");
elementLikes.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
event.target.addEventListener("click", function () {
    like.classList.toggle(".elements__like-btn_active")
})
});
//____________________________

function editPopup() {
    popup.classList.add("popup_opened")
    nameInput.value = newUserName.textContent
    jobInput.value = newDescribe.textContent
}

function closePopup() {
    popup.classList.remove("popup_opened")
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
editProfileBtn.addEventListener("click", editPopup);
closeBtn.addEventListener("click", closePopup);

//____________6 cards____
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  //____________________________