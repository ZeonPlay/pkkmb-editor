// Smooth scroll ke section sample saat link "Lihat contoh hasil edit" diklik
// (fallback manual karena scroll-behavior: smooth belum konsisten di semua browser Android lama)
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var targetId = link.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    var navHeight = document.querySelector('nav').offsetHeight;
    var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});

// Peringatan di console kalau nomor WA placeholder belum diganti
document.querySelectorAll('.wa-link').forEach(function (link) {
  if (link.getAttribute('href').includes('62812XXXXXXXXX')) {
    console.warn('[ZeonPlay] Nomor WhatsApp masih placeholder. Ganti "62812XXXXXXXXX" di index.html dengan nomor asli.');
  }
});