document.addEventListener("DOMContentLoaded", () => {
    const donateBtn = document.getElementById("donate-btn");
    const childImage = document.getElementById("child-image");
    const thankYouMessage = document.getElementById("thank-you-message");
    const firework = document.querySelector(".firework");
  
    donateBtn.addEventListener("click", () => {
      // Change child image to happy child after donation
      childImage.src = "happy-child.png";  // Replace with the path to your happy child image
      childImage.style.transform = "scale(1.2)";  // Apply slight zoom effect
  
      // Show the thank you message with fade-in effect
      thankYouMessage.style.opacity = "1";
  
      // Trigger the firework effect (firecracker)
      firework.classList.add("active");
  
      // Optionally, reset the firework effect after animation
      setTimeout(() => {
        firework.classList.remove("active");
      }, 1000);  // Duration of firework animation (1 second)
    });
  });
  