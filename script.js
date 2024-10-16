// Texts to be typed and erased
const text1 = "Chelsea Richards Architects";
const text2 = "INNOVATING LEGACY";
let index = 0;
let currentText = text1;

// Function to type text
function typeEffect() {
    const typingText = document.getElementById("typing-text");
    
    // Type the current text
    if (index < currentText.length) {
        typingText.innerHTML += currentText.charAt(index);
        index++;
        setTimeout(typeEffect, 35); // Adjust speed as needed
    } else if (currentText === text1) {
        setTimeout(deleteEffect, 2000); // Delay before starting to delete
    } else {
        setTimeout(moveLogo, 1000); // Delay before moving the logo after typing text2
    }
}

// Function to delete text
function deleteEffect() {
    const typingText = document.getElementById("typing-text");
    
    // Delete the current text
    if (index > 0) {
        typingText.innerHTML = currentText.substring(0, index - 1);
        index--;
        setTimeout(deleteEffect, 40); // Adjust speed as needed
    } else {
        // Switch to the second text
        currentText = text2;
        index = 0; // Reset index for new text
        typeEffect(); // Start typing the second text
    }
}

// Function to move logo
function moveLogo() {
    const logo = document.querySelector('.logo h1');
    logo.classList.add('move-up'); // Moves the logo into the navbar
    setTimeout(showPage, 1000); // Delay before showing the rest of the page
}

// Function to show main content
function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.querySelector('.navbar').style.display = "flex";
    document.querySelector('.hero').style.opacity = 1;
    document.querySelector('.mission').style.opacity = 1;
    document.querySelector('.portfolio').style.opacity = 1;
    document.querySelector('footer').style.opacity = 1;
}

// Start the typewriter effect on page load
window.onload = function() {
    setTimeout(typeEffect, 500); // Start typing after a slight delay
};
