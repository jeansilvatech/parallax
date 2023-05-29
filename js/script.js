const navBar = document.querySelector('nav')
window.addEventListener('scroll', ()=>{
    navBar.classList.toggle('scroll', window.scrollY>0)    
})