document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navigation a");
    const sections = document.querySelectorAll(".content section");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? "block" : "none";
        });
    }

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    // Initially show the dashboard
    showSection("dashboard");
});