# Desafio 3: Orquestração de Múltiplos Serviços com Docker Compose

Este projeto demonstra o uso do **Docker Compose** para orquestrar um ambiente complexo composto por uma aplicação Web (Node.js), um sistema de Cache (Redis) e um Banco de Dados (PostgreSQL) com um único comando.

## Tecnologias Utilizadas

- **Docker Compose** (Orquestração de containers)
- **Node.js** (Aplicação Web)
- **Redis** (Armazenamento em memória/Cache)
- **PostgreSQL** (Banco de dados relacional)

## Arquitetura e Decisões Técnicas

Diferente dos desafios anteriores, onde os containers eram iniciados manualmente um a um, aqui utilizamos a abordagem de **Infrastructure as Code (IaC)**.

**Estrutura dos Serviços:**

1.  **`web`**: A aplicação Node.js que expõe a porta `8080`. Ela se conecta ao serviço de cache para contar visitas.
2.  **`cache`**: Uma instância Redis usada para armazenar o contador de acessos de forma rápida.
3.  **`db`**: Uma instância PostgreSQL pronta para uso, com persistência de dados configurada.

**Decisões Importantes:**

- **Orquestração Automatizada:** O arquivo `docker-compose.yml` define todos os serviços, redes e volumes. Isso elimina a necessidade de criar redes manuais (`docker network create`) ou linkar containers manualmente.
- **Dependências (`depends_on`):** Configurei a aplicação `web` para aguardar o início dos serviços `cache` e `db`, garantindo que a infraestrutura esteja pronta antes da aplicação tentar conectar.
- **Persistência:** O banco de dados utiliza um volume nomeado (`pgdata`) gerenciado pelo Docker, garantindo que os dados não sejam perdidos se o container reiniciar.

## ⚙️ Como Executar

### 1. Subir o Ambiente

- Na pasta do projeto, execute o comando que constrói as imagens (se necessário) e inicia todos os serviços:

```bash
docker-compose up --build
```

O terminal mostrará os logs de todos os três serviços subindo simultaneamente.

## 2. Testar a Aplicação

- Abra o navegador e acesse: http://localhost:8080

- Você verá o contador de visitas.

- Recarregue a página (F5) várias vezes e observe o contador incrementando

## 3. Parar o Ambiente

- Para parar e remover os containers (mantendo os volumes de dados), use:

```
docker-compose down
```

## 4. Resultados Esperados

- Ao acessar a aplicação, o retorno visual confirma a integração: "Esta página foi vista X vezes."

- Isso demonstra que o container web conseguiu resolver o nome DNS cache automaticamente e trocar dados com ele.
