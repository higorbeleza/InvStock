# InvStock

O InvStock é uma aplicação desenvolvida em Node.js que permite a gestão eficiente do estoque de produtos, incluindo funcionalidades de entrada e saída de produtos, bem como o registro de fornecedores.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js
- MongoDB

## Instalação

1. Clone este repositório: `https://github.com/higorbeleza/InvStock`
2. Acesse a pasta do projeto: `cd InvStock`
3. Instale as dependências: `npm install`

## Uso

1. Inicie o servidor: `npm run start`
2. Acesse a aplicação em http://localhost:3000

## Rotas

A aplicação possui as seguintes rotas:

### Products

- `GET /products` -> Lista todos os produtos no estoque.

- `GET /products/:id` -> Lista um produto específico pelo ID.

- `POST /add-product` -> Cadastra um novo produto no estoque.

- `PUT /update-product/:id` -> Atualiza as informações de um produto existente.

- `DELETE /del-product/:id` -> Remove um produto do estoque.

### Suppliers

- `GET /suppliers` -> Lista todos os fornecedores.

- `GET /suppliers/:id` -> Lista um fornecedor específico pelo ID.

- `POST /add-supplier` -> Cadastra um novo fornecedor.

- `PUT /update-supplier/:id` -> Atualiza as informações de um fornecedor existente.

- `DELETE /del-supplier/:id` Remove um fornecedor.

## Visão geral
O Sistema de Controle de Estoque é uma solução que oferece uma API simples para gerenciar o estoque de produtos de um negócio. Com recursos para cadastro de produtos, fornecedores e transações, a aplicação proporciona um controle eficiente sobre as movimentações do estoque.

## Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para o desenvolvimento deste projeto, siga os passos:
- Crie um fork deste repositório
- Crie uma nova branch com sua feature: `git checkout -b feature/nova-feature`
- Faça commit das suas alterações: `git commit -m 'Adicionando nova feature'`
- Faça push para a branch: `git push origin feature/nova-feature`
- Abra um Pull Request

Contato: higorbeleza297@gmail.com
