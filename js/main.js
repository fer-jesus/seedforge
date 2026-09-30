const titles = document.querySelectorAll('.interactive-title');

titles.forEach(title => {
    title.addEventListener('click', () => {
        title.classList.add('paused');
    });
});