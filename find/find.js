window.addEventListener('DOMContentLoaded', () => {

    // // форма для логина

    let logInOpen = document.querySelector('.header__top-enter');
    let form = document.querySelector('.header__form-container');
    let inputs = document.querySelectorAll('.header__form input')
    let name = document.querySelector('.header__form-name');
    let email = document.querySelector('.header__form-email');
    let error = document.querySelector('.header__form-error');

    logInOpen.addEventListener('click', () => {

        document.querySelector('.header__form-container')
            .classList.toggle('header__form-container--active');

    })

    form.addEventListener('submit', (e) => {

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
            alert(`Добро пожаловать, ${name.value}`)

        }




        // inputPas.onfocus = function() {
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

    })




    // табы

    let tabs = document.querySelectorAll('.header__tab-card');
    let tabsItems = document.querySelectorAll('.header__tab-services');
    let tabsHead = document.querySelector('.header__tab-head');


    function hideTabs() {

        tabs.forEach(tab => {
            tab.classList.add('hide');
            tab.classList.remove('show');
        })

        tabsItems.forEach(item => {
            item.classList.remove('header__tab-services--active')
        })

    }

    function showTabs(i = 0) {
        tabs[i].classList.add('show');
        tabs[i].classList.remove('hide');
        tabsItems[i].classList.add('header__tab-services--active');
    }

    hideTabs();
    showTabs(i = 0);

    tabsHead.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.classList.contains('header__tab-services')) {

            tabsItems.forEach((item, i) => {
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            })

        }
    })

    // больше объявлений

    class AdsCard {
        constructor(src1, src2, src3, title, text, price, parentSelector) {
            this.src1 = src1;
            this.src2 = src2;
            this.src3 = src3;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
        }
        render() {
            let el = document.createElement('div');
            el.innerHTML = `
            <div class="ads__card">
            <div class="ads__card-info">
                <div class="ads__card-head">
                    <h3 class="ads__card-title">${this.title}</h3>
                    <div class="ads__card-stars">
                        <img class="ads__card-star" src=${this.src1} alt="star">
                        <img class="ads__card-star" src=${this.src2} alt="star">
                        <img class="ads__card-star" src=${this.src3} alt="star">
                    </div>
                </div>
                <div class="ads__card-text">
                    <p>
                        ${this.text}<span class="ads__card-bold">${this.price}</span>
                    </p>

                </div>
            </div>
            <div class="card-btn ads__card-btn">
            <a href="../profile/index_profile.html" target="_blank"><button class="ads__card-btn">Выбрать</button></a>
            </div>
        </div>
            `
            this.parent.append(el);
        }
    }

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        '"img/find/emptystar.png"',
        'Компания “CleanClean”',
        'Профессиональная команда “CleanClean” занимается уборкой помещений уже 6 лет. За это время мы собрали множество положительных отзывов. Работаем 24 часа без выходных.Работы любой сложности.',
        ' От 50BYN за 1 кв.м',
        '.ads__row'
    ).render();

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/emptystar.png"',
        '"img/find/emptystar.png"',
        'Светлана Н.В.',
        'Здравствуйте. Занимаюсь уборкой помещений уже 10 лет, работаю в любое время пт.-пн. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и няни одновременно.',
        ' От 70BYN за 1 услугу',
        '.ads__row'
    ).render();

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        'Людмила Васильева',
        'Здравствуйте. Занимаюсь уборкой помещений уже 100 лет, работаю в любое время без выходных. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и сиделки одновременно.',
        ' От 51BYN за 1 услугу',
        '.ads__row'
    ).render();

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        'Компания “Чистый дом”',
        'Наша компания готова в любое время убрать дом любой площади всего за 2 часа. В услугу входит: мытье полов, уборка пыли, чистка мебели, ковров, мытье стекол и д.р. Стоимость услуги:',
        ' от 15BYN за 1 кв.м',
        '.ads__row'
    ).render();

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        '"img/find/emptystar.png"',
        'Компания “CleanClean”',
        'Профессиональная команда “CleanClean” занимается уборкой помещений уже 6 лет. За это время мы собрали множество положительных отзывов. Работаем 24 часа без выходных.Работы любой сложности.',
        ' От 50BYN за 1 кв.м',
        '.ads__card-more'
    ).render();

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/emptystar.png"',
        '"img/find/emptystar.png"',
        'Светлана Н.В.',
        'Здравствуйте. Занимаюсь уборкой помещений уже 10 лет, работаю в любое время пт.-пн. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и няни одновременно.',
        ' От 70BYN за 1 услугу',
        '.ads__card-more'
    ).render();

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        'Людмила Васильева',
        'Здравствуйте. Занимаюсь уборкой помещений уже 100 лет, работаю в любое время без выходных. Ни одного плохого отзыва. Также могу оказывать услуги домашнего повара и сиделки одновременно.',
        ' От 51BYN за 1 услугу',
        '.ads__card-more'
    ).render();

    new AdsCard(
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        '"img/find/fullstar.png"',
        'Компания “Чистый дом”',
        'Наша компания готова в любое время убрать дом любой площади всего за 2 часа. В услугу входит: мытье полов, уборка пыли, чистка мебели, ковров, мытье стекол и д.р. Стоимость услуги:',
        ' от 15BYN за 1 кв.м',
        '.ads__card-more'
    ).render();


    // кнопка "больше"

    class moreBtn {
        constructor(parent, btn) {
            this.parent = document.querySelector(parent);
            this.btn = document.querySelector(btn);
        }
        workBtn() {
            this.btn.addEventListener('click', () => {
                if (this.parent.classList.contains('hide')) {
                    this.parent.classList.add('show');
                    this.parent.classList.remove('hide');
                    this.btn.style.transform = "rotate(180deg)";
                } else {
                    this.parent.classList.remove('show');
                    this.parent.classList.add('hide');
                    this.btn.style.transform = "rotate(360deg)";
                }
            });
        }
    }

    new moreBtn(
        '.ads__card-more',
        '.ads__more-btn'
    ).workBtn();


    // Кнопка для скрола вверх

    const scrollUp = document.querySelector('.scroll');
    const offset = 600;

    window.addEventListener('scroll', () => {

        if ((window.pageYOffset || document.documentElement.scrollTop) > offset) {
            scrollUp.classList.remove('hide');
        } else {
            scrollUp.classList.add('hide');
        }

    });

    scrollUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // модалка


    const sendBtn = document.querySelector('.tasks__form-btn');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__btn');
    const orderAMaster = document.querySelector('.header__top-btn');
    const modalOrder = document.querySelector('.modal__order');
    const modalOrderCloseBtn = document.querySelector('.modal__order-close');

    function showModal(item) {
        item.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal(item) {
        item.style.display = '';
        document.body.style.overflow = '';
    }

    orderAMaster.addEventListener('click', () => {
        showModal(modalOrder);
    });

    modalOrderCloseBtn.addEventListener('click', () => {
        closeModal(modalOrder);
    });

    modalOrder.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalOrder) {
            closeModal();
        }
    })


    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(modal);
    });

    modalCloseBtn.addEventListener('click', () => {
        closeModal(modal);
    });

    modal.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    })



})