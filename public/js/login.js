const form = document.createElementbyId('loginForm');

form.addEventListener('submit', async(error) => {
    error.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const res = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await res.json();
        alert(data.mensagem);

    } catch(error) {
        console.error("erro: ", error);
    }
});