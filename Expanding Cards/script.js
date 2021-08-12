// Selectors
const cards = document.querySelectorAll('.card');

// Event listeners
cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');
    });
});

// Functions
function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}