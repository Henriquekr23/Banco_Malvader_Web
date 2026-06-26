const logoutButton = document.getElementById("btnLogout")
let userData = null;

async function getLoggedUser() {
    try {
        const res = await fetch('http://localhost:3000/api/auth/me', {
            method: 'GET',
            credentials: "include"
        });

        if(!res.ok){
            window.location.href = '/login';
            return null;
        }

        const data = await res.json();
        return data.usuario;
    } catch(error) {
        window.location.href = '/login';
        return null;
    }
};

async function getUserData(cpf) {
    try {
        const res = await fetch(`http://localhost:3000/api/account/myaccount/${cpf}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });

        if(!res.ok) return null;

        return await res.json() //retorna { nome, email, data_criacao }
    } catch(error) {
        throw new Error(error);
    };
};

logoutButton.addEventListener("click", async () => {
    const email = userData.email;
    try {
        const res = await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials:'include',
            body: JSON.stringify({
                email
            })
        })
    } catch(error) {
        throw new Error(error);
        console.log(error);
    };
});

document.addEventListener('DOMContentLoaded', async () => {
    const loggedUser = await getLoggedUser();
    if (!loggedUser) return;

    userData = await getUserData(loggedUser.cpf);
    console.log("Dados do usuario: ", userData);

    if(userData) {
        document.getElementById('nome').value = userData.nome_usuario;
        document.getElementById('cpf').value = loggedUser.cpf;
        document.getElementById('email').value = userData.email_usuario;
    };
});