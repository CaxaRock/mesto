import { initialCards } from "./cardsValue.js";

const cardTemplate = document
  .querySelector("#template__card")
  .content.querySelector(".elements__item");
const cardsContainer = document.querySelector(".elements__item-list");
const sumbitBtnCard = document.querySelector(".popup__submit-btn_card");
const inputCardTitle = document.querySelector(".popup__input_card_title");
const inputCardLink = document.querySelector(".popup__input_card_link");
const popupCardBtn = document.querySelector(".profile__plus-btn");
const popupCard = document.querySelector(".popup_type_add-card");
const popupProfielBtn = document.querySelector(".profile__pencil-btn");
const popupProfile = document.querySelector(".popup_type_edit");
const inputProfileName = document.querySelector(".popup__input_element_name");
const inputProfileJob = document.querySelector(".popup__input_element_job");
const submitProfileBtn = document.querySelector(".popup__submit-btn_profile");
const nameFromProfile = document.querySelector(".profile__name");
const jobFromProfile = document.querySelector(".profile__describe");
const btnClosePopupProfile = document.querySelector(".popup__close-btn_type_profile");
const btnClosePopupCard = document.querySelector(".popup__close-btn_type_card");
const popupImg = document.querySelector(".popup_type_img");
const btnClosePopupImg = document.querySelector(".popup__close-btn_type_img");
const BtnsCommonClose = document.querySelectorAll(".popup__close-btn");
const imgPopupImg = document.querySelector(".popup__img");
const popupCaption = document.querySelector(".popup__caption");
const formPopupProfile = document.querySelector(".popup__edit-form");
const formPopupCard = document.querySelector(".popup__add-form");

// funtions

function createCard(cardData) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(".elements__title").textContent = cardData.name;
  const cardImg = card.querySelector(".elements__img");
  cardImg.src = cardData.link;
  cardImg.alt = cardData.name;
  card.querySelector(".elements__delete-btn").addEventListener("click", () => {
    card.remove();
  });
  const likeCardBtn = card.querySelector(".elements__like-btn");
  likeCardBtn.addEventListener("click", () => {
    likeCardBtn.classList.toggle("elements__like-btn_active");
  });
  const imgCard = card.querySelector(".elements__img");
  imgCard.addEventListener("click", () => {
    imgPopupImg.src = cardImg.src;
    imgPopupImg.alt = cardImg.alt;
    popupCaption.textContent = cardImg.alt;
    openModal(popupImg);
  });

  return card;
}

function renderCard(renderCards) {
  const cards = renderCards.map((item) => {
    return createCard(item);
  });
  cardsContainer.prepend(...cards);
}

function openModal(modal) {
  modal.classList.add("popup_opened");
  modal.addEventListener("mousedown", closeViaOverlay);
  document.addEventListener("keydown", closeViaEscape);
}

function closeModal(modal) {
  modal.classList.remove("popup_opened");
  modal.removeEventListener("mousedown", closeViaOverlay);
  document.removeEventListener("keydown", closeViaEscape);
}

function closeViaEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_opened");
    closeModal(openedModal);
  }
}

function closeViaOverlay(evt) {
  const openedModal = document.querySelector(".popup_opened");
  if (evt.target === openedModal) {
    closeModal(openedModal);
  }
}

function cleanPopupCardInput() {
  closeModal(popupCard);
  resetFormInputs(formPopupCard);
}

function openProfilePopup() {
  openModal(popupProfile);
  signProfileInputs();
}
function signProfileInputs() {
  inputProfileName.value = nameFromProfile.textContent;
  inputProfileJob.value = jobFromProfile.textContent;
}

function resetFormInputs(form) {
  form.reset();
}

BtnsCommonClose.forEach((button) => {
  const modal = button.closest(".popup");
  button.addEventListener("click", () => closeModal(modal));
});

renderCard(initialCards);

// listeners

popupCardBtn.addEventListener("click", () => {
  openModal(popupCard);
});

popupProfielBtn.addEventListener("click", openProfilePopup);

formPopupCard.addEventListener("submit", (event) => {
  event.preventDefault();
  disableButton(sumbitBtnCard, "popup__submit-btn_disabled");
  const title = inputCardTitle.value;
  const link = inputCardLink.value;
  const card = createCard({ name: title, link: link });
  cardsContainer.prepend(card);
  cleanPopupCardInput();
});

formPopupProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  disableButton(submitProfileBtn, "popup__submit-btn_disabled"); // считаю, что эта строчка нужна, так как без этой строки можно отправлять кучу раз одинаковые данные тем самый нагружать сайт Юрий Абарцумян просил это учитывать по возможности
  nameFromProfile.textContent = inputProfileName.value;
  jobFromProfile.textContent = inputProfileJob.value;
  closeModal(popupProfile);
});
