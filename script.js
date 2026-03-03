const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".side-nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const STAR_COUNT = 10; // nombre d'étoiles par section
    const STAR_SRC = "media/star.png";
    // Les etoiles sont random par rapport au media star_1, 2, 3...
    const STAR_VARIANTS = 5; 

    const sections = document.querySelectorAll("section[data-stars]");

    sections.forEach(section => {
        const container = document.createElement("div");
        container.classList.add("stars-container");

        for (let i = 0; i < STAR_COUNT; i++) {
            const star = document.createElement("img");
            star.src = `media/star_${Math.floor(Math.random() * STAR_VARIANTS) + 1}.png`;
            star.classList.add("star");

            // Position aléatoire
            star.style.top = Math.random() * 100 + "%";
            star.style.left = Math.random() * 90 + "%";

            // Animation différente
            star.style.animationDuration = 6 + Math.random() * 6 + "s";
            star.style.animationDelay = Math.random() * 3 + "s";

            // Taille / opacité aléatoire
            star.style.width = 35 + Math.random() * 20 + "px";
            star.style.opacity = 0.3 + Math.random() * 0.6;

            container.appendChild(star);
        }

        section.prepend(container);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const fadeElems = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible'); // fade in
            } else {
                entry.target.classList.remove('visible'); // fade out when leaving viewport
            }
        });
    }, {threshold: 0.2}); // 20% of element visible triggers fade

    fadeElems.forEach(el => observer.observe(el));
});


    // ===== PARALLAXE LÉGER POUR LES ÉTOILES =====
    const starsContainers = document.querySelectorAll('.stars-container');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        starsContainers.forEach(container => {
            const section = container.parentElement;
            const offsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // si section visible
            if(scrollY + window.innerHeight > offsetTop && scrollY < offsetTop + sectionHeight){
                // décalage léger proportionnel à scroll
                const relativeY = scrollY - offsetTop;
                container.style.transform = `translateY(${relativeY * 0.1}px)`; 
            }
        });
    });

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalInfo = document.getElementById('modalInfo');
    const closeBtn = document.getElementById('closeModal');

    // Sélectionner toutes les images de la galerie
    const galleryImages = document.querySelectorAll('.gallery img, .mini_gallery img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            // Affiche le modal
            modal.classList.add('active');
            modalImg.src = img.src;

            // Récupère les infos depuis data-info
            const infoText = img.dataset.info || "Pas d'infos supplémentaires";

            // Transforme " | " en liste HTML
            const infoItems = infoText.split(" | ");
            modalInfo.innerHTML = `<h3>${img.alt || "Projet"}</h3><ul>` +
                infoItems.map(item => `<li>${item}</li>`).join('') +
                `</ul>`;
        });
    });

    // Fermer le modal avec le X
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Fermer en cliquant en dehors de l'image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

const cursor = document.getElementById('custom-cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`; 
  // -20 pour centrer le curseur
});

// Optionnel : hover sur images ou boutons pour agrandir le curseur
const hoverElems = document.querySelectorAll('button, .gallery img, .mini_gallery img');

hoverElems.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.background = 'rgba(168, 230, 207, 0.6)'; // vert pastel
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.background = 'rgba(0, 26, 255, 0.664)';
    });
});