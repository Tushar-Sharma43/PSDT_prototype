document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab-content");

    // Tab switching functionality
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");
            tabs.forEach(tab => tab.classList.remove("active"));
            document.getElementById(target).classList.add("active");
        });
    });

    // Toggle details functionality
    document.querySelectorAll(".toggle-details").forEach(button => {
        button.addEventListener("click", (e) => {
            const details = e.target.closest(".donation").querySelector(".donation-details");
            details.classList.toggle("hidden");
        });
    });

    // Sorting and filtering functionality
    const filterInput = document.getElementById("filter");
    const sortSelect = document.getElementById("sort");
    const donationList = document.querySelector(".donation-list");

    filterInput.addEventListener("input", () => {
        const query = filterInput.value.toLowerCase();
        document.querySelectorAll(".donation").forEach(donation => {
            const text = donation.textContent.toLowerCase();
            donation.style.display = text.includes(query) ? "" : "none";
        });
    });

    sortSelect.addEventListener("change", () => {
        const sortBy = sortSelect.value;
        const donations = Array.from(donationList.children);
        donations.sort((a, b) => {
            if (sortBy === "amount") {
                return parseInt(a.querySelector(".donation-summary").textContent.match(/\d+/)) -
                       parseInt(b.querySelector(".donation-summary").textContent.match(/\d+/));
            } else if (sortBy === "date") {
                return new Date(a.querySelector(".donation-summary p:nth-child(2)").textContent.split(": ")[1]) -
                       new Date(b.querySelector(".donation-summary p:nth-child(2)").textContent.split(": ")[1]);
            } else if (sortBy === "ngo") {
                return a.querySelector(".donation-summary p:nth-child(3)").textContent.localeCompare(
                    b.querySelector(".donation-summary p:nth-child(3)").textContent
                );
            }
        });
        donations.forEach(donation => donationList.appendChild(donation));
    });
});

// Toggle NGO Details
document.querySelectorAll(".view-more").forEach(button => {
    button.addEventListener("click", (e) => {
        const details = e.target.closest(".ngo-card").querySelector(".ngo-details");
        details.classList.toggle("hidden");
        button.textContent = details.classList.contains("hidden") ? "View More" : "View Less";
    });
});
