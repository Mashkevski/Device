// "use strict";
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var closeButtons = document.querySelectorAll('.close');
var writeUsPopup = document.querySelector('.write-us');
var writeUsButton = document.querySelector('.contacts .button');
var nameInput = document.querySelector('#name');
var mapPopup = document.querySelector('.map');
var miniMap = document.querySelector('.mini-map');
var storage = "";
var isStorageSupport = true;

try {
  storage = localStorage.getItem("login");
} catch(err) {
  isStorageSupport = false;
}

var closePopup = function () {
  var popup = document.querySelector('.modal-show');
  popup.classList.remove('modal-show');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  evt.preventDefault();
  if(evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function (popup) {
  popup.classList.add('modal-show');
  document.addEventListener('keydown', onPopupEscPress);
};

var addClickEventListener = function () {
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function () {
      closePopup();
    });
  }
};

writeUsButton.addEventListener('click', function () {
  openPopup(writeUsPopup);
  nameInput.focus();
});

miniMap.addEventListener('click', function () {
  openPopup(mapPopup);
});

addClickEventListener();
