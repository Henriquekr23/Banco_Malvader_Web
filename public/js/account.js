const logoutButton = document.getElementById("logoutButton")

async function getUserData(cpf) {
    try {
        const res = await fetch(`http://localhost:3000/api/myaccount?${cpf}`, {
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

logoutButton.addEventListener("click", () => {
    const email = user.email;
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
    };
});