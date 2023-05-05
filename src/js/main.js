const burgerBtn = document.querySelector('.navbar__burger-btn')
const mobileNav = document.querySelector('.navbar__links')



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



burgerBtn.addEventListener('click', handleMobileNav)
window.addEventListener('click', checkClick)