const hamburger = document.querySelector('.hamburger')

const handleNav = () =>{
     hamburger.classList.toggle('hamburger--active')
}

hamburger.addEventListener('click', handleNav)