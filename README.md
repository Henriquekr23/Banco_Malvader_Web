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