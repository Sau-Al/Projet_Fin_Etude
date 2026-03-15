const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.querySelector(".close");

// sélectionner toutes les images du site
const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("click", () => {

        modal.classList.add("active");
        modalImg.src = img.src;

        // chercher le figcaption s'il existe
        const caption = img.parentElement.querySelector("figcaption");

        if (caption) {
            captionText.textContent = caption.textContent;
        } else if (img.alt) {
            captionText.textContent = img.alt;
        } else {
            captionText.textContent = "";
        }

    });

});

// fermer avec le X
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

// fermer en cliquant à l'extérieur
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});