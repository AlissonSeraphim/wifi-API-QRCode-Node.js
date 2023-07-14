# WiFi API em Node.js e Express

Esta é uma API de WiFi desenvolvida em Node.js e Express que permite a geração de QR Codes para configuração de redes WiFi. O projeto também inclui uma pasta com um front-end simples contendo um arquivo HTML e JavaScript para interagir com a API.

## Funcionalidades

- O método GET permite obter um QR Code com as credenciais de WiFi.
- O método POST permite atualizar as credenciais de WiFi.

## Biblioteca QRCode

A biblioteca `qrcode` foi utilizada para gerar os QR Codes. Ela permite a criação de imagens QR Code a partir dos dados fornecidos.

## Configuração e Instalação

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto e execute o comando `npm install` para instalar as dependências.
3. Inicie o servidor executando o comando `npm start`.
4. Acesse o front-end abrindo o arquivo `index.html` em seu navegador.

## Como usar

- Para obter um QR Code, faça uma requisição GET para `/wifi`.
- Para atualizar as credenciais de WiFi, faça uma requisição POST para `/wifi`, fornecendo as novas credenciais no corpo da requisição no formato JSON.

### Exemplo de Requisições

#### GET - Obter QR Code

``` GET /wifi ```

#### POST - Atualizar Credenciais de WiFi

```
POST /wifi
Content-Type: application/json

{
"username": "novousuario",
"password": "novasenha"
}
```

## Tecnologias utilizadas

- Node.js
- Express

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novas funcionalidades.

## Contato

Em caso de dúvidas ou sugestões, você pode entrar em contato comigo:

- LinkedIn: [Alisson Tassi](https://www.linkedin.com/in/alissontassi/)
- GitHub: [AlissonSeraphim](https://github.com/AlissonSeraphim)
