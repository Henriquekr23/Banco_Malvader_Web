import argon2 from 'argon2';

async function hashPassword(password) {
    return await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 2 ** 14,
        timeCost: 3,
        parallelism: 1
    });
};

async function verifyPassword(hash, password) {
    return await argon2.verify(hash, password);
};

async function changePassword(storedHash, currentSenha, newSenha) {
    const isCorrect = await verifyPassword(storedHash, currentSenha);

    if(!isCorrect) throw new Error('Senha incorreta');

    const newHash = await hashPassword(newSenha);
    return newHash;
};

export { verifyPassword, hashPassword, changePassword };