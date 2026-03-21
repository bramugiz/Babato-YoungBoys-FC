// Babato YoungBoys FC - Website JavaScript

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Active nav link highlighting
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// News Carousel
let currentNewsIndex = 0;
const newsItems = document.querySelectorAll('.news-item');
const newsDotsContainer = document.getElementById('newsDots');
const prevNewsBtn = document.getElementById('prevNews');
const nextNewsBtn = document.getElementById('nextNews');

if (newsItems.length > 0) {
    // Create dots
    newsItems.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('news-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentNewsIndex = index;
            updateNewsCarousel();
        });
        newsDotsContainer.appendChild(dot);
    });

    // Update carousel display
    function updateNewsCarousel() {
        newsItems.forEach((item, index) => {
            item.classList.remove('active');
            document.querySelectorAll('.news-dot')[index].classList.remove('active');
        });
        newsItems[currentNewsIndex].classList.add('active');
        document.querySelectorAll('.news-dot')[currentNewsIndex].classList.add('active');
    }

    // Navigation buttons
    if (prevNewsBtn) {
        prevNewsBtn.addEventListener('click', () => {
            currentNewsIndex = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
            updateNewsCarousel();
        });
    }

    if (nextNewsBtn) {
        nextNewsBtn.addEventListener('click', () => {
            currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
            updateNewsCarousel();
        });
    }

    // Auto-rotate news every 5 seconds
    setInterval(() => {
        currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
        updateNewsCarousel();
    }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simple validation
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });

        if (isValid) {
            // Show success message
            const message = document.createElement('div');
            message.textContent = 'Message sent successfully!';
            message.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: #10b981;
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                z-index: 2000;
                animation: slideInRight 0.3s ease-out;
            `;
            document.body.appendChild(message);

            // Clear form
            this.reset();

            // Remove message after 3 seconds
            setTimeout(() => {
                message.remove();
            }, 3000);
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards for animation
document.querySelectorAll('.team-card, .feature-card, .staff-card-preview').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});

// Scroll to top button effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Background Image Rotation
const backgroundImages = [
    'url("UN%20FFTG%20BOYS.jpg")',
    'url("UN%20FFTG%20BOYS%202.jpg")',
    'url("UN%20FFTG%20GIRLS.jpg")',
    'url("landscape.jpg")'
];

let currentBgIndex = 0;

function rotateBackgroundImage() {
    const root = document.documentElement;
    const bgImage = backgroundImages[currentBgIndex];
    root.style.setProperty('--hero-bg', bgImage);
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
}

// Initial background
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rotateBackgroundImage);
} else {
    rotateBackgroundImage();
}

// Rotate every 6 seconds
setInterval(rotateBackgroundImage, 6000);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Babato YoungBoys FC Website Loaded');
});