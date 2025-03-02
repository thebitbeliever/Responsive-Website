document.addEventListener("DOMContentLoaded", () => {
    const changeTextBtn = document.getElementById("changeText");
    const toggleThemeBtn = document.getElementById("toggleTheme");
    const title = document.getElementById("main-title");
    const description = document.getElementById("description");

    changeTextBtn.addEventListener("click", () => {
        title.textContent = "You clicked the button!";
        description.textContent = "JavaScript is making this website interactive.";
    });

    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});

function changeBoxColor(box) {
    box.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

