const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    const currentMode = body.classList.contains("dark-mode") ? "Light" : "Dark";
    darkModeToggle.textContent = currentMode;
});
