"use strict"

// Mobile Menu Button

const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const body = document.body

mobileMenuBtn.addEventListener('click', () => {

  if(body.classList.contains('mobile-menu-is-active')) {
    body.classList.remove('mobile-menu-is-active')
  } else {
    body.classList.add('mobile-menu-is-active')
  }

})


// Mobile Menu Links
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach( link => {
  link.addEventListener('click', () => {
    body.classList.remove('mobile-menu-is-active')
  })
})


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



// Email Handler

const emailForm = document.querySelector('#email-form') 
const emailResponse = document.querySelector('#email-response')

emailForm.addEventListener( 'submit', e => sendEmail(e) )

async function sendEmail(e) {
  e.preventDefault()
  emailResponse.innerHTML = `
  <img src='./img/icons/email-loading.svg' alt="">
  Sending...
  `

  const data = {
    name : e.target.name.value,
    email : e.target.email.value,
    phone : e.target.phone.value,
    message : e.target.message.value
  }

  const postReqOptions = {
    method : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify(data)
  }

  try {

    const res = await fetch('./email-handler.php', postReqOptions)
    const json = await res.json()

    emailResponse.innerHTML = json.type === 'success'
      ? `Email sent. Thanks ${json.name}!`
      : 'Something went wrong, try again'
    
  } catch(e) {
    console.log('There was an error', e)
  }
}

