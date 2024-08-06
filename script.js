//Download button

function downloadFile() {
    const link = document.createElement('a');
    link.href = "./resume/Resume Gustavo.pdf";
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//Scroll screen 

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

//emailjs

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = 'Enviando...';

    emailjs.send('YB2XTN_9-v5_2MZpbL', 'service_m5ch4un', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        statusMessage.textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('contactForm').reset();
    }, function(error) {
        statusMessage.textContent = 'Ocorreu um erro ao enviar a mensagem.';
    });
});
