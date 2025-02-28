
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


$(document).ready (function(){

    $("#btn2").click(function(){
        $("#leftcol header").text("LOG IN HERE");
        $("#envelope input").val("");
    });
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
 errorBox.style.left = rect.left + window.scrollX + "px";

 document.body.appendChild(errorBox);

 setTimeout(() => errorBox.remove(), 2000);
};


document.addEventListener("DOMContentLoaded", function () {
 const rightCol = document.querySelector(".rightcol");

 // Get the height of the right column
 const columnHeight = rightCol.offsetHeight;

 // Function to create a snowflake
 function createSnowflake() {
     const snowflake = document.createElement("div");
     snowflake.classList.add("snowflake");

     // Random horizontal position within the right column
     snowflake.style.left = Math.random() * rightCol.offsetWidth + "px"; // Between 0 and the column width

     // Random size for variety (between 3px to 8px)
     const size = Math.random() * 5 + 3;
     snowflake.style.width = size + "px";
     snowflake.style.height = size + "px";

     // Append snowflake to the right column
     rightCol.appendChild(snowflake);

     // Random animation duration (between 5s and 8s for falling)
     const animationDuration = Math.random() * 3 + 5; // Between 5s and 8s
     snowflake.style.animationDuration = animationDuration + "s";

     // Calculate the distance the snowflake will fall (stop at half the column height)
     const fallDistance = columnHeight / 2 + Math.random() * (columnHeight / 4); // Stop after half to three-quarters of the column height
     snowflake.style.animation = `snowfall ${animationDuration}s linear infinite`;

     // Set the stop point of the snowflake
     snowflake.style.animation = `snowfall ${animationDuration}s linear forwards`;

     // Remove the snowflake after it completes its animation
     setTimeout(() => {
         snowflake.remove();
     }, animationDuration * 1000); // Remove after animation duration
 }

 // Create snowflakes periodically (every 200ms)
 setInterval(createSnowflake, 200);
});


// Function to handle form submission and store data
function handleSubmit(event) {
 event.preventDefault(); // Prevent default form submission

 // Get form values
 var name = document.getElementById("name").value;
 var password = document.getElementById("password").value;
 var email = document.getElementById("email").value;

 // Store form data in Local Storage
 localStorage.setItem("name", name);
 localStorage.setItem("password", password);
 localStorage.setItem("email", email);

 alert("Form submitted and data stored in localStorage!");

 // Optionally, you can clear the form after submission
 document.getElementById("form").reset(); // Assuming form has id="form"
}

// Attach event listener to the form
document.getElementById("form").addEventListener("submit", handleSubmit);
var storedName = localStorage.getItem("name");
var storedPassword = localStorage.getItem("password");
var storedEmail = localStorage.getItem("email");



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






