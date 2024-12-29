// script.js

// Scroll suave ao clicar em âncoras (caso você adicione links internos no futuro)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Texto aparecendo lentamente (fade-in e fade-in reverso)
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.boundingClientRect.top > 0) {
                entry.target.classList.add('fade-in'); // Animação de cima para baixo
            } else {
                entry.target.classList.add('fade-in-up'); // Animação de baixo para cima
            }
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.pagina-inicial, .pagina-dois, .pagina-tres, .pagina-quatro').forEach(section => {
    fadeInObserver.observe(section);
});

// Alteração de fundo e texto na última seção
const lastSection = document.querySelector('.pagina-quatro');

const backgroundObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.body.style.background = "linear-gradient(to bottom, black, #000)";
            document.body.style.color = "white";
        } else {
            document.body.style.background = "";
            document.body.style.color = "";
        }
    });
}, { threshold: 0.5 });

backgroundObserver.observe(lastSection);
