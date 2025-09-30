# Sistema de Cadastro e Escolha de Voluntários 

Este projeto é uma API desenvolvida em Node.js com TypeScript, utilizando Express, Prisma ORM e PostgreSQL. O objetivo é registrar voluntários para depois decidir qual lado o proprietário quer colocar ou se o voluntário será recusado. 
O objetivo principal é aprender novas funcionalidades profissionais, algumas funcionalidade como autenticação não estão presentes nesse projeto, aqui o foco é no Winston, Swagger, Jest, Docker e deploy (no Render).


## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- PostgreSQL
- Prisma ORM
- Winston
- Swagger
- Jest
- deploy (com Render)
- Docker

## Funcionalidades

- Cadastro de contas (voluntário)
- Teste automatizado
- Logs estruturados com Winston
- Escolha manual para qual lado o voluntário irá ou ele será recusado.
- Documentação automática com swagger

## Como Rodar o Projeto

Clone o repositório:
```bash
git clone https://github.com/Luciano-200/projeto-organizar-voluntarios.git
cd seu-projeto
npm install
npm start
```

##  Rode em modo de desenvolvimento

npm run dev

##  Compile o projeto para produção

npm run build

##  Configure o arquivo .env com sua conexão ao banco de dados

DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua_chave_secreta

### Executar migrations
- Ambiente de desenvolvimento:
  ```bash
  npx prisma migrate dev

- Ambiente de produção:
```bash
npx prisma migrate deploy
```
## Testes

Os testes foram escritos com **Jest**.  
Para rodar:
npm test

## 📖 Documentação
A documentação da API está disponível em:
https://skyrim-api-6aad.onrender.com/api-docs

##  Aprendizados

- Como criar e conectar um banco PostgreSQL no Render  
- Como usar Docker para empacotar a aplicação  
- Como configurar logs com Winston  
- Como documentar rotas com Swagger  
- Como rodar testes automatizados com Jest  
- Como lidar com erros de deploy e cache no Render

## Deploy

A API está publicada no [Render](https://render.com).

**URL base:** https://skyrim-api-6aad.onrender.com

Exemplo de endpoint:
POST https://skyrim-api-6aad.onrender.com/api/volunteers

## Observações

Este projeto é simples propositalmente para poder focar em utilizar novas funcionalidades.

##  Autor

Luciano
Desenvolvedor, focado em back-end com Node.js e TypeScript. 
