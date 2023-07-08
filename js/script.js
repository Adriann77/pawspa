const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__item')
const BgBtn = document.querySelector('.header__btn')
const footerYear = document.querySelector('.footer-year')
const currYear =  new Date().getFullYear();
const navBackground = document.querySelector('.black-line')

console.log(currYear);

const handleNav = () => {
  hamburger.classList.toggle('hamburger--active')
}

const navList = () => {
  nav.classList.toggle('nav--active')
}

const hideBtn = () => {
  BgBtn.classList.toggle('hide')
}

hamburger.addEventListener('click', handleNav)
hamburger.addEventListener('click', navList)
hamburger.addEventListener('click', hideBtn)

navLinks.forEach(item =>
  item.addEventListener('click', () => nav.classList.remove('nav--active'))
)

footerYear.textContent =  currYear


const addShadow = () => {
  if(window.scrollY > 105){
    navBackground.classList.add('on')
  }else{
    navBackground.classList.remove('on')
  }
   
}


window.addEventListener('scroll', addShadow)