document.addEventListener('DOMContentLoaded', function() {
    // Adicionar funcionalidade de rotação dos cards
    const cards = document.querySelectorAll('.card');
    
    // Função para verificar se é um dispositivo mobile
    function isMobile() {
        return window.innerWidth <= 1000;
    }

    // Adicionar evento de toque para mobile
    if (isMobile()) {
        cards.forEach(card => {
            card.addEventListener('touchend', function(e) {
                // Prevenir que o toque no trailer ative o card
                if (e.target.closest('.trailer-btn')) {
                    return;
                }
                this.classList.toggle('is-flipped');
            });
        });
    }

    // Modal de vídeo
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeBtn = document.querySelector('.close');
    const trailerBtns = document.querySelectorAll('.trailer-btn');

    // Função para abrir o modal com o vídeo
    function openVideoModal(videoId) {
        const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        videoFrame.src = videoUrl;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir rolagem da página
    }

    // Função para fechar o modal
    function closeVideoModal() {
        modal.style.display = 'none';
        videoFrame.src = ''; // Parar o vídeo
        document.body.style.overflow = ''; // Restaurar rolagem da página
    }

    // Função para atualizar a visibilidade dos trailers baseado no idioma
    function updateTrailerVisibility(language) {
        trailerBtns.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang) {
                // Se o botão tem um idioma específico
                if (btnLang === language) {
                    btn.style.display = 'inline-block';
                } else {
                    btn.style.display = 'none';
                }
            } else {
                // Se o botão não tem idioma específico, mostrar apenas se não houver botão do idioma atual
                const hasLanguageSpecificBtn = Array.from(trailerBtns).some(b => 
                    b.getAttribute('data-lang') === language && 
                    b.closest('.card') === btn.closest('.card')
                );
                btn.style.display = hasLanguageSpecificBtn ? 'none' : 'inline-block';
            }
        });
    }

    // Event listeners para os botões de trailer
    trailerBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevenir que o clique no trailer ative o card
            const videoId = this.getAttribute('data-video');
            openVideoModal(videoId);
        });
    });

    // Fechar modal ao clicar no X
    closeBtn.addEventListener('click', closeVideoModal);

    // Fechar modal ao clicar fora do conteúdo
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Fechar modal ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeVideoModal();
        }
    });

    // Atualizar visibilidade dos trailers quando o idioma mudar
    document.querySelectorAll('.language-selector').forEach(selector => {
        selector.addEventListener('click', function() {
            const language = this.getAttribute('data-language');
            updateTrailerVisibility(language);
        });
    });

    // Inicializar visibilidade dos trailers com o idioma padrão
    updateTrailerVisibility('en');

    // Adicionar eventos para reconhecer mudanças de tamanho da tela
    window.addEventListener('resize', function() {
        location.reload(); // Recarregar a página quando o tamanho mudar
    });
}); 