$(document).ready(function(){
    $('.menu-button').click(function(){
        $('.menu-buttom-open').toggle();
        $('.menu-buttom-close').toggle();
        $('.menu').toggleClass("active");
    })
});

const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 3,
    // slidesPerGroup: 3,
    spaceBetween: '24px',
});