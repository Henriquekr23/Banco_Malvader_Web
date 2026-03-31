const form = document.getElementById('loginForm');

form.addEventListener('submit', async(error) => {
    error.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const res = await fetch('api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, senha })
    });

    if(res.ok) {
        window.location.href = '/index.html';
    } else {
        alert('Email ou senha inválidos')
    }
});