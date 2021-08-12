// Selectors
const search = document.querySelector('.search-container');
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// Event listeners
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});