# Desafio 5: Arquitetura de Microsserviços com API Gateway

Este projeto implementa o padrão **API Gateway** para centralizar o acesso a múltiplos microsserviços. O Gateway atua como um "proxy reverso", recebendo as requisições externas e encaminhando-as para o serviço competente dentro da rede Docker.

## Tecnologias

- **Node.js & Express:** Utilizados tanto nos microsserviços quanto no Gateway.
- **Express-Http-Proxy:** Middleware para realizar o roteamento e redirecionamento de chamadas.
- **Docker Compose:** Orquestração dos containers e criação da rede interna.

## Arquitetura e Serviços

O sistema é composto por 3 containers isolados:

1.  **Gateway (Porta 8000):** O único ponto de entrada acessível externamente. Gerencia as rotas `/users` e `/orders`.
2.  **Users Service (Porta 3001 - Interna):** Fornece dados de usuários.
3.  **Orders Service (Porta 3002 - Interna):** Fornece dados de pedidos.

## Decisões Técnicas

### 1. Segurança (Ponto Único de Entrada)

Para cumprir o requisito de segurança, os serviços `users` e `orders` **não expõem portas** (`ports`) no `docker-compose.yml`. Eles são acessíveis apenas de dentro da rede do Docker, obrigando todo o tráfego a passar pelo Gateway.

### 2. Roteamento e "Path Stripping"

Ao configurar o proxy, o Gateway consome o prefixo da URL (ex: `/users`) e envia o restante para o microsserviço.
Por isso, ajustamos os microsserviços para escutarem na rota raiz (`/`).

## ⚙️ Como Executar

1. Na pasta `desafio5`, suba a orquestração:
   ```bash
   docker-compose up --build
   ```
2. Teste os endpoints no navegador:

- Status do Gateway: http://localhost:8000/
- Usuários: http://localhost:8000/users
- Pedidos: http://localhost:8000/orders
