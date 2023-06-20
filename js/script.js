new Swiper('.image-slider',{
    // БУЛЛЕТИ
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // ДЛЯ ЗМІНИ КУРСОРУ ПРИ ПЕРЕТАСКУВАННІ СЛАЙДУ
    grabCursor: true,
    // ПЕРЕКЛЮЧЕННЯ НА СЛАЙД ПРИ КЛІКУ НА НЬОГО
    slideToClickedSlide: true,
    // УПРАВЛІННЯ КЛАВІАТУРОЮ
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    // УПРАВЛІННЯ КОЛЕСОМ МИШІ
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider"
    },
    // КІЛЬКІСТЬ СЛАЙДІВ ДЛЯ ПОКАЗУ НА СТОРІНЦІ
    slidesPerView: 2.6,
    // ВІДСТУП МІЖ СЛАЙДАМИ
    spaceBetween: 18,
    loop: true,
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 18,
    //     },
    //     768: {
    //         slidesPerView: 2.6,
    //         spaceBetween: 18,
    //     },
    //     1200: {
    //         slidesPerView: 4,
    //         spaceBetween: 18,
    //     },
    // },
});



// const swiper = new Swiper('.image-slider', {
//     direction: 'horizontal',
//     loop: true,

//     slidesPerView: 1,
//     spaceBetween: 18,

//     breakpoints: {
//         768: {
//             slidesPerView: 2.6,
//             spaceBetween: 18,
//         },
//         1200: {
//             slidesPerView: 4,
//             spaceBetween: 18,
//         },
//     },
// });