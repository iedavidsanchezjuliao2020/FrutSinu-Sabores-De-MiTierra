document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.auto-carousel').forEach(function (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.dot');
        if (slides.length <= 1) return;
        let index = 0;
        const interval = parseInt(carousel.dataset.interval, 10) || 5000;
        function show(i) {
            track.style.transform = 'translateX(-' + (i * 100) + '%)';
            dots.forEach((d, di) => d.classList.toggle('active', di === i));
        }
        setInterval(function () {
            index = (index + 1) % slides.length;
            show(index);
        }, interval);
    });
});
