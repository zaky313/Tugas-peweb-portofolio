// Toggle Mobile Navigation Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const themeToggleBtn = document.getElementById('themeToggle');

// Cek apakah pengguna sebelumnya sudah memilih mode gelap
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Mode Terang';
}

// Jalankan fungsi saat tombol diklik
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    // Tambah / hapus class 'dark-mode' di tag <body>
    document.body.classList.toggle('dark-mode');

    // Ubah teks tombol dan simpan status ke localStorage
    if (document.body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️ Mode Terang';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = '🌙 Mode Gelap';
      localStorage.setItem('theme', 'light');
    }
  });
}

// Close Mobile Menu on Link Click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Form Submission Handling (DOM Manipulation)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('nameInput').value;
  
  formStatus.style.color = 'green';
  formStatus.textContent = `Terima kasih, ${name}! Pesan Anda berhasil dikirim.`;
  
  contactForm.reset();
});