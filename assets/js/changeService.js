const services = [
    {
        description: "Разработка сайта под ключ либо по предоставленному вами макету, от визитки до полноценного маркетплейса.",
        price: 20000
    },
    {
        description: "Макетирование сайта, дизайн шаблонов, презентация.",
        price: 15000
    },
    {
        description: "Оформление группы для ваших услуг в соц.сетях.",
        price: 10000
    }
]
document.querySelector('#services').addEventListener('change', (e)=> {
    changeService(e.target.selectedIndex - 1)
})
const changeService = (obj) => {
    setInFo(services[obj])
}
const setInFo  = (obj) => {
  $('.order__descr p').text(obj.description)
  $('.order__descr span').text(`${obj.price} ₽`)
}