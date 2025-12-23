const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 150;
        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
});
