document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('header nav');
    const menuList = document.querySelector('header nav ul');

    if (menuIcon && menuList) {
        menuIcon.addEventListener('click', (e) => {
            if (e.target === menuIcon) {
                menuList.classList.toggle('ativo');
            }
        });

        menuList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                
                if (targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }
                menuList.classList.remove('ativo');
            });
        });
    }

    const botaoTrailer = document.querySelector('.card-nosso-primeiro-universo button');
    const modal = document.getElementById('modal-trailer');
    const botaoFechar = document.querySelector('.botao-fechar');
    const videoLocal = document.getElementById('video-trailer');
    
    const urlVideo = "./videos/ecos-do-abismo-trailer.mp4";

    if (botaoTrailer && modal && botaoFechar && videoLocal) {
        botaoTrailer.addEventListener('click', () => {
            videoLocal.setAttribute('src', urlVideo);
            modal.classList.add('visivel');
            document.body.style.overflow = 'hidden';
            videoLocal.play();
        });

        const fecharModal = () => {
            modal.classList.remove('visivel');
            document.body.style.overflow = '';
            videoLocal.pause();
            videoLocal.setAttribute('src', '');
        };

        botaoFechar.addEventListener('click', fecharModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                fecharModal();
            }
        });
    }
});