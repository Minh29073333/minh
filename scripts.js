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
    // Ngày bắt đầu yêu (thay bằng ngày thực tế)
    const startDate = new Date("2022-01-01"); // Định dạng YYYY-MM-DD

    // Hàm tính số ngày từ ngày bắt đầu đến hiện tại
    function calculateDaysTogether() {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;
        const daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysTogether;
    }

    // Hiển thị số ngày yêu lên trái tim
    const daysCounter = document.getElementById("days-counter");
    daysCounter.textContent = calculateDaysTogether();

    // Thêm hiệu ứng nổ cho trái tim
    const heart = document.getElementById("heart");
    setTimeout(() => {
        heart.classList.add("explode"); // Thêm lớp explode
    }, 100); // Chạy hiệu ứng sau 100ms

    // Ẩn trái tim sau 5 giây
    setTimeout(() => {
        heart.style.display = "none"; // Ẩn trái tim
    }, 5000);
});
