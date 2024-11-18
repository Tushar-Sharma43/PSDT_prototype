// Script to toggle contact information visibility
function showContact(id) {
    const contactInfo = document.getElementById(id);
    if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
        contactInfo.style.display = "block"; // Show the contact info
    } else {
        contactInfo.style.display = "none"; // Hide the contact info
    }
}
