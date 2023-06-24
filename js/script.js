const hamburger = document.querySelector('.hamburger')

const handleNav = () =>{
     hamburger.classList.toggle('hamburger--active')
}

document.addEventListener('click', handleNav)