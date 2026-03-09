// Main JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Set active nav link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check for active state
        if (href === currentPath || (currentPath === '/' && href === 'index.html') || (currentPath.endsWith('/') && href === 'index.html')) {
            link.classList.add('text-primary', 'border-b-2', 'border-primary');
            link.classList.remove('hover:text-primary');
        }
    });
});
