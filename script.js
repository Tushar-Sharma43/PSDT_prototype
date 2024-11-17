// Get elements
const mainLoginBtn = document.getElementById("log-in");
const loginPage = document.getElementById("loginPage");
const hotelLogin = document.getElementById("hotel-login");
const ngoLogin = document.getElementById("ngo-login");
const individualLogin = document.getElementById("individual-login");
const newAccount = document.getElementById("new-account");
// const donationOverlay = document.getElementById("donationOverlay");


// Modals
const loginModal1 = document.getElementById("loginModal1");
const loginModal2 = document.getElementById("loginModal2");
const loginModal3 = document.getElementById("loginModal3");
const loginModal4 = document.getElementById("loginModal4");

// Select all cards
const boxes = document.querySelectorAll('.box1, .box2, .box3');

// Function to reset flipped state for all cards
function resetFlippedCards() {
    boxes.forEach((box) => {
        box.classList.remove('flipped'); // Remove the 'flipped' class
    });
}

// Add event listener to the document
document.addEventListener('click', (event) => {
    // If the click is not inside any of the boxes, reset all flipped cards
    if (!event.target.closest('.box1, .box2, .box3')) {
        resetFlippedCards();
    }
});

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent triggering the document listener
        box.classList.toggle('flipped'); // Toggle flipped class for the clicked card
    });
});



// Close buttons
const closeButtons = document.querySelectorAll(".close-btn");

// Show login options overlay
mainLoginBtn.addEventListener("click", () => {
    // Show login page/modal with flex layout
    loginPage.style.display = "flex";  // Display login options modal (flex)
    loginPage.style.position = "fixed"; // Fixed position on screen
    loginPage.style.justifyContent = "center";  // Center horizontally
    loginPage.style.alignItems = "center";  // Center vertically
    // loginPage.style.top = "0";  // Align from the top of the viewport
    // loginPage.style.left = "0";  // Align from the left of the viewport
    loginPage.style.width = "100%";  // Full width of the viewport
    loginPage.style.height = "100%";  // Full height of the viewport
    loginPage.style.backgroundColor = "rgba(0, 78, 104, 1)"; // Semi-transparent background
    loginPage.style.zIndex = "9999";  // Ensure it's on top of other content
});


// Show hotel login modal
hotelLogin.addEventListener("click", () => {
    loginModal1.style.display = "flex";  // Show hotel login modal
    loginPage.style.display = "none";     // Hide the login options page
    loginModal1.style.backgroundColor = rgba(0, 78, 104, 1); // Semi-transparent background
    loginModal1.style.top = "0";
    loginModal1.style.width = "100%";
    loginModal1.style.height = "100%";
    loginModal1.style.flexDirection = "column";
    loginModal1.style.gap = "30px";
    loginModal1.style.justifyContent = "center";
});

// Show NGO login modal
ngoLogin.addEventListener("click", () => {
    loginModal2.style.display = "flex";  // Show NGO login modal
    loginPage.style.display = "none";     // Hide the login options page
    // loginModal2.style.backgroundColor = rgba(0, 78, 104, 1); // Semi-transparent background
    loginModal2.style.top = "0";
    loginModal2.style.width = "100%";
    loginModal2.style.height = "100%";
    loginModal2.style.flexDirection = "column";
    loginModal2.style.gap = "30px";
    loginModal2.style.justifyContent = "center";

});

// Show individual login modal
individualLogin.addEventListener("click", () => {
    loginModal3.style.display = "flex";  // Show individual login modal
    loginPage.style.display = "none";     // Hide the login options page
    loginModal3.style.backgroundColor = rgba(0, 78, 104, 0.8); // Semi-transparent background
    loginModal3.style.top = "0";
    loginModal3.style.width = "100";
    loginModal3.style.height = "100";
    loginModal3.style.flexDirection = "column";
    loginModal3.style.gap = "30px";
    loginModal3.style.justifyContent = "center";

});

newAccount.addEventListener("click", () => {
    loginModal4.style.display = "flex";  // Show hotel login modal
    loginPage.style.display = "none";     // Hide the login options page
    loginModal4.style.backgroundColor = rgba(0, 78, 104, 0.8); // Semi-transparent background
    loginModal4.style.top = "0";
    loginModal4.style.width = "100";
    loginModal4.style.height = "100";
    loginModal4.style.flexDirection = "column";
    loginModal4.style.gap = "30px";
    loginModal4.style.justifyContent = "center";
});

// Close modals
closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".modal").style.display = "none";  // Hide modal when close button is clicked
        loginPage.style.display = "none";  // Hide the login options page
    });
});

// Close modal when clicking outside of the modal
window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        loginPage.style.display = "none";  // Ensure loginPage is hidden when clicking outside modal
    }
});

window.addEventListener("click", (event) => {
    // Check if the click happened outside the login modal (not on the modal itself)
    if (event.target === loginPage) {
        loginPage.style.display = "none";  // Hide the modal
    }
});



// Select all sections and their corresponding navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove the active class from all links
function resetNavLinks() {
    navLinks.forEach((link) => link.classList.remove('active'));
}

// Function to add the active class to the link of the current section
function setActiveNavLink(id) {
    resetNavLinks(); // Reset all links
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeLink) activeLink.classList.add('active');
}

// Intersection Observer to detect which section is in view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveNavLink(entry.target.id); // Set the corresponding nav link active
            }
        });
    },
    { threshold: 0.6 } // Trigger when 60% of the section is visible
);

// Observe each section
sections.forEach((section) => observer.observe(section));

// Function to open the donation form (overlay)
function openDonationForm() {
    document.getElementById("donationOverlay").style.display = "flex"; // Show overlay
}

function closeDonationForm() {
    document.getElementById('donationOverlay').style.display = 'none';
}

// Add event listener to close the modal if clicked outside
