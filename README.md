# Banco Malvader Web

Uma API REST para gerenciamento de contas bancárias, desenvolvida com Express.js e PostgreSQL.

## 🔧 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação via token
- **Argon2** - Hash seguro de senhas
- **Docker** - Containerização

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose (ou PostgreSQL instalado localmente)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <repo-url>
cd Banco_Malvader_Web
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (crie um arquivo `.env`):
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/banco_malvader
JWT_SECRET=sua-chave-secreta
PORT=3000
```

## 🐳 Executar com Docker

Inicie o PostgreSQL via Docker Compose:
```bash
docker-compose up -d
```

## ▶️ Rodar a Aplicação

```bash
npm start
```

A API estará disponível em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── app.js                 # Aplicação principal
├── routes/                # Rotas da API
├── controllers/           # Lógica dos endpoints
├── services/              # Lógica de negócio
├── middlewares/           # Middlewares (autenticação, etc)
├── config/                # Configurações
├── database/              # Setup do banco de dados
└── utils/                 # Funções utilitárias
```

## 🔐 Autenticação

A API utiliza JWT (JSON Web Tokens) para autenticação. Endpoints protegidos requerem o token no header:
```
Authorization: Bearer <token>
```

## 📝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -m 'feat: descrição'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT.
