"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener('DOMContentLoaded', function () {
  // // форма для логина
  var logInOpen = document.querySelector('.header__top-enter');
  var form = document.querySelector('.header__form-container');
  var inputs = document.querySelectorAll('.header__form input');
  var name = document.querySelector('.header__form-name');
  var email = document.querySelector('.header__form-email');
  var error = document.querySelector('.header__form-error');
  logInOpen.addEventListener('click', function () {
    document.querySelector('.header__form-container').classList.toggle('header__form-container--active');
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (name.value == '' || email.value == '') {
      if (name.value == '' && email.value == '') {
        email.style.border = "2px solid red";
        name.style.border = "2px solid red";
        error.style.display = 'block';
        console.log(1);
        return false;
      } else if (email.value == '' || !email.value.includes('@')) {
        name.style.border = "none";
        email.style.border = "2px solid red";
        error.style.display = 'block';
        console.log(2);
        return false;
      } else if (name.value == '') {
        name.style.border = "2px solid red";
        email.style.border = "none";
        error.style.display = 'block';
        console.log(3);
        return false;
      }

      email.style.border = "none";
      name.style.border = "none";
      error.style.display = 'none';
    } else {
      email.style.border = "none";
      name.style.border = "none";
      error.style.display = 'none';
      alert("\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ".concat(name.value));
    } // inputPas.onfocus = function() {
    //     this.style.border = "2px solid #000";
    //     error.style.display = 'none';
    // }
    // let fullName = inputName.value.split(' ');
    // fullName.map(str => str.charAt(0).toUpperCase()).join(' ');
    // console.log(fullName);
    // if (!email.value.includes('@') || !email.value.match(/[A-Z]/)) {
    //     email.style.border = "2px solid red";
    //     error.style.display = 'block';
    //     return false;
    // } else if (error) {
    //     return false;
    // } else {
    //     email.style.border = "none";
    //     error.style.display = 'none';
    // }
    // if (name.value == '' || email.value == '') {
    //     // alert('Введите имя или пароль');
    //     return false;
    // } else {
    //     alert(`Добро пожаловать, ${name.value}`)
    // }

  }); // табы

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
  }); // больше объявлений

  var AdsCard =
  /*#__PURE__*/
  function () {
    function AdsCard(src1, src2, src3, title, text, price, parentSelector) {
      _classCallCheck(this, AdsCard);

      this.src1 = src1;
      this.src2 = src2;
      this.src3 = src3;
      this.title = title;
      this.text = text;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
    }

    _createClass(AdsCard, [{
      key: "render",
      value: function render() {
        var el = document.createElement('div');
        el.innerHTML = "\n            <div class=\"ads__card\">\n            <div class=\"ads__card-info\">\n                <div class=\"ads__card-head\">\n                    <h3 class=\"ads__card-title\">".concat(this.title, "</h3>\n                    <div class=\"ads__card-stars\">\n                        <img class=\"ads__card-star\" src=").concat(this.src1, " alt=\"star\">\n                        <img class=\"ads__card-star\" src=").concat(this.src2, " alt=\"star\">\n                        <img class=\"ads__card-star\" src=").concat(this.src3, " alt=\"star\">\n                    </div>\n                </div>\n                <div class=\"ads__card-text\">\n                    <p>\n                        ").concat(this.text, "<span class=\"ads__card-bold\">").concat(this.price, "</span>\n                    </p>\n\n                </div>\n            </div>\n            <div class=\"card-btn ads__card-btn\">\n                <button class=\"ads__card-btn\">\u0412\u044B\u0431\u0440\u0430\u0442\u044C</button>\n            </div>\n        </div>\n            ");
        this.parent.append(el);
      }
    }]);

    return AdsCard;
  }();

  new AdsCard('"img/find/fullstar.png"', '"img/find/fullstar.png"', '"img/find/emptystar.png"', 'Компания “CleanClean”', 'Профессиональная команда “CleanClean” занимается уборкой помещений уже 6 лет. За это время мы собрали множество положительных отзывов. Работаем 24 часа без выходных.Работы любой сложности.', ' От 50BYN за 1 кв.м', '.ads__row').render();
  new AdsCard('"img/find/fullstar.png"', '"img/find/emptystar.png"', '"img/find/emptystar.png"', 'Светлана Н.В.', 'Здравствуйте. Занимаюсь уборкой помещений уже 10 лет, работаю в любое время пт.-пн. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и няни одновременно.', ' От 70BYN за 1 услугу', '.ads__row').render();
  new AdsCard('"img/find/fullstar.png"', '"img/find/fullstar.png"', '"img/find/fullstar.png"', 'Людмила Васильева', 'Здравствуйте. Занимаюсь уборкой помещений уже 100 лет, работаю в любое время без выходных. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и сиделки одновременно.', ' От 51BYN за 1 услугу', '.ads__row').render();
  new AdsCard('"img/find/fullstar.png"', '"img/find/fullstar.png"', '"img/find/fullstar.png"', 'Компания “Чистый дом”', 'Наша компания готова в любое время убрать дом любой площади всего за 2 часа. В услугу входит: мытье полов, уборка пыли, чистка мебели, ковров, мытье стекол и д.р. Стоимость услуги:', ' от 15BYN за 1 кв.м', '.ads__row').render();
  new AdsCard('"img/find/fullstar.png"', '"img/find/fullstar.png"', '"img/find/emptystar.png"', 'Компания “CleanClean”', 'Профессиональная команда “CleanClean” занимается уборкой помещений уже 6 лет. За это время мы собрали множество положительных отзывов. Работаем 24 часа без выходных.Работы любой сложности.', ' От 50BYN за 1 кв.м', '.ads__card-more').render();
  new AdsCard('"img/find/fullstar.png"', '"img/find/emptystar.png"', '"img/find/emptystar.png"', 'Светлана Н.В.', 'Здравствуйте. Занимаюсь уборкой помещений уже 10 лет, работаю в любое время пт.-пн. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и няни одновременно.', ' От 70BYN за 1 услугу', '.ads__card-more').render();
  new AdsCard('"img/find/fullstar.png"', '"img/find/fullstar.png"', '"img/find/fullstar.png"', 'Людмила Васильева', 'Здравствуйте. Занимаюсь уборкой помещений уже 100 лет, работаю в любое время без выходных. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и сиделки одновременно.', ' От 51BYN за 1 услугу', '.ads__card-more').render();
  new AdsCard('"img/find/fullstar.png"', '"img/find/fullstar.png"', '"img/find/fullstar.png"', 'Компания “Чистый дом”', 'Наша компания готова в любое время убрать дом любой площади всего за 2 часа. В услугу входит: мытье полов, уборка пыли, чистка мебели, ковров, мытье стекол и д.р. Стоимость услуги:', ' от 15BYN за 1 кв.м', '.ads__card-more').render(); // let adsMore = document.querySelector('.ads__card-more');
  // let moreBtn = document.querySelector('.ads__more-btn');

  var moreBtn =
  /*#__PURE__*/
  function () {
    function moreBtn(parent, btn) {
      _classCallCheck(this, moreBtn);

      this.parent = document.querySelector(parent);
      this.btn = document.querySelector(btn);
    }

    _createClass(moreBtn, [{
      key: "workBtn",
      value: function workBtn() {
        var _this = this;

        this.btn.addEventListener('click', function () {
          if (_this.parent.classList.contains('hide')) {
            _this.parent.classList.add('show');

            _this.parent.classList.remove('hide');

            _this.btn.style.transform = "rotate(180deg)";
          } else {
            _this.parent.classList.remove('show');

            _this.parent.classList.add('hide');

            _this.btn.style.transform = "rotate(360deg)";
          }
        });
      }
    }]);

    return moreBtn;
  }();

  new moreBtn('.ads__card-more', '.ads__more-btn').workBtn(); // moreBtn.addEventListener('click', () => {
  //     if (adsMore.classList.contains('hide')) {
  //         adsMore.classList.add('show');
  //         adsMore.classList.remove('hide');
  //         moreBtn.style.transform = "rotate(180deg)";
  //     } else {
  //         adsMore.classList.remove('show');
  //         adsMore.classList.add('hide');
  //         moreBtn.style.transform = "rotate(360deg)";
  //     }
  // });
});