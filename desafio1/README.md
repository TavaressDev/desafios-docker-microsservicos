# Desafio 1: Comunicação entre Containers via Rede Bridge

Este projeto demonstra a comunicação entre dois containers Docker isolados (um Cliente e um Servidor) utilizando uma rede customizada para resolução de nomes (DNS).

## Tecnologias Utilizadas

- **Docker** (Engine e CLI)
- **Node.js** (Runtime para os scripts)
- **Rede Bridge** (Driver de rede do Docker)

## Arquitetura e Decisões Técnicas

O sistema é composto por dois serviços distintos:

1.  **Servidor (`server`)**: Uma API simples em Node.js rodando na porta 8080.
2.  **Cliente (`client`)**: Um script que faz requisições HTTP automáticas a cada 5 segundos para o servidor.

**Decisão de Rede:**
Para permitir a comunicação, foi criada uma rede customizada do tipo `bridge`. Isso permite que os containers se "enxerguem" pelo nome, eliminando a necessidade de usar IPs fixos.

- O cliente acessa o servidor via URL: `http://server:8080` (onde "server" é o nome do container na rede).

## ⚙️ Como Executar

Siga os passos abaixo para subir o ambiente do zero.

### 1. Preparar a Rede

Crie a rede que servirá de ponte entre os containers:

```
docker network create rede
```

### 2. Subir o servidor

- Construa a imagem e inicie o container do servidor na porta 8080:

```
# Na pasta do projeto
docker build -t server .
docker run --name server --network rede -p 8080:8080 -d server
```

### 3. Subir o cliente

- Em outro terminal, construa e rode o cliente. Note que usamos -f pois o Dockerfile tem um nome específico:

```
docker build -t client -f Dockerfile.client .
docker run --name client --network rede client
```

### 4. Teste e Resultados

- Ao rodar o cliente, o terminal exibirá as respostas vindas do servidor a cada 5 segundos.

```
Servidor docker está funcionando
Servidor docker está funcionando
...
```

- Também é possível acessar o servidor diretamente pelo navegador em http://localhost:8080.
