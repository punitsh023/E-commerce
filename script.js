// Script for navigation bar
const bar = document.querySelector('.bar')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav-list')

bar.addEventListener('click', () =>{
    nav.classList.add("active")
})
close.addEventListener('click', () =>{
    nav.classList.remove("active")
})