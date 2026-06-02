// Welcome Button
document.getElementById("welcomeBtn").addEventListener("click", function () {
    alert("Welcome to Coffee House!");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    this.reset();
});

// Smooth Scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});