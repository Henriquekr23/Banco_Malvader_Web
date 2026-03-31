const { response } = require("../../src/app");

const form = document.getElementById('cadastroForm');

form.addEventListener('submit', async(error) => {
    error.preventDefault();

    try {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const cpf = document.getElementById('cpf').value;

        const res = await fetch('api/register ', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ nome, email, senha, cpf })
        });

        if(res.ok) {
            window.location.href = '/index.html';
        }
    } catch(error) {
        console.error("Erro: ", error);
    }
});