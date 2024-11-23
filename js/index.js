// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add dynamic year to footer
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();

    // Add hover effects to sections
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.backgroundColor = "#f0f8ff";
            section.style.transition = "background-color 0.5s ease";
        });

        section.addEventListener("mouseleave", () => {
            section.style.backgroundColor = "#fff";
        });
    });

    // Animate Hero Text on Scroll
    const hero = document.querySelector(".hero");
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                hero.querySelector("h1").classList.add("animate");
                hero.querySelector("p").classList.add("animate");
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(hero);

    // Floating navigation highlight
    const navLinks = document.querySelectorAll("nav ul li a");
    const sectionsObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    document
                        .querySelector(`a[href="#${entry.target.id}"]`)
                        .classList.add("active");
                }
            });
        },
        { threshold: 0.7 }
    );

    document.querySelectorAll("section").forEach(section => {
        sectionsObserver.observe(section);
    });

    // Image switching in Community Initiatives
    const galleries = document.querySelectorAll(".community-gallery");

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll(".community-image");
        const prevArrow = gallery.querySelector(".prev-arrow");
        const nextArrow = gallery.querySelector(".next-arrow");

        let currentIndex = 0;

        const updateCarousel = () => {
            images.forEach((img, idx) => {
                img.classList.toggle("active", idx === currentIndex);
            });
        };

        prevArrow.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        nextArrow.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        updateCarousel(); // Initialize the first image
    });
});
