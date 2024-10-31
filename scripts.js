document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    header.style.transition = "opacity 1s";
    header.style.opacity = "1";
});

function showStory() {
    const storySection = document.getElementById("story");
    storySection.scrollIntoView({ behavior: "smooth" });
}



document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    header.style.transition = "opacity 1s";
    header.style.opacity = "1";

    // Ngày gặp nhau (thay bằng ngày thực tế)
    const startDate = new Date("2022-01-01"); // Định dạng YYYY-MM-DD

    // Hàm tính số ngày từ ngày gặp nhau đến hiện tại
    function calculateDaysTogether() {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;
        const daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysTogether;
    }

    // Hiển thị số ngày lên trang
    document.getElementById("days-counter").textContent = calculateDaysTogether();
});
