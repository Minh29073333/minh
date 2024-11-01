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
    const startDate = new Date("2023-12-31"); // Định dạng YYYY-MM-DD

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





document.addEventListener("DOMContentLoaded", function() {
    // Mật khẩu cần nhập
    const correctPassword = "31122023"; // Thay đổi thành mật khẩu bạn muốn

    // Hộp thoại yêu cầu mật khẩu
    let userPassword = prompt("Vui lòng nhập mật khẩu để đăng nhập vào hành hinh của Minh:");

    // Kiểm tra mật khẩu
    if (userPassword === correctPassword) {
        document.getElementById("content").style.display = "block"; // Hiển thị nội dung trang
    } else {
        alert("Mật khẩu không đúng! Bạn sẽ không được truy cập.");
        window.location.href = "https://google.com"; // Chuyển hướng sang trang khác
    }
});





document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
});




// Khi nút đầu tiên được nhấn, hiển thị lời chúc và nút thứ hai
document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
    document.getElementById("secondButton").style.display = "inline-block";
});

// Khi nút thứ hai được nhấn, hiển thị nội dung mới
document.getElementById("secondButton").addEventListener("click", function() {
    document.getElementById("secondMessage").style.display = "block";
});
