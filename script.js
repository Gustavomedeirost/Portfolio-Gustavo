/*------------- Download button ------------*/

function downloadFile() {
    const link = document.createElement('a');
    link.href = "./resume/Resume Gustavo Medeiros.pdf";
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function downloadFile() {
    const link = document.createElement('lettercover');
    link.href = "./resume/apresentação.pdf";
    link.download = 'lettercover.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/*----------- Scroll screen --------------*/

document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('.content');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


/* ----- TYPING EFFECT ----- */

const palavras = ["WELCOME!", "BEM-VINDO!", "BENVENUTO!", "¡BIENVENIDO!", "BIENVENU!",];
let index = 0;
const palavraElement = document.getElementById("alternar-palavra");

function alternarPalavra() {
    palavraElement.textContent = palavras[index];
    index = (index + 1) % palavras.length;
}

setInterval(alternarPalavra, 1200);
