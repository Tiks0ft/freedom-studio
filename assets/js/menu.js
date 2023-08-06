const menu = document.querySelector('.menu')
document.querySelector('#menu').addEventListener('click', function (e) {
   menu.classList.add('menu-opened')
})
const closeMenu = () => {
    menu.classList.remove('menu-opened')
}