// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


// ==========================
// Navbar Scroll Effect
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add(
            "bg-white",
            "shadow-lg",
            "backdrop-blur-md"
        );

    } else {

        header.classList.remove(
            "bg-white",
            "shadow-lg",
            "backdrop-blur-md"
        );

    }

});

// ==========================
// About Counter Animation
// ==========================

const aboutSection = document.querySelector("#about");
const counters = document.querySelectorAll(".counter");

let started = false;

function startCounters() {

    if (started) return;

    started = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const increment = target / 100;

        let current = 0;

        const updateCounter = () => {

            current += increment;

            if (current < target) {

                if (target >= 1000) {

                    counter.textContent =
                        Math.floor(current).toLocaleString();

                } else {

                    counter.textContent =
                        Math.floor(current);

                }

                requestAnimationFrame(updateCounter);

            } else {

                if (target >= 1000) {

                    counter.textContent =
                        target.toLocaleString() + "+";

                } else {

                    counter.textContent =
                        target + "+";

                }

            }

        };

        updateCounter();

    });

}

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    },

    {

        threshold: 0.5

    }

);

observer.observe(aboutSection);

// ==========================
// Gallery Lightbox
// ==========================

const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.remove("hidden");

        lightbox.classList.add("flex");

        lightboxImg.src = image.src;

    });

});

// Close Button

closeLightbox.addEventListener("click", closeGallery);

// Click Outside

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeGallery();

    }

});

// Escape Key

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeGallery();

    }

});

function closeGallery() {

    lightbox.classList.remove("flex");

    lightbox.classList.add("hidden");

}

// ==========================
// Smooth Scroll
// ==========================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        e.preventDefault();

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// Close Mobile Menu
// ==========================

const mobileLinks = document.querySelectorAll("#mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("flex");

    });

});

// ==========================
// Favorite Button
// ==========================

const favorites = document.querySelectorAll(".favorite");

favorites.forEach(icon => {

    icon.addEventListener("click", () => {

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        icon.classList.toggle("scale-125");

    });

});


// ==========================
// Active Navigation Link
// ==========================

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("text-[#D62828]");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("text-[#D62828]");

        }

    });

});