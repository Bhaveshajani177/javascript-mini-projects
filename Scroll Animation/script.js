// Selectors
const boxes = document.querySelectorAll('.box');

// Event listeners
window.addEventListener('scroll', checkBoxes);
checkBoxes();

// Functions
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 3.8;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop, triggerBottom);
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}