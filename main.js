const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let isOpen = false;

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("slide-in-anim");
    mobileMenu.classList.remove("slide-out-anim");
    if (!isOpen) {
        mobileMenu.classList.add("slide-in-anim");
        isOpen = true;
    } else {
        mobileMenu.classList.add("slide-out-anim");
        isOpen = false;
    }
})