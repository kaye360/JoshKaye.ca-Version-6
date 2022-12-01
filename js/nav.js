
const mobileMenu = document.querySelector('.main-nav ul')
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')

mobileMenuBtn.addEventListener('click', () => {
  if( mobileMenu.classList.contains('mobile-menu-is-clicked') ) {
    mobileMenu.classList.add('mobile-menu-is-hidden')
    mobileMenu.classList.remove('mobile-menu-is-clicked')
  } else {
    mobileMenu.classList.add('mobile-menu-is-clicked')
    mobileMenu.classList.remove('mobile-menu-is-hidden')
  }
})