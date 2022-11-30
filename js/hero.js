// Show/Hide Hero on scroll

const headerObserverDiv = document.querySelector('.header-observer')
const hero = document.querySelector('.main-header-wrapper')



const navOptions = {
    root : null,
    threshold : 0,
    rootMargin : "0px 0px 0px 0px"
}

const headerObserver = new IntersectionObserver( function(entries) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        hero.classList.remove('main-header-wrapper-hidden')
        hero.classList.add('main-header-wrapper')
      } else {
        hero.classList.add('main-header-wrapper-is-closing')
        setTimeout( () => {
          hero.classList.remove('main-header-wrapper-is-closing')
          hero.classList.remove('main-header-wrapper')
          hero.classList.add('main-header-wrapper-hidden')
        }, 550)
      }
      
  })
}, navOptions)

headerObserver.observe(headerObserverDiv)

