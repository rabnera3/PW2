document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const slideWidth = slides[0].getBoundingClientRect().width;

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }
    });

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }
    });

    // Initialize the first slide as the current slide
    slides[0].classList.add('current-slide');
});
