document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Dropdown toggles
    document.querySelectorAll('.nav-item.nav-dropdown').forEach(item => {
        const btn = item.querySelector('.dropdown-toggle');
        const menu = item.querySelector('.dropdown');
        if (!btn || !menu) return;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = item.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    });

    // Close dropdowns on outside click or Escape
    document.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-item.nav-dropdown.open').forEach(openItem => {
            if (!openItem.contains(e.target)) {
                openItem.classList.remove('open');
                const btn = openItem.querySelector('.dropdown-toggle');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.nav-item.nav-dropdown.open').forEach(openItem => {
                openItem.classList.remove('open');
                const btn = openItem.querySelector('.dropdown-toggle');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Active link highlighting
    document.querySelectorAll('.nav a, .nav .dropdown-toggle').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.nav .nav-link, .nav .dropdown-toggle').forEach(n => n.classList.remove('active'));
            el.classList.add('active');
        });
    });

    // set year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // contact form
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thanks! Your message was sent (demo).');
            form.reset();
        });
    }

    // Load fixtures from fixtures.json
    const fixturesBody = document.getElementById('fixtures-body');
    if (fixturesBody) {
        fetch('fixtures.json')
            .then(r => r.json())
            .then(data => {
                if (!Array.isArray(data) || data.length === 0) return;
                data.forEach(f => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = '<td>' + (f.date || '') + '</td><td>' + (f.opponent || '') + '</td><td>' + (f.venue || '') + '</td><td>' + (f.time || '') + '</td>';
                    fixturesBody.appendChild(tr);
                });
            })
            .catch(() => {
                fixturesBody.innerHTML = '<tr><td colspan="4">Unable to load fixtures.</td></tr>';
            });
    }

    // Gallery lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(src, caption) {
        if (!lightbox) return;
        lightboxImg.src = src;
        lightboxImg.alt = caption || '';
        lightboxCaption.textContent = caption || '';
        lightbox.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImg.src = '';
        lightboxCaption.textContent = '';
    }

    document.querySelectorAll('.gallery-item').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, img.dataset.caption || img.alt));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

    // Gallery slider functionality
    const galleryMain = document.getElementById('gallery-main');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryNext = document.querySelector('.gallery-next');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (galleryMain && galleryPrev && galleryNext && thumbnails.length > 0) {
        let currentIndex = 0;
        const images = Array.from(thumbnails).map(thumb => thumb.src);

        function updateGallery(index) {
            galleryMain.src = images[index];
            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }

        galleryPrev.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery(currentIndex);
        });

        galleryNext.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery(currentIndex);
        });

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                currentIndex = index;
                updateGallery(currentIndex);
            });
        });
    }
});