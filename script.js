// Script para adicionar efeito de destaque ao passar o mouse sobre as cartas
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s';
    });


    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});