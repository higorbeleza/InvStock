# InvStock

Bem-vindo à API de Gerenciamento de Estoque!

## Instalação

1. Clone este repositório: `https://github.com/higorbeleza/InvStock`
2. Navegue até o diretório: `cd InvStock`
3. Instale as dependências: `npm install`

## Uso

### Adicionar um produto

**Endpoint:** `POST /add_produto`

**Corpo da Requisição:**
```json
{
  "name": "nome do produto",
  "desc": "Uma descrição top",
  "price": "3000,00",
  "qt": 15
}
