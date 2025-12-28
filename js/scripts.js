// AOS initialization
AOS.init({
    duration: 1000, // Kecepatan animasi (1 detik)
    once: true,     // Animasi hanya berjalan sekali saat di-scroll
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    const prog = document.getElementById('scroll-progress');
    if (prog) prog.style.width = scrollPercent + '%';
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Hamburger menu toggle for mobile
(function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.querySelector('nav ul.navbar-menu');
    if (!menuToggle || !navbarMenu) return;

    // Accessibility initial state
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', (e) => {
        const isActive = navbarMenu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(isActive));
    });

    // Close menu when a link is clicked (useful on mobile)
    navbarMenu.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'A' && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Ensure menu is visible/hidden correctly on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
})();