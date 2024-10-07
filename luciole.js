const firefliesContainer = document.querySelector('#luciole'); // Sélectionne la section #fif

function createFirefly() {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';

    // Obtiens les dimensions du conteneur #fif
    const containerWidth = firefliesContainer.offsetWidth;
    const containerHeight = firefliesContainer.offsetHeight;

    // Position aléatoire à l'intérieur des dimensions du conteneur
    const x = Math.random() * containerWidth;
    const y = Math.random() * containerHeight;

    // Taille aléatoire pour chaque luciole
    const size = Math.random() * 15 + 10;

    firefly.style.left = `${x}px`; // Position horizontale
    firefly.style.top = `${y}px`;  // Position verticale
    firefly.style.width = `${size}px`; // Largeur de la luciole
    firefly.style.height = `${size}px`; // Hauteur de la luciole

    // Ajoute la luciole au conteneur
    firefliesContainer.appendChild(firefly);

    // Supprime la luciole après l'animation
    setTimeout(() => {
        firefly.remove();
    }, 1500);
}

// Générer des lucioles à intervalle régulier
setInterval(createFirefly, 120);
