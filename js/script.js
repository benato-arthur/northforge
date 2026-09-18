document.addEventListener('DOMContentLoaded', () => { 
    const menuIcon = document.querySelector('header nav'); 
    const menuList = document.querySelector('header nav ul'); 

    if (menuIcon && menuList) { 
        menuIcon.addEventListener('click', (e) => { 
            if (e.target === menuIcon || menuIcon.contains(e.target)) { 
                if (e.target !== menuList && !menuList.contains(e.target)) {
                    menuList.classList.toggle('ativo'); 
                }
            } 
        }); 

        menuList.querySelectorAll('a').forEach(link => { 
            link.addEventListener('click', (e) => { 
                const targetId = link.getAttribute('href'); 
                if (targetId && targetId.startsWith('#')) { 
                    e.preventDefault(); 
                    const targetElement = document.querySelector(targetId); 
                    if (targetElement) { 
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                    } 
                } 
                menuList.classList.remove('ativo'); 
            }); 
        }); 
    } 

    const botoesHero = document.querySelectorAll('.botoes-hero a');
    botoesHero.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    });

    const botaoTrailer = document.querySelector('.card-nosso-primeiro-universo button'); 
    const modal = document.getElementById('modal-trailer'); 
    const botaoFechar = document.querySelector('.botao-fechar'); 
    const videoLocal = document.getElementById('video-trailer'); 
    const urlVideo = "./videos/ecos-do-abismo-trailer.mp4"; 

    if (botaoTrailer && modal && botaoFechar && videoLocal) { 
        const abrirModal = () => {
            videoLocal.setAttribute('src', urlVideo); 
            modal.classList.add('visivel'); 
            document.body.style.overflow = 'hidden'; 
            videoLocal.play(); 
            window.addEventListener('keydown', escFecharModal); 
        };

        const fecharModal = () => { 
            modal.classList.remove('visivel'); 
            document.body.style.overflow = ''; 
            videoLocal.pause(); 
            videoLocal.setAttribute('src', ''); 
            window.removeEventListener('keydown', escFecharModal); 
        }; 

        const escFecharModal = (e) => {
            if (e.key === 'Escape') {
                fecharModal();
            }
        };

        botaoTrailer.addEventListener('click', abrirModal); 
        botaoFechar.addEventListener('click', fecharModal); 
        
        modal.addEventListener('click', (e) => { 
            if (e.target === modal) { 
                fecharModal(); 
            } 
        }); 
    } 
});