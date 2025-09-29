// Tunggu sampai seluruh konten halaman dimuat
window.addEventListener('DOMContentLoaded', (event) => {

    // 1. Pilih elemen header dari HTML
    const header = document.querySelector('header');

    // 2. Tambahkan 'event listener' untuk mendeteksi scroll pada window
    window.addEventListener('scroll', function() {
        
        // 3. Cek posisi scroll vertikal
        // Jika user sudah scroll lebih dari 50 pixel ke bawah...
        if (window.scrollY > 50) {
            // ...tambahkan class 'scrolled' ke elemen header.
            header.classList.add('scrolled');
        } else {
            // ...jika tidak (kembali ke atas), hapus class 'scrolled'.
            header.classList.remove('scrolled');
        }
    });

});

// --- Kode untuk animasi saat scroll ---

// 1. Pilih semua elemen yang ingin dianimasikan
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// 2. Buat observer
const observer = new IntersectionObserver((entries) => {
    // Loop melalui setiap 'entry' (elemen yang diamati)
    entries.forEach(entry => {
        // Cek jika elemennya sekarang ada di dalam layar (isIntersecting)
        if (entry.isIntersecting) {
            // Tambahkan class 'is-visible' untuk memicu animasi
            entry.target.classList.add('is-visible');

            // Opsional: Hentikan pengamatan setelah animasi berjalan sekali
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Animasi akan berjalan saat 10% elemen terlihat
});

// 3. Minta observer untuk mengamati setiap elemen yang telah kita pilih
animatedElements.forEach(element => {
    observer.observe(element);
});