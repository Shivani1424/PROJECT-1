
document.addEventListener("DOMContentLoaded", function () {
const scrollWrapper = document.getElementById("scroll-wrapper");

// Duplicate the content to create a smooth infinite loop
scrollWrapper.innerHTML += scrollWrapper.innerHTML;

// Start GSAP animation
let scrollAnimation = gsap.to(scrollWrapper, {
    y: "-50%", // Moves half the content upward
    duration: 15, // Adjust speed for smooth effect
    ease: "none",
    repeat: -1 // Infinite loop
});

// Pause scrolling when hovering over a block
document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseenter", () => scrollAnimation.pause());
    box.addEventListener("mouseleave", () => scrollAnimation.resume());
});
});



