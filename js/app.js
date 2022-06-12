//npm install swiper
;


if (document.querySelector('.main-slider')) {

    const mainslider = new Swiper('.main-slider', {
        autoplay: {
            delay: 5000,
        },
        speed: 800,
        // If we need pagination
        pagination: {
            el: '.main-slider__dotts',
            clickable: true,
        },
        autoheight: true,
        slidesPerView: 'auto',

    });

    let mainsliderImages = document.querySelectorAll('.main-slider__image');
    let mainsliderBullets = document.querySelectorAll('.main-slider__dotts .swiper-pagination-bullet');


    for (let i = 0; i < mainsliderImages.length; i++) {
        const mainsliderImage = mainsliderImages[i].querySelector('img').getAttribute('src');

        mainsliderBullets[i].style.backgroundImage = 'url("' + mainsliderImage + '")';

    }
}

if (document.querySelector('.products-slider')) {
    let productsSlider = new Swiper('.products-slider__item', {
        autoheight: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.products-slider__arrow_next',
            prevEl: '.products-slider__arrow_prev',
        },
        pagination: {
            el: ".products-slider__info",
            type: "fraction",
        },

    })
}



if (document.querySelector('.brands-slider__body')) {

    const brandsSlider = new Swiper('.brands-slider__body', {
        slidesPerView: 5,
        observeParents: true,
        observeParents: false,
        spaceBetween: 67,
        loop: true,
        navigation: {
            nextEl: '.brands-slider__arrow_next',
            prevEl: '.brands-slider__arrow_prev',
        },
        breakpoints: {
            1180: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 2,

            },
            320: {
                slidesPerView: 1,
            }
        }
    });
}
if (document.querySelector('.images-product__subslider')) {
    var productSubslider = new Swiper('.images-product__subslider', {
        autoheight: true,
        slidesPerView: 4,
        speed: 800,
        spaceBetween: 0,

    })
}

if (document.querySelector('.images-product__mainslider')) {
    var productMainslider = new Swiper('.images-product__mainslider', {
        autoheight: true,
        slidesPerView: 1,

        speed: 800,
        spaceBetween: 0,


        thumbs: {
            swiper: productSubslider,
        },

    })
}





;

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

/* Проверка на пользователя с мобильным */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let i = 0; i < menuArrows.length; i++) {
            const menuArrow = menuArrows[i];
            menuArrow.addEventListener('click', function(e) {
                menuArrow.parentElement.classList.toggle('_active')
            })
        }
    }

} else {
    document.body.classList.add('_pc')
}

function detectIEEdge() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

const isIeEdge = detectIEEdge();

if (isIeEdge) {
    function ibg() {
        let ibgmages = document.querySelectorAll('._ibg');
        for (let i = 0; i < ibgmages.length; i++) {


            ibgmages[i].classList.add('ibg');
        }

        let ibg = document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }


    }
    ibg();
};
const menuBody = document.querySelector('.menu__body');

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {

    iconMenu.addEventListener('click', function() {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
};
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"

"use strict";

function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function() {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function(item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function(item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function(item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function() {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function(parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function(parent, element) {
    let array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function(arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function(a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function(a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();;
// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input_hidden');
    let itemSelected = dropDownList.querySelector('.dropdown__item[data-selected]');


    if (itemSelected) {
        dropDownBtn.innerText = itemSelected.innerText;
        dropDownInput.value = itemSelected.dataset.value;
    }



    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function(e) {
        dropDownList.classList.toggle('dropdown__list_visible');
        this.classList.add('dropdown__button_active');
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function(listItem) {
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list_visible');
        });
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function(e) {
        if (e.target !== dropDownBtn) {
            dropDownBtn.classList.remove('dropdown__button_active');
            dropDownList.classList.remove('dropdown__list_visible');
        }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropDownBtn.classList.remove('dropdown__button_active');
            dropDownList.classList.remove('dropdown__list_visible');
        }
    });
});

//========================================
function increaseCount(a, b) {
    var quantityMax = b.dataset.max;
    var input = b.previousElementSibling;
    if (input.value <= --quantityMax) {
        var value = parseInt(input.value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        input.value = value;
    }

}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    if (tabs) {

        tabs.addEventListener('click', (e) => {

            if (e.target.classList.contains('tabs__btn')) {

                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => { el.classList.remove('tabs__btn_active') });
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn_active');
                tabsHandler(tabsPath);
            }

            if (e.target.classList.contains('tabs__arrow_prev')) {
                let activeBtn = document.querySelector('.tabs__btn_active');
                let activeParent = activeBtn.closest('.tabs__item');
                let previousParent = activeParent.previousElementSibling;

                if (previousParent) {
                    let prevActive = previousParent.querySelector('.tabs__btn')
                    tabsBtn.forEach(el => { el.classList.remove('tabs__btn_active') });
                    prevActive.classList.add('tabs__btn_active');

                    let path = prevActive.dataset.tabsPath;
                    tabsHandler(path);
                }
            }

            if (e.target.classList.contains('tabs__arrow_next')) {
                let activeBtn = document.querySelector('.tabs__btn_active');
                let activeParent = activeBtn.closest('.tabs__item');
                let nextParent = activeParent.nextElementSibling;

                if (nextParent) {
                    let nextActive = nextParent.querySelector('.tabs__btn');
                    tabsBtn.forEach(el => { el.classList.remove('tabs__btn_active') });
                    nextActive.classList.add('tabs__btn_active');

                    let path = nextActive.dataset.tabsPath;
                    tabsHandler(path);
                }
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => { el.classList.remove('tabs__content_active') });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content_active');
    };
});;

let slideUp = (target, duration = 500) => {

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}

/* SLIDE DOWN */
let slideDown = (target, duration = 500) => {

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}

/* TOOGLE */
var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

if (isMobile.any()) {
    let menuParents = document.querySelectorAll('.menu-page__parent a');
    for (let i = 0; i < menuParents.length; i++) {
        let menuParent = menuParents[i];
        menuParent.addEventListener('click', function(e) {
            menuParent.parentElement.classList.toggle('_active');

        });
    }

} else {
    let menuParents = document.querySelectorAll('.menu-page__parent');
    for (let i = 0; i < menuParents.length; i++) {
        let menuParent = menuParents[i];
        menuParent.addEventListener('mouseenter', function() {

            menuParent.classList.add('_active');
        });
        menuParent.addEventListener('mouseleave', function() {

            menuParent.classList.remove('_active');
        });
    }
}




let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.classList.toggle('_active');
menuPageBody.classList.toggle('_active');
slideToggle(document.getElementById("menu-page__body"), 600)
menuPageBurger.addEventListener('click', function() {
    this.classList.toggle('_active');
    menuPageBody.classList.toggle('_active');
    slideToggle(document.getElementById("menu-page__body"), 600);
});

let searchCategories = document.querySelector('.search-page__title');
searchCategories.addEventListener('click', function() {
    let searchPageList = document.querySelector('.categories-search');
    this.classList.toggle('_active');
    slideToggle(searchPageList);
});

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let i = 0; i < checkboxCategories.length; i++) {
    let checkboxCategory = checkboxCategories[i];
    checkboxCategory.addEventListener('change', function(e) {
        this.classList.toggle('_active');

        var checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');


        if (checkboxActiveCategories.length > 0) {
            searchCategories.classList.add('_categories');
            var searchQuantity = searchCategories.querySelector('.search-page__quantity');


            searchQuantity.innerHTML = searchQuantity.dataset.text + ' ' + checkboxActiveCategories.length;
        } else {
            searchCategories.classList.remove('_categories');

        }


    });
};

if (document.querySelector('.price-filter__slider')) {
    var priceSlider = document.querySelector('.price-filter__slider');

    noUiSlider.create(priceSlider, {
        start: [0, 100000],
        connect: true,
        tooltips: [wNumb({ decimals: 0, }), wNumb({ decimals: 0 })],
        range: {
            'min': [0],
            'max': [200000]
        }
    });
    var priceStart = document.querySelector('#price-start');
    var priceEnd = document.querySelector('#price-end');

    priceStart.addEventListener('change', function(e) {

        priceSlider.noUiSlider.set(priceStart.value);

    });
    priceEnd.addEventListener('change', function(e) {

        priceSlider.noUiSlider.setHandle(1, priceEnd.value, true, true);

    });

}


let spoilers = document.querySelectorAll('.section-filter__title .spoller');
let filterWrappers = document.querySelectorAll('.section-filter__body_toggle')
for (let i = 0; i < spoilers.length; i++) {
    if (!spoilers[i].classList.contains('_active')) {


        slideUp(filterWrappers[i]);
    }
}

for (let i = 0; i < spoilers.length; i++) {
    spoiler = spoilers[i];
    spoiler.addEventListener('click', function(e) {

        this.classList.toggle('_active');
        this.parentElement.classList.toggle('section-filter__title_black');
        slideToggle(filterWrappers[i]);

    });
}

if (isMobile.any() && document.querySelector('.filter__title')) {
    const filterTitle = document.querySelector('.filter__title');
    filterTitle.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            filterTitle.classList.toggle('_active');

            slideToggle(filterTitle.nextElementSibling)
        }
    });
}





;