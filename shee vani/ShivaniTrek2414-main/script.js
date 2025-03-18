
document.addEventListener("DOMContentLoaded", function () {
const scrollWrapper = document.getElementById("scroll-wrapper");

// Duplicate the content to create a smooth infinite loop
if (scrollWrapper && scrollWrapper.innerHTML.trim() !== "") {
    scrollWrapper.innerHTML += scrollWrapper.innerHTML;
}


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

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollWrapper = document.getElementById("scroll-wrapper");

    if (window.innerWidth > 768) { // Apply animation only for larger screens
        gsap.to(scrollWrapper, {
            y: "-50%",
            duration: 15,
            ease: "none",
            repeat: -1
        });
    }
});



function showError(inputId, message) {
 var existingErrorBox = document.querySelector('.error-box');
 if (existingErrorBox) existingErrorBox.remove();

 var inputElement = document.getElementById(inputId);
 var errorBox = document.createElement("div");
 errorBox.className = "error-box";
 errorBox.innerHTML = message;

 var rect = inputElement.getBoundingClientRect();
 errorBox.style.top = rect.top + window.scrollY + inputElement.offsetHeight + 5 + "px";
 errorBox.style.left = Math.min(rect.left + window.scrollX, window.innerWidth - errorBox.offsetWidth - 10) + "px";


 document.body.appendChild(errorBox);

 setTimeout(() => errorBox.remove(), 2000);
};


document.addEventListener("DOMContentLoaded", function () {
 const rightCol = document.querySelector(".rightcol");

 // Get the height of the right column
 const columnHeight = rightCol.offsetHeight;

 



document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("btn2"); // Login button
    const inputFields = document.querySelectorAll(".details"); // All input fields

    // Function to check if all inputs are filled
    function validateInputs() {
        let allFilled = true;

        inputFields.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            loginBtn.removeAttribute("disabled"); // Enable button
        } else {
            loginBtn.setAttribute("disabled", "true"); // Disable button
        }
    }

    // Attach event listeners to all input fields
    inputFields.forEach(input => {
        input.addEventListener("input", validateInputs);
    });

    // Show error if button is clicked while fields are empty
    loginBtn.addEventListener("click", function (event) {
        let allFilled = true;

        inputFields.forEach(input => {
            if (input.value.trim() === "") {
                showError(input.id, "This field is required!"); // Show error near input
                allFilled = false;
            }
        });

        if (!allFilled) {
            event.preventDefault(); // Stop redirection
        } else {
            window.location.href = "index.html"; // Redirect only if all fields are filled
        }
    });

    // Function to show error message
    function showError(inputId, message) {
        var inputElement = document.getElementById(inputId);
        var errorBox = document.createElement("div");
        errorBox.className = "error-box";
        errorBox.innerHTML = message;

        var rect = inputElement.getBoundingClientRect();
        errorBox.style.position = "absolute";
        errorBox.style.background = "red";
        errorBox.style.color = "white";
        errorBox.style.padding = "5px";
        errorBox.style.borderRadius = "5px";
        errorBox.style.top = rect.top + window.scrollY + inputElement.offsetHeight + 5 + "px";
        errorBox.style.left = rect.left + window.scrollX + "px";

        document.body.appendChild(errorBox);

        setTimeout(() => errorBox.remove(), 2000);
    }

    // Initial check in case the form has pre-filled values
    validateInputs();
});



const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide-item');
let currentIndex = 0;

function moveToNextSlide() {
    // Remove the first slide and append a new one
    slideContainer.appendChild(slides[currentIndex]);
    currentIndex = (currentIndex + 1) % slides.length;
}

function moveToPrevSlide() {
    // Add the last slide to the beginning of the container
    slideContainer.prepend(slides[currentIndex]);
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}

// Set up event listeners for the buttons
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);






