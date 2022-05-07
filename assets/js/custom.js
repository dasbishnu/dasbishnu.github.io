//dark mode
window.addEventListener('load', () => {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }
    
    const lightModeImage = document.querySelector('#light-mode');
    const darkModeImage = document.querySelector('#dark-mode');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        lightModeImage.classList.toggle('d-none');
        darkModeImage.classList.toggle('d-none');
    }
    
    const themeSelector = document.querySelector('#theme-selector');
    themeSelector.addEventListener('click', () => {
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    
        lightModeImage.classList.toggle('d-none');
        darkModeImage.classList.toggle('d-none');
    });
});

