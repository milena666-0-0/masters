"use strict";

window.addEventListener('DOMContentLoaded', function () {
  // // форма для логина
  // let logInOpen = document.querySelector('.header__links-login');
  // let submitBtn = document.querySelector('.header__form-btn');
  // let form = document.querySelector('.header__form');
  // let inputs = document.querySelectorAll('.header__form input')
  // let inputName = document.querySelector('.header__form-inputName');
  // let inputPas = document.querySelector('.header__form-inputPas');
  // let error = document.querySelector('.header__form-error');
  // logInOpen.addEventListener('click', () => {
  //     document.querySelector('.header__form-container')
  //         .classList.toggle('header__form-container--active');
  // })
  // form.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     // formStopSubmiting();
  //     if (inputName.value == '' || inputPas.value == '') {
  //         alert('Введите имя или пароль');
  //     } else {
  //         alert(`Добро пожаловать, ${inputName.value}`)
  //     }
  // })
  // function formStopSubmiting() {
  //     if (error.hidden) {
  //         return;
  //     } else {
  //         alert('Неверный email');
  //     }
  // }
  // function focusBlur() {
  //     inputs.forEach((input) => {
  //         input.onfocus = function() {
  //             this.style.border = "1px solid #000";
  //         }
  //         input.onblur = function() {
  //             this.style.border = "none";
  //         }
  //     })
  // }
  // function inputPasProcessing() {
  //     inputPas.onfocus = function() {
  //         this.style.border = "1px solid #000";
  //         error.style.display = 'none';
  //     }
  //     inputPas.onblur = function() {
  //         if (!this.value.includes('@') || !this.value.match(/[A-Z]/)) {
  //             this.style.border = "1px solid red";
  //             error.style.display = 'block';
  //         } else {
  //             this.style.border = "none";
  //             error.style.display = 'none';
  //         }
  //     }
  // }
  // function inputNameProcessing() {
  //     inputName.onblur = function() {
  //         let fullName = inputName.value.split(' ');
  //         fullName.map(str => str.charAt(0).toUpperCase()).join(' ');
  //         console.log(fullName);
  //     }
  // }
  // focusBlur();
  // inputPasProcessing();
  // табы
  var tabs = document.querySelectorAll('.header__tab-card');
  var tabsItems = document.querySelectorAll('.header__tab-services');
  var tabsHead = document.querySelector('.header__tab-head');

  function hideTabs() {
    tabs.forEach(function (tab) {
      tab.classList.add('hide');
      tab.classList.remove('show');
    });
    tabsItems.forEach(function (item) {
      item.classList.remove('header__tab-services--active');
    });
  }

  function showTabs() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabs[i].classList.add('show');
    tabs[i].classList.remove('hide');
    tabsItems[i].classList.add('header__tab-services--active');
  }

  hideTabs();
  showTabs(i = 0);
  tabsHead.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.classList.contains('header__tab-services')) {
      tabsItems.forEach(function (item, i) {
        if (target == item) {
          hideTabs();
          showTabs(i);
        }
      });
    }
  });
});