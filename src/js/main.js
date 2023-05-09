const burgerBtn = document.querySelector('.navbar__burger-btn')
const mobileNav = document.querySelector('.navbar__links')

const footerYear = document.querySelector('.footer__copyright-year')



const handleMobileNav = () => {
    mobileNav.classList.toggle('show-nav')
}

const closeMobileNav = () => {
    mobileNav.classList.remove('show-nav')
}

const checkClick = e => {
    if (!e.target.hasAttribute('data-nav')) {
        closeMobileNav()
    }
}


const handleFooterYear = () => {
    const currentYear = new Date().getFullYear()
    
    footerYear.textContent = currentYear
}



burgerBtn.addEventListener('click', handleMobileNav)
window.addEventListener('click', checkClick)
handleFooterYear()