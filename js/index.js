

// Hero inverted bg disappearing act

// const heroBg = document.querySelector('.hero-wrapper-bg')

// window.addEventListener('scroll', () => {
//   console.log('hi')
//   amount = 1 - (scrollY / screen.height) * 3
  
//   if (amount >= 0.1) {
//     heroBg.style.transform = `translate(-0%, -50%) scale(${amount})`
//   } 
  
//   if (amount < 0.2) {
//     heroBg.style.transform = `translate(-0%, -50%) scale(0)`
//   }
// })





// Nav Custom Cursor thingy

const mainNav = document.querySelector('.menus')
const menuHighlight = document.querySelector('.menu-highlight') 

mainNav.addEventListener('mousemove', (e) => {
    menuHighlight.style.top = `${e.clientY}px`
    menuHighlight.style.left = `${e.clientX-20}px`
})

mainNav.addEventListener('mouseout', () => {
  menuHighlight.style.top = '-10vh'
  menuHighlight.style.left = '-10vw'
})






// Portfolio Accordion

const portfolioItems = document.querySelectorAll('.portfolio-item')

const maxHeight = getComputedStyle(
  document.querySelector('.portfolio-accordion') 
).getPropertyValue('--max-height')

portfolioItems.forEach( item => {
  item.addEventListener('click', () => showPortfolioItem(item) )
}) 

function showPortfolioItem(currentItem) {

  if( currentItem.classList.contains('portfolio-item-active') ) {
    currentItem.classList.remove('portfolio-item-active')
    return
  }

  portfolioItems.forEach( item => {
    item.classList.remove('portfolio-item-active')
  } )

  currentItem.classList.add('portfolio-item-active')
}




// Portfolio item animations

const portfolioAccordion = document.querySelector('.portfolio-accordion')


const portolioObserverOptions = {
  root : null,
  threshold : 0,
  rootMargin : "5% 0px 0px 0px"
}

const portfolioObserver = new IntersectionObserver( function(entries, observer) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        portfolioAccordion.classList.add('portfolio-accordion-animate')
      } else {
        portfolioAccordion.classList.remove('portfolio-accordion-animate')
      }
      
  })
}, portolioObserverOptions)

portfolioObserver.observe(portfolioAccordion)


