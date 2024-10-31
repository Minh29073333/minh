document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    header.style.transition = "opacity 1s";
    header.style.opacity = "1";
});

function showStory() {
    const storySection = document.getElementById("story");
    storySection.scrollIntoView({ behavior: "smooth" });
}



