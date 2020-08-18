
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