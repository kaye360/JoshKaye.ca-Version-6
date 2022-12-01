
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')

console.log(body)

mobileMenuBtn.addEventListener('click', () => {
  if( body.classList.contains('mobile-menu-is-clicked') ) {
    body.classList.add('mobile-menu-is-hidden')
    body.classList.remove('mobile-menu-is-clicked')
  } else {
    body.classList.add('mobile-menu-is-clicked')
    body.classList.remove('mobile-menu-is-hidden')
  }
})