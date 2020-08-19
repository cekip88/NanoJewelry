
document.querySelector('.head-burger').addEventListener('click',function (e) {
    let cont = document.querySelector('header');
    cont.classList.toggle('head-nav-show')
});

function headScrolled() {
    if(window.pageYOffset){
        if(!document.querySelector('.head').classList.contains('head-scrolled')){
            document.querySelector('.head').classList.add('head-scrolled')
        }
    } else {
        if(document.querySelector('.head').classList.contains('head-scrolled')){
            document.querySelector('.head').classList.remove('head-scrolled')
        }
    }
}
headScrolled();
window.addEventListener('scroll',function (e) {
    headScrolled();
});

$('.real-list').slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 0,
            slidesToShow: 1
        },{
            breakpoint: 768,
            slidesToShow: 2
        },{
            breakpoint: 1200,
            slidesToShow: 3
        }
    ]
});
