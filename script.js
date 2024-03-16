document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
        const expanded = this.getAttribute("aria-expanded") === "true" || false;
        this.setAttribute("aria-expanded", !expanded);
        mobileMenu.classList.toggle("hidden");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    const slideIndicators = document.querySelectorAll('[data-carousel-slide-to]');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');

    let currentIndex = 0;

    // Function to show a particular slide
    function showSlide(index) {
        carouselItems.forEach(item => {
            item.classList.add('hidden');
        });
        carouselItems[index].classList.remove('hidden');
        currentIndex = index;
        updateIndicators();
    }

    // Function to update slide indicators
    function updateIndicators() {
        slideIndicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.setAttribute('aria-current', 'false');
            }
        });
    }

    // Event listener for previous button
    prevButton.addEventListener('click', function () {
        const newIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        showSlide(newIndex);
    });

    // Event listener for next button
    nextButton.addEventListener('click', function () {
        const newIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showSlide(newIndex);
    });

    // Event listeners for slide indicators
    slideIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            showSlide(index);
        });
    });

    // Show the initial slide
    showSlide(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
    const projectBtn = document.getElementById("project-btn");
    const projectCarousel = document.getElementById("project-carousel");

    // เพิ่ม event listener ให้กับปุ่ม "Project"
    projectBtn.addEventListener("click", function (event) {
        event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อคลิกที่ลิงก์

        // คำสั่งเลื่อนสไลด์ลงมายังส่วน Carousel
        projectCarousel.scrollIntoView({ behavior: "smooth" });
    });
});
