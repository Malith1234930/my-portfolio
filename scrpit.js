let galleryIndex = 0;
const galleryCards = document.querySelectorAll('.gallery-card');
const dotsContainer = document.getElementById('galleryDots');


if (dotsContainer) {
    galleryCards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');


        dot.addEventListener('click', () => {
            galleryIndex = index;
            updateGallery();
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateGallery() {
    const dots = document.querySelectorAll('.dot');

    galleryCards.forEach((card, index) => {

        card.classList.remove('active', 'prev-card', 'next-card');
        card.style.display = "none";

        if (dots[index]) dots[index].classList.remove('active');


        if (index === galleryIndex) {
            card.style.display = "block";
            card.classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
        }

        else if (index === (galleryIndex - 1 + galleryCards.length) % galleryCards.length) {
            card.style.display = "block";
            card.classList.add('prev-card');
        }

        else if (index === (galleryIndex + 1) % galleryCards.length) {
            card.style.display = "block";
            card.classList.add('next-card');
        }
    });
}

// --- Auto Play Logic ---
let slideInterval = setInterval(() => {
    galleryIndex = (galleryIndex + 1) % galleryCards.length;
    updateGallery();
}, 1500);

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        galleryIndex = (galleryIndex + 1) % galleryCards.length;
        updateGallery();
    }, 1500);
}


updateGallery();