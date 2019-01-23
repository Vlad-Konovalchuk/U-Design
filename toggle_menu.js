const toggleBurger = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobileMenu');
toggleBurger.addEventListener('click',()=>{
        mobileMenu.classList.toggle('active')
})
