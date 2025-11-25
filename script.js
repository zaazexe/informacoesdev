document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        body.classList.add(currentTheme);
        updateThemeIcon(currentTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        body.classList.add('light-mode');
        updateThemeIcon('light-mode');
    } else {
        updateThemeIcon('');
    }

    function updateThemeIcon(theme) {
        if (theme === 'light-mode') {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Mudar Tema';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Mudar Tema';
        }
    }

    themeToggle.addEventListener('click', () => {
        const isLightMode = body.classList.toggle('light-mode');

        if (isLightMode) {
            localStorage.setItem('theme', 'light-mode');
            updateThemeIcon('light-mode');
        } else {
            localStorage.setItem('theme', 'dark-mode');
            updateThemeIcon('');
        }
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if ('ontouchstart' in window || navigator.maxTouchPoints) {
            card.style.transition = 'none';
        }
    });

    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
