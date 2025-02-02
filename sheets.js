const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=nome]').value;  
    const email = document.querySelector('input[name=email]').value; 
    const mensagem = document.querySelector('textarea[name=mensagem]').value; 

    fetch('https://api.sheetmonkey.io/form/ao6XcPKgCogruzzoGdrmcq', {
        method: 'POST',
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({ nome: name, email, mensagem }),
    })
    .then(response => {
        if (response.ok) {
            // Exibir notificação de sucesso
            document.getElementById('notification').style.display = 'block';
            document.getElementById('contactForm').reset(); 
        } else {
            
            console.error('Erro ao enviar os dados:', response.statusText);
        }
    })
    .catch(error => {
        // Ocultar o elemento de loading em caso de erro
        document.getElementById('loading').style.display = 'none';
        console.error('Erro na requisição:', error);
    });
}


document.getElementById('contactForm').addEventListener('submit', handleSubmit);