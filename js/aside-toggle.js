document.addEventListener("DOMContentLoaded", function () {
    const toggleNavBtn = document.getElementById("toggle-nav-btn");
    const asideNav = document.querySelector(".aside");

    toggleNavBtn.addEventListener("click", function () {
        // Toggle the icon classes between fa-bars and fa-times
        toggleNavBtn.querySelector("i").classList.toggle("fa-bars");
        toggleNavBtn.querySelector("i").classList.toggle("fa-times");

        // Toggle the display of the .aside element
        if (asideNav.style.display === "none" || asideNav.style.display === "") {
            asideNav.style.display = "block";
            asideNav.style.left = "0";
            asideNav.style.width = "270px";
        } else {
            asideNav.style.display = "none";
        }
    });

    function handleOutsideClick(event) {
        if (!event.target.closest('.aside') && !event.target.closest('#toggle-nav-btn')) {
            asideNav.classList.remove("active");
            asideNav.style.display = "none";
            toggleNavBtn.querySelector("i").classList.add("fa-bars");
            toggleNavBtn.querySelector("i").classList.remove("fa-times");
        }
    }

    function updateOutsideClickHandler() {
        if (window.matchMedia("(max-width: 1150px)").matches) {
            document.addEventListener("click", handleOutsideClick);
            if (asideNav.style.display === "block") {
                asideNav.style.display = "none"; // Hide sidebar when switching to small screen
            }
        } else {
            document.removeEventListener("click", handleOutsideClick);
            asideNav.style.display = "block"; // Ensure sidebar is visible on large screens
            asideNav.style.left = "0";
            asideNav.style.width = "270px";
        }
    }

    // Initial check
    updateOutsideClickHandler();

    // Update handler on window resize
    window.addEventListener("resize", updateOutsideClickHandler);

    // Close the aside when clicking a link inside it only on small screens
    asideNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            if (window.matchMedia("(max-width: 1150px)").matches) {
                asideNav.classList.remove("active");
                asideNav.style.display = "none";
                toggleNavBtn.querySelector("i").classList.add("fa-bars");
                toggleNavBtn.querySelector("i").classList.remove("fa-times");
            }
        });
    });
});
