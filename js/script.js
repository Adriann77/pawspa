const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

const handleNav = () =>{
     hamburger.classList.toggle('hamburger--active')
}

const navList = () =>{
     nav.classList.toggle('nav--active')
}

hamburger.addEventListener('click', handleNav)
hamburger.addEventListener('click', navList)

