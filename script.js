const slider = document.querySelector('.slider_cards .container');
const cards = document.querySelector('.cards');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let text = document.querySelector('.slider h3');

// Размер одной карточки (включая gap)
const cardWidth = document.querySelector('.card').offsetWidth + 29;
let scrollPosition = 0;

const totalPages = 3;
let currentPage = 1;

function updateControls() {
    // Обновляем текст индикатора
    text.textContent = `${currentPage} из ${totalPages}`;

    // Блокируем кнопки, если прокрутка невозможна
    prevBtn.style.opacity = currentPage === 1 ? "0.5" : "1";
    prevBtn.style.pointerEvents = currentPage === 1 ? "none" : "auto";

    nextBtn.style.opacity = currentPage === totalPages ? "0.5" : "1";
    nextBtn.style.pointerEvents = currentPage === totalPages ? "none" : "auto";
}
// Прокрутка вправо
nextBtn.addEventListener('click', () => {
    currentPage++;
    const maxScroll = cards.scrollWidth - slider.offsetWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll); 
    cards.style.transform = `translateX(-${scrollPosition}px)`;
    updateControls();
});

// Прокрутка влево
prevBtn.addEventListener('click', () => {
    currentPage--;
    scrollPosition = Math.max(scrollPosition - cardWidth, 0);
    cards.style.transform = `translateX(-${scrollPosition}px)`;
    updateControls();
});
document.addEventListener('DOMContentLoaded', updateControls);