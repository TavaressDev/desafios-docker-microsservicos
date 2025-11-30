# Desafio 4: Comunicação entre Microserviços com Docker Compose

Este projeto simula um cenário real de microserviços, onde um serviço consumidor (Client) precisa requisitar dados de uma API independente através da rede interna do Docker.

## Tecnologias Utilizadas

- **Node.js** (Runtime para os dois serviços)
- **Docker & Docker Compose** (Containerização e Orquestração)
- **Fetch API** (Comunicação HTTP assíncrona)

## Arquitetura

O sistema é dividido em dois serviços isolados:

1.  **Service A (API):** Uma API REST que roda na porta `8000` e fornece uma lista de usuários na rota `/users`.
2.  **Service B (Client):** Uma aplicação que consome os dados da API e os exibe no console.

## Decisões Técnicas e Soluções

### 1. Networking e DNS

Para que os containers conversassem entre si sem o uso de IPs fixos, utilizamos a rede padrão criada pelo Docker Compose.

- O **Client** acessa a **API** utilizando o nome do serviço definido no `docker-compose.yml` como hostname: `http://api:8000`.

### 2. Solução para "Race Condition" (Condição de Corrida)

Ao iniciar os serviços simultaneamente, o Client tentava acessar a API antes dela estar pronta, gerando o erro `ENOTFOUND`.

Para resolver isso, utilizamos a configuração:

> \*\* depends_on:

      - api

\*\*

Isso instrui o Docker a iniciar o container do cliente apenas após o container da API ter sido iniciado.

## ⚙️ Como Executar

- Na pasta raiz do desafio, execute o comando para construir as imagens e subir a orquestração:

```bash
docker-compose up --build
```

- acesse:

```
http://localhost:8000/users
```

## Resultados esperados

- Ao acessar http://localhost:8000/users você verá o json que o endpoint devolve como resposta
