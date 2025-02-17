function toggleMenu() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("active");
}


let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    slides.forEach(slide => slide.classList.remove("active"));
    slides[slideIndex].classList.add("active");
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Esperar a que cargue la página
window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");

    preloader.classList.add("hidden"); // Agrega la clase para ocultarlo
    setTimeout(() => {
        preloader.style.display = "none"; // Lo elimina después de la animación
        content.style.display = "block"; // Muestra el contenido
    }, 3000);
});

