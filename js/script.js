const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')

const handleNav = () => {
  hamburger.classList.toggle('hamburger--active')
}

const navList = () => {
  nav.classList.toggle('nav--active')
}

hamburger.addEventListener('click', handleNav)
hamburger.addEventListener('click', navList)

navLinks.forEach(item =>
  item.addEventListener('click', () => nav.classList.remove('nav--active'))
)
