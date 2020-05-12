let menuButton = document.querySelector(".menu-button")
let menuList = document.querySelector(".menu-list")
let menuItem = document.querySelectorAll(".menu-item")
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")
menuButton.addEventListener("click", ()=>{
    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle("menu-item-active")
    }
    menuList.classList.toggle("menu-list-active")
    line2.classList.toggle("line2-active")
    line1.classList.toggle("line1-active")
    line3.classList.toggle("line3-active")
})
