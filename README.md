# InvStock

Bem-vindo à API de Gerenciamento de Estoque!

## Instalação

1. Clone este repositório: `https://github.com/higorbeleza/InvStock`
2. Navegue até o diretório: `cd InvStock`
3. Instale as dependências: `npm install`

## Uso

### Adicionar um produto

**Endpoint:** `POST /add_product`

**Corpo da Requisição:**
```json
{
  "name": "nome do produto",
  "desc": "Uma descrição top",
  "price": "3000,00",
  "qt": 15
}
```

## Configuração
A API utiliza as seguintes variáveis de ambiente:

PORT: porta em que o servidor será executado (padrão: 3000)

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

Contato: higorbeleza297@gmail.com
