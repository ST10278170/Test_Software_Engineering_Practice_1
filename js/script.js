// ======================================================
// Oakwood Pharmacy Management System
// Prototype JavaScript Functionality
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------------------
    // 1. Highlight the current navigation page
    // --------------------------------------------------

    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        link.classList.remove("active");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });


    // --------------------------------------------------
    // 2. Dashboard alert monitoring
    // --------------------------------------------------

    const stockAlerts = document.querySelectorAll(".status.low");
    const expiryAlerts = document.querySelectorAll(".status.expiry");

    console.log("Oakwood Pharmacy Management System");
    console.log("Low stock alerts:", stockAlerts.length);
    console.log("Expiry alerts:", expiryAlerts.length);


    // --------------------------------------------------
    // 3. Quick-action prototype feedback
    // --------------------------------------------------

    const actionCards = document.querySelectorAll(".action-card");

    actionCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const actionName = card.querySelector("strong");

            if (actionName) {
                console.log(
                    "Opening pharmacy operation:",
                    actionName.textContent
                );
            }

        });

    });

});