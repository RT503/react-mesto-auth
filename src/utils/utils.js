export const ESC = 'Escape';
const id = {myId: ''};

//Selectors
//Static page elem selectors
const buttonEditProfileSelector = '.profile__edit-button';
const buttonAddNewCardSelector = '.profile__add-button';
const buttonEditAvatarSelector = '.profile__avatar-button';
const cardsListSelector = '.elements__list';
//Popups selectors
const popupEditProfileSelector = '.popup_type_edit-profile';
const popupAddCardSelector = '.popup_type_add-new-card';
const popupZoomCardSelector = '.popup_type_view-image';
const popupAvatarSelector = '.popup_edit-avatar';
const popupConfirmDeleteSelector = '.popup_confirm';
//Elements
//Static page elements
const buttonEditProfileElement = document.querySelector(buttonEditProfileSelector);
const buttonAddNewCardElement = document.querySelector(buttonAddNewCardSelector);
const buttonEditAvatarElement = document.querySelector(buttonEditAvatarSelector);
const cardsListElement = document.querySelector(cardsListSelector);
const cardTemplateElement = document.querySelector('#card__template');
//Popup edit profile elements
const popupEditProfileElement = document.querySelector(popupEditProfileSelector);
const popupEditProfileNameInputElement = popupEditProfileElement.querySelector('.popup__input_type_name');
const popupEditProfileAboutInputElement = popupEditProfileElement.querySelector('.popup__input_type_status');
//Popup add new card elements
const popupAddCardElement = document.querySelector(popupAddCardSelector);
const popupAddCardNameInputElement = popupAddCardElement.querySelector('.popup__input_type_name');
const popupAddCardLinkInputElement = popupAddCardElement.querySelector('.popup__input_type_picture-link');
//Popup zoom card
const popupZoomCardElement = document.querySelector(popupZoomCardSelector);
//Popup avatar
const popupAvatarElement = document.querySelector(popupAvatarSelector);
//Popup Confirm delete
const popupConfirmDeleteElement = document.querySelector(popupConfirmDeleteSelector);


const userInfoSelectors = {
  nameInputSelector: '.profile__name',
  infoInputSelector: '.profile__status',
  userAvatarSelector: '.profile__avatar'
}

const validateSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonElement: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  errorSelector: '.popup__input-error'
}

 const cardSelectors = {
  templateSelector: '.card__template',
  cardSelector: '.card',
  titleSelector: '.card__title',
  imageSelector: '.card__image',
  binBtnSelector: '.card__remove-button',
  likeBtnSelector: '.card__like-button',
  likesCountSelector: '.card__counter',
  likedClass: 'card__like-button_active'
};

export {
  buttonEditProfileSelector,
  buttonAddNewCardSelector,
  buttonEditAvatarSelector,
  cardsListSelector,
  popupEditProfileSelector,
  popupAddCardSelector,
  popupZoomCardSelector,
  popupAvatarSelector,
  popupConfirmDeleteSelector,
  buttonEditProfileElement,
  buttonAddNewCardElement,
  buttonEditAvatarElement,
  cardsListElement,
  cardTemplateElement,
  popupEditProfileElement,
  popupEditProfileNameInputElement,
  popupEditProfileAboutInputElement,
  popupAddCardElement,
  popupAddCardNameInputElement,
  popupAddCardLinkInputElement,
  popupZoomCardElement,
  popupAvatarElement,
  popupConfirmDeleteElement,
  userInfoSelectors,
  validateSelectors,
  cardSelectors,
  id
}
