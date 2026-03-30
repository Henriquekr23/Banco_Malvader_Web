const form = document.getElementById('cadastroForm');

form.addEventListener('submit', async(error) => {
    error.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;

    try {
        const res = await fetch('http://localhost:3000/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha, cpf })
        });

        const data = await res.json();
        alert(data.mensagem);
    } catch(error) {
        console.error("Erro: ", error);
    }
});