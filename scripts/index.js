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

  function renderCard () {
    initialCards.forEach((item) => {
       const card = template.cloneNode(true);
       card.querySelector(".elements__title").textContent = item.name;
       card.querySelector(".elements__img").src = item.link;
       cardList.prepend(card)
    })
  };
  renderCard();