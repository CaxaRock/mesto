import {initialCards} from "./cardsValue.js"

// const
  const template = document.querySelector("#template__card").content.querySelector(".elements__item");
  const cardList = document.querySelector(".elements__item-list");
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
  const imgPopupImg = document.querySelector(".popup__img");
  const popupCaption = document.querySelector(".popup__caption");
  const formPopupProfile = document.querySelector(".popup__edit-form");
  const formPopupCard = document.querySelector(".popup__add-form")

// funtions

  function createCard(item){
    const card = template.cloneNode(true);
       card.querySelector(".elements__title").textContent = item.name;
       const cardImg = card.querySelector(".elements__img");
       cardImg.src = item.link;
       cardImg.alt = item.name;
       card.querySelector(".elements__delete-btn").addEventListener("click", () => {
        card.remove()
       });
       const likeCardBtn = card.querySelector(".elements__like-btn");
       likeCardBtn.addEventListener("click", () => {
        likeCardBtn.classList.toggle("elements__like-btn_active")
       });
       const imgCard = card.querySelector(".elements__img");
       imgCard.addEventListener("click", () => {
        imgPopupImg.src = cardImg.src
        imgPopupImg.alt = cardImg.alt
        popupCaption.textContent = cardImg.alt
        openModal(popupImg)
       });
       
       return card;
  }

  function renderCard (items) {
    const cards = items.map((item) => {
    
       return createCard(item);
    })
    cardList.prepend(...cards);
  }
 
  function openModal(modal) {
    modal.classList.add("popup_opened");
  }

  function closeModal(modal) {
    modal.classList.remove("popup_opened");
  }

  function cleanPopupCardInput() {
    closeModal(popupCard)
    inputCardTitle.value = "";
    inputCardLink.value = "";
  }

  function getInfoForInput () {
    openModal(popupProfile)
    inputProfileName.value = nameFromProfile.textContent;
    inputProfileJob.value = jobFromProfile.textContent;
  }

  renderCard(initialCards);

  // listeners

  popupCardBtn.addEventListener("click", () => openModal(popupCard));
  
  btnClosePopupImg.addEventListener("click", () => closeModal(popupImg));

  btnClosePopupProfile.addEventListener("click", () => closeModal(popupProfile));

  popupProfielBtn.addEventListener("click", getInfoForInput);

  btnClosePopupCard.addEventListener("click", () => closeModal(popupCard));

  popupProfielBtn.addEventListener("click", () => openModal(popupProfile));

  formPopupCard.addEventListener("submit", (event) =>{
    event.preventDefault();
    disableButton(sumbitBtnCard, "popup__button_disabled");
    const title = inputCardTitle.value;
    const link = inputCardLink.value;
    const card = createCard({name: title, link: link});
    cardList.prepend(card);
    cleanPopupCardInput();
  });

  formPopupProfile.addEventListener("submit", (event) =>{
    event.preventDefault();
    disableButton(submitProfileBtn, "popup__button_disabled");
    nameFromProfile.textContent = inputProfileName.value;
    jobFromProfile.textContent = inputProfileJob.value;
    closeModal(popupProfile);
  });

  popupProfile.addEventListener("click", function(event) {
    if (event.target === event.currentTarget) {
      closeModal(popupProfile)
    }
  })

  popupCard.addEventListener("click", function(event) {
    if (event.target === event.currentTarget) {
      closeModal(popupCard)
    }
  })

  popupImg.addEventListener("click", function(event) {
    if (event.target === event.currentTarget) {
      closeModal(popupImg)
    }
  })