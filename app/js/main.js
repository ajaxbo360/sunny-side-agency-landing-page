const arrow = document.querySelector(".arrow");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const toggleMenu = document.querySelector(".toggle-menu");


hamburgerMenu.addEventListener("click", function (e) {
    if (toggleMenu.classList.contains("active")) {
        toggleMenu.classList.remove("active");
        hamburgerMenu.classList.remove("hamburger-active");
    } else {
        toggleMenu.classList.add("active");
        hamburgerMenu.classList.add("hamburger-active");
    }
    
})



// animation

const tl1 = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
const tl4 = new TimelineMax();


tl1.fromTo(arrow, .7, { top: " -1000%" }, { top: "132%", ease: Power2.easeInOut });