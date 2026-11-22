
// BALLERS FC — OFFICIAL WEBSITE 2026/27

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// MOBILE NAVIGATION
menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.textContent = isOpen ? "×" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.textContent = "☰";
    });
});

// FOOTER YEAR
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} BALLERS FC · 2026/27 SEASON`;
}

console.log("BALLERS FC website loaded successfully!");
console.log("ONE CLUB. ONE GENERATION. ONE IDENTITY.");
console.log("UNITED BY FOOTBALL.");
