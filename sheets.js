document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        fetch('https://script.google.com/macros/s/AKfycbyz65XyHWkLAQMJZBOS6YrKHsSN-Nhk8UZCVfQ7WWSXfF1ct1KlHSiaWWBiwArl1vgT/exec', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                document.getElementById('notification').style.display = 'block'; // Exibe notificação
                this.reset(); // Limpa o formulário
            } else {
                console.error('Erro:', data.message);
            }
        })
        .catch(error => console.error('Erro:', error));
    });
});