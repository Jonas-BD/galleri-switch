// Din cool code here
document.addEventListener('DOMContentLoaded', function() {
    // Array med billederne
    const images = [
        { src: 'assets/img/elephant.jpg', alt: 'Billede af en elefant' },
        { src: 'assets/img/great-white.jpg', alt: 'Billede af en haj' },
        { src: 'assets/img/koala.jpg', alt: 'Billede af en koala' },
        { src: 'assets/img/smithi.jpg', alt: 'Billede af en smithi' },
        { src: 'assets/img/tiger.jpg', alt: 'Billede af en tiger' }
    ];

    const carousel = document.getElementById('app');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Tilføj billederne til karusellen/HTML siden
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add('image');
        if (index === 0) {
            img.classList.add('active'); // Sætter det første billede til at blive vist, når siden bliver opdateret/åbnet
        }
        carousel.appendChild(img); // Tilføjer billederne til HTML siden
    });

    function updateImages() {
        const allImages = document.querySelectorAll('.image');
        allImages.forEach((img, index) => {
            img.classList.remove('active'); // Fjerner så det billede man havde ikke bliver vist
            if (index === currentIndex) {
                img.classList.add('active'); // Gør så det billede man er ved bliver vist
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Gå til forrige billede
        updateImages();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Gå til næste billede
        updateImages(); // Går op til updateImages() function, så de bliver opdateret korrekt
    });
});