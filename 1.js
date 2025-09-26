// JavaScript para funcionalidades básicas do perfil do Instagram

// Botão de seguir
const followBtn = document.querySelector('.follow-btn');

followBtn.addEventListener('click', function() {
    if (this.textContent === 'Seguir') {
        this.textContent = 'Seguindo';
        this.style.backgroundColor = '#8e8e8e';
    } else {
        this.textContent = 'Seguir';
        this.style.backgroundColor = '#0095f6';
    }
});

// Funcionalidade de curtir posts (simples)
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    post.addEventListener('dblclick', function() {
        // Simula curtir com double-click
        const overlay = this.querySelector('.post-overlay');
        const likeCount = overlay.querySelector('span:first-child');
        let currentLikes = parseInt(likeCount.textContent.split(' ')[1]);
        currentLikes++;
        likeCount.textContent = `❤️ ${currentLikes}`;
        
        // Animação de coração
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'absolute';
        heart.style.top = '50%';
        heart.style.left = '50%';
        heart.style.transform = 'translate(-50%, -50%) scale(0)';
        heart.style.fontSize = '50px';
        heart.style.animation = 'likeAnimation 0.6s ease-out';
        this.appendChild(heart);
        
        setTimeout(() => {
            this.removeChild(heart);
        }, 600);
    });
});

// Animação CSS para o coração
const style = document.createElement('style');
style.textContent = `
    @keyframes likeAnimation {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Placeholder para mais funcionalidades futuras
console.log('Perfil do Instagram carregado com sucesso!');
