const nav_menu = document.querySelector(".nav-menu");
const nav_toggle = document.querySelector(".nav-toggle");
const nav_menu_link = document.querySelectorAll(".nav-menu-item");
const hidden = document.querySelector(".hidden");

nav_toggle.addEventListener("click",()=>{
 nav_menu.classList.toggle("nav-menu__visible");
 hidden.classList.toggle("visible");
});

nav_menu_link.forEach(item =>{
 item.addEventListener("click",()=>{
  item.classList.toggle("nav-menu--visible");
 });
});

