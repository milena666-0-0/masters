window.addEventListener('DOMContentLoaded', () => {

    // форма для входа

    let logInOpen = document.querySelector('.header__top-enter');
    let form = document.querySelector('.header__form-container');
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

    // скролл до элементов

    class ScrollTo {
        constructor(target, el) {
            this.target = document.querySelector(target);
            this.el = document.querySelector(el);
        }
        scroll() {
            this.target.addEventListener('click', (e) => {
                e.preventDefault();
                let coords = this.el.getBoundingClientRect();
                window.scrollTo({
                    top: coords.y,
                    left: coords.x,
                    behavior: "smooth"
                });
            })
        }
    }

    new ScrollTo(
        ".services",
        ".do-section"
    ).scroll();

    new ScrollTo(
        ".cont",
        ".contacts"
    ).scroll();

    // модалка

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

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    })

})