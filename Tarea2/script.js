document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let currentIndex = 0;

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const updateSlidePosition = () => {
        const slideWidth = track.getBoundingClientRect().width; // Use track width instead of slide width
        const amountToMove = -slideWidth * currentIndex;
        track.style.transform = `translateX(${amountToMove}px)`;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    const moveAutomatically = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    };

    setInterval(moveAutomatically, 3000); // Move every 3 seconds

    // Initialize the first slide as the current slide
    slides[0].classList.add('current-slide');
});
