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
  const closePopupProfileBtn = document.querySelector(".popup__close-btn_type_profile");
  const closePopupCardBtn = document.querySelector(".popup__close-btn_type_card");



  function renderCard (items) {
    const cards = items.map((item) => {
    
       return createCard(item);
    })
    cardList.prepend(...cards);
  };
  renderCard(initialCards);

  function createCard(item){
    const card = template.cloneNode(true);
       card.querySelector(".elements__title").textContent = item.name;
       card.querySelector(".elements__img").src = item.link;
       card.querySelector(".elements__img").alt = item.name;
       card.querySelector(".elements__delete-btn").addEventListener("click", () => {
        card.remove()
       });
       const likeCardBtn = card.querySelector(".elements__like-btn");
       likeCardBtn.addEventListener("click", () => {
        likeCardBtn.classList.toggle("elements__like-btn_active")
       });
       
       return card;
  };

  function openPopupCard() {
    popupCard.classList.add("popup_opened");
  };

  function openPopupProfile() {
    popupProfile.classList.add("popup_opened");
    inputProfileName.value = nameFromProfile.textContent;
    inputProfileJob.value = jobFromProfile.textContent;
  };

  function closePopupProfile() {
    popupProfile.classList.remove("popup_opened");
  };
  function closePopupCard() {
    popupCard.classList.remove("popup_opened");
    inputCardTitle.value = "";
    inputCardLink.value = "";
  };

  

  closePopupProfileBtn.addEventListener("click", closePopupProfile);

  closePopupCardBtn.addEventListener("click", closePopupCard);

  popupProfielBtn.addEventListener("click", openPopupProfile);

  popupCardBtn.addEventListener("click", openPopupCard);

  sumbitBtnCard.addEventListener("click", (event) =>{
    event.preventDefault();
    const title = inputCardTitle.value;
    const link = inputCardLink.value;
    const card = createCard({name: title, link: link});
    cardList.prepend(card);
    closePopupCard();
  });

  submitProfileBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    nameFromProfile.textContent = inputProfileName.value;
    jobFromProfile.textContent = inputProfileJob.value;
    closePopupProfile();
  });
