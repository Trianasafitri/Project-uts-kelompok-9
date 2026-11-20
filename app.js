const express = require("express");
const app = express();
const PORT = 3000;

// Halaman utama
app.get("/", (req, res) => {
  res.redirect("/beranda");
});

// Template tampilan website
function halaman(judul, isi) {
  return `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${judul} | PROJECT UTS</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Nunito', sans-serif;
        background: #fff5fa;
        color: #66536b;
        min-height: 100vh;
      }

      header {
        background: linear-gradient(135deg, #ffc9df, #e8d7ff);
        padding: 30px 20px;
        text-align: center;
        border-bottom: 5px dotted white;
      }

      header h1 {
        color: #865b83;
        font-size: 34px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 900;
      }

      header p {
        margin-top: 10px;
        color: #896d91;
        font-weight: 700;
      }

      nav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        padding: 18px;
        background: #fff;
        box-shadow: 0 3px 12px #ead9e8;
        position: sticky;
        top: 0;
        z-index: 10;
      }

      nav a {
        text-decoration: none;
        color: #946c96;
        background: #fff0f7;
        padding: 10px 18px;
        border-radius: 25px;
        font-weight: 800;
        transition: 0.3s;
      }

      nav a:hover {
        background: #e9d8ff;
        transform: translateY(-3px);
      }

      main {
        max-width: 950px;
        margin: 35px auto;
        padding: 20px;
      }

      .hero {
        background: linear-gradient(135deg, #ffe0ed, #eee2ff);
        border: 3px solid white;
        border-radius: 30px;
        padding: 50px 25px;
        text-align: center;
        box-shadow: 0 8px 20px #ead9e8;
      }

      .hero .emoji {
        font-size: 60px;
        margin-bottom: 20px;
      }

      h2 {
        color: #a36c9d;
        font-family: 'Quicksand', sans-serif;
        margin-bottom: 15px;
        font-size: 27px;
      }

      .hero p {
        line-height: 1.9;
        font-size: 17px;
        margin-top: 15px;
      }

      .content-card {
        background: white;
        padding: 30px;
        margin-top: 25px;
        border-radius: 25px;
        border: 2px solid #f8d9eb;
        box-shadow: 0 5px 15px #f0dce9;
      }

      .member-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 18px;
        margin-top: 25px;
      }

      .member {
        background: #fff0f7;
        padding: 28px 15px;
        border-radius: 22px;
        text-align: center;
        border: 2px dashed #e9bfdc;
        transition: 0.3s;
      }

      .member:hover {
        transform: translateY(-5px);
        background: #f5edff;
      }

      .member .icon {
        font-size: 42px;
        margin-bottom: 12px;
      }

      .member h3 {
        color: #a36c9d;
        margin-bottom: 7px;
        font-size: 17px;
      }

      .member p {
        color: #806c83;
      }

      .info {
        background: #f5edff;
        border-radius: 18px;
        padding: 22px;
        line-height: 2.2;
        margin-top: 15px;
      }

      .decor {
        text-align: center;
        font-size: 25px;
        margin: 30px 0;
        letter-spacing: 8px;
      }

      .button {
        display: inline-block;
        background: #e99abd;
        color: white;
        text-decoration: none;
        padding: 13px 25px;
        border-radius: 25px;
        margin-top: 20px;
        font-weight: 800;
        transition: 0.3s;
      }

      .button:hover {
        background: #c77da9;
        transform: translateY(-3px);
      }

      footer {
        text-align: center;
        padding: 28px 15px;
        background: #f3e3f5;
        color: #896d91;
        margin-top: 40px;
        line-height: 2;
      }

      @media (max-width: 600px) {
        header h1 {
          font-size: 26px;
        }

        .hero {
          padding: 35px 18px;
        }

        nav {
          gap: 8px;
        }

        nav a {
          padding: 9px 13px;
          font-size: 13px;
        }

        .content-card {
          padding: 22px;
        }
      }
    </style>
  </head>

  <body>

    <header>
      <h1>🎀 PROJECT UTS 🎀</h1>
      <p>♡ Pemrograman Berbasis Platform ♡</p>
      <p>🌸 Kelompok 9 🌸</p>
    </header>

    <nav>
      <a href="/beranda">🏠 Beranda</a>
      <a href="/identitas">👧 Identitas</a>
      <a href="/matkul">📚 Mata Kuliah</a>
      <a href="/about">🌷 About</a>
      <a href="/kontak">💌 Kontak</a>
    </nav>

    <main>
      ${isi}
      <div class="decor">୨୧ 🌸 ✨ 🎀 ✨ 🌸 ୨୧</div>
    </main>

    <footer>
      <p>Made with ♡ by Kelompok 9</p>
      <p>© 2026 | PROJECT UTS</p>
      <p>🌸 Pemrograman Berbasis Platform 🌸</p>
    </footer>

  </body>
  </html>
  `;
}

// Endpoint 1: Beranda
app.get("/beranda", (req, res) => {
  res.send(halaman("Beranda", `
    <section class="hero">
      <div class="emoji">🌷🧸🎀</div>

      <h2>Selamat Datang di Website Kami!</h2>

      <p>
        Halo semuanya! Selamat datang di website
        PROJECT UTS Kelompok 9.
      </p>

      <p>
        Website ini dibuat untuk memenuhi tugas Ujian
        Tengah Semester mata kuliah Pemrograman Berbasis
        Platform dengan menggunakan Node.js dan Express.
      </p>

      <p>
        Semoga kalian suka dengan tampilan website
        sederhana dan manis ini! ♡
      </p>

      <a href="/identitas" class="button">
        Kenalan dengan Kami 🌸
      </a>
    </section>
  `));
});

// Endpoint 2: Identitas Kelompok
app.get("/identitas", (req, res) => {
  res.send(halaman("Identitas Kelompok", `
    <section class="content-card">

      <h2>🎀 Identitas Anggota Kelompok 9</h2>

      <p>Kenalan dulu yuk dengan anggota kelompok kami! ♡</p>

      <div class="member-grid">

        <div class="member">
          <div class="icon">🌸</div>
          <h3>Triana Safitri</h3>
          <p>Anggota 1</p>
        </div>

        <div class="member">
          <div class="icon">🧸</div>
          <h3>Tri Kholipianto R</h3>
          <p>Anggota 2</p>
        </div>

        <div class="member">
          <div class="icon">🎀</div>
          <h3>Widi Amalia R</h3>
          <p>Anggota 3</p>
        </div>

      </div>
    </section>
  `));
});

// Endpoint 3: Mata Kuliah
app.get("/matkul", (req, res) => {
  res.send(halaman("Mata Kuliah", `
    <section class="content-card">

      <h2>📚 Identitas Mata Kuliah</h2>

      <div class="info">

        <p>🌷 <b>Nama Mata Kuliah:</b>
        Pemrograman Berbasis Platform</p>

        <p>💗 <b>Nomor Kelompok:</b> 9</p>

        <p>✨ <b>Project:</b> PROJECT UTS</p>

        <p>🎀 <b>Teknologi:</b>
        Node.js dan Express</p>

        <p>🌸 <b>Tugas:</b>
        Membuat Webserver dengan beberapa endpoint</p>

      </div>
    </section>
  `));
});

// Endpoint 4: About
app.get("/about", (req, res) => {
  res.send(halaman("Tentang Kami", `
    <section class="content-card">

      <h2>🌼 Tentang Website Kami</h2>

      <p>
        Website ini merupakan proyek kelompok
        untuk memenuhi tugas Ujian Tengah Semester
        mata kuliah Pemrograman Berbasis Platform.
      </p>

      <p>
        Website dibuat menggunakan Node.js dan Express
        untuk mempelajari cara kerja webserver,
        pembuatan endpoint, dan pengelolaan halaman web.
      </p>

      <div class="info">
        💕 Dibuat dengan semangat belajar,
        kreativitas, dan kerja sama Kelompok 9.
      </div>

    </section>
  `));
});

// Endpoint 5: Kontak
app.get("/kontak", (req, res) => {
  res.send(halaman("Kontak", `
    <section class="content-card">

      <h2>💌 Informasi Kelompok</h2>

      <p>
        Terima kasih sudah mengunjungi
        website PROJECT UTS Kelompok 9!
      </p>

      <div class="info">

        <p>🌸 <b>Kelompok:</b> 9</p>

        <p>🎀 <b>Mata Kuliah:</b>
        Pemrograman Berbasis Platform</p>

        <p>💗 <b>Project:</b> PROJECT UTS</p>

        <p>✨ <b>Teknologi:</b> Node.js dan Express</p>

        <p>🧸 <b>Ucapan:</b> Have a nice day!</p>

      </div>

    </section>
  `));
});

// Halaman jika tidak ditemukan
app.use((req, res) => {
  res.status(404).send(halaman("404", `
    <section class="hero">
      <div class="emoji">🥺🌸</div>
      <h2>Oops! Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang kamu cari belum tersedia.</p>
      <a href="/beranda" class="button">
        Kembali ke Beranda 🏠
      </a>
    </section>
  `));
});

// Menjalankan server
app.listen(PORT, () => {
  console.log("PROJECT UTS KELOMPOK 9");
  console.log(`Server berjalan di http://localhost:${PORT}`);
});