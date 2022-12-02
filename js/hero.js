// Show/Hide Hero on scroll

const heroObserverDiv = document.querySelector('.hero-observer')
const body = document.querySelector('body')

const navOptions = {
    root : null,
    threshold : 0,
    rootMargin : "0px 0px 0px 0px"
}

const bodyObserver = new IntersectionObserver( function(entries) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        body.classList.remove('body-state-content')
        body.classList.remove('body-state-to-content')
        body.classList.add('body-state-hero')
      } else {
        body.classList.add('body-state-to-content')
        setTimeout( () => {
          body.classList.remove('body-state-to-content')
          body.classList.remove('body-state-hero')
          body.classList.add('body-state-content')
        }, 550)
      }
      
  })
}, navOptions)

bodyObserver.observe(heroObserverDiv)

