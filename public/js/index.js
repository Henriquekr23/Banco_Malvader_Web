const authButton = document.getElementById("authButton");

let isLogged = false;

async function checkLogin() {
    try {
        const res = await fetch('http://localhost:3000/api/auth/me', {
            method: 'GET',
            credentials: "include"
        });

        if (res.ok) {
            const data = await res.json();
            isLogged = true;

            authButton.textContent = "Minha Conta";
            authButton.style.backgroundColor = "#28a745";
        } else {
            isLogged = false;

            authButton.textContent = "Acesse/Crie sua conta";
            authButton.style.backgroundColor = "#FFD23F";
        }

    } catch(error) {
        isLogged = false;

        authButton.textContent = "Acesse/Crie sua conta";
        authButton.style.backgroundColor = "#FFD23F";
    }
}

checkLogin();

authButton.addEventListener("click", () => {
    if (isLogged) {
        window.location.href = "/minhaConta.html";
    } else {
        window.location.href = "/login.html";
    }
});