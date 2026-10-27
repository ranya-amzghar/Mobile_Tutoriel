function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    // Classes de base pour tous les toasts
    let classes = 'text-white px-4 py-2 rounded shadow-lg mb-2 transition-opacity duration-500';
    
    // Couleur conditionnelle
    if (type === 'success') {
        classes += ' bg-green-500';
    } else {
        classes += ' bg-red-500';
    }
    
    toast.className = classes;
    toast.textContent = message;
    
    container.appendChild(toast);

    // Disparition avec animation
    setTimeout(() => {
        toast.style.opacity = '0'; // Déclenche la transition CSS Tailwind
        setTimeout(() => toast.remove(), 500); // Supprime du DOM après la fin de l'animation
    }, 3000);
}