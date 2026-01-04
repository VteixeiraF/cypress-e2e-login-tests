# 🧪 Cypress E2E - Testes de Login

Projeto de testes automatizados End-to-End (E2E) utilizando **Cypress**, com foco em simular o comportamento real do usuário em um fluxo de login.

Este projeto faz parte do meu portfólio como **QA / Analista de Testes**, demonstrando organização, escrita de testes e boas práticas.

---

## 🎯 Objetivo do Projeto

- Automatizar cenários de testes de login
- Validar preenchimento de campos
- Garantir que o comportamento da aplicação esteja conforme o esperado
- Servir como material de estudo e portfólio em Cypress

---

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Cypress**
- **JavaScript**
- **VS Code**
- **Git / GitHub**

---

## ▶️ Como rodar o projeto

### Pré-requisitos
- Node.js instalado
- Git instalado

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cypress-e2e-login-tests.git
cd cypress-e2e-login-tests
npm install
npx cypress open


cypress-e2e-login-tests
├── cypress
│   ├── e2e
│   │   └── login.cy.js
│   ├── fixtures
│   └── support
├── node_modules
├── package.json
└── README.md

✅ Cenários Automatizados

Preenchimento de email válido

Preenchimento de senha válida

Validação de email inválido

Autor

Victor Teixeira
QA / Analista de Testes
Projeto desenvolvido para fins de estudo e portfólio

## Projeto 2 – Testes E2E de Checkout

### Objetivo
Validar o fluxo completo de compra em um e-commerce, desde o login até a finalização do pedido.

### Tecnologias
- Cypress
- JavaScript
- Git / GitHub

### Cenários Automatizados
- Login com usuário válido
- Adição de produto ao carrinho
- Acesso ao checkout
- Preenchimento de dados obrigatórios
- Finalização da compra com sucesso

### Como Executar
```bash
npx cypress open
Selecionar E2E Testing, escolher o navegador e executar checkout.cy.js.

Estrutura
cypress
 └── e2e
     ├── login.cy.js
     └── checkout.cy.js

5. Pressione **Ctrl + S** (salvar)

⚠️ Se você **não apertar Ctrl + S**, nada será salvo.

---

## 🧭 PASSO 2 — CONFERIR SE O GIT VIU A MUDANÇA

No terminal do VS Code, execute:

```bash
git status

Você deve ver algo como:
modified: README.md

