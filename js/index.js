
const heroBg = document.querySelector('.hero-wrapper-bg')

window.addEventListener('scroll', () => {
  amount = 1 - (scrollY / screen.height) * 3
  
  if (amount >= 0.1) {
    heroBg.style.transform = `translate(-50%, -50%) scale(${amount})`
  } 
  
  if (amount < 0.2) {
    heroBg.style.transform = `translate(-50%, -50%) scale(0)`
  }
})