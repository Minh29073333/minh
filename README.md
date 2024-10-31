
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Chào mừng đến với trang của chúng tôi</h1>
        <p>❤️ [Tên người A] & [Tên người B] ❤️</p>
    </header>

    <section id="story">
        <h2>Câu chuyện của chúng tôi</h2>
        <p>Chúng tôi gặp nhau lần đầu tại [địa điểm] vào ngày [ngày]. Sau nhiều kỷ niệm và khoảnh khắc đẹp bên nhau, chúng tôi đã trở thành một phần không thể thiếu trong cuộc sống của nhau.</p>
    </section>

    <section id="gallery">
        <h2>Album ảnh</h2>
        <div class="photo-grid">
            <img src="photo1.jpg" alt="Ảnh 1">
            <img src="photo2.jpg" alt="Ảnh 2">
            <img src="photo3.jpg" alt="Ảnh 3">
            <!-- Thêm nhiều ảnh khác -->
        </div>
    </section>

    <section id="contact">
        <h2>Liên hệ với chúng tôi</h2>
        <p>Email: <a href="mailto:yourmail@example.com">yourmail@example.com</a></p>
        <p>Số điện thoại: [số điện thoại]</p>
    </section>

    <footer>
        <p>❤️ Với tất cả tình yêu của chúng tôi ❤️</p>
    </footer>

<script src="scripts.js"></script>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #fef3f2;
    color: #333;
}

header, footer {
    background-color: #ffb6c1;
    text-align: center;
    padding: 20px;
    color: white;
}

h1, h2 {
    color: #ff69b4;
}

section {
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    text-align: center;
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
}

.photo-grid img {
    width: 100%;
    border-radius: 10px;
}

footer {
    font-size: 0.9em;
}
</body>

</html>
