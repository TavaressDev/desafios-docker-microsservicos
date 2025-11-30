Este repositório contém a resolução dos desafios práticos propostos na disciplina de **Fundamentos de Computação Concorrente, Paralela e Distribuída**.

O objetivo principal deste projeto foi explorar conceitos fundamentais de containerização, orquestração e arquitetura de microsserviços utilizando **Docker** e **Docker Compose**.

## 📂 Estrutura do Projeto

O projeto está organizado em 5 desafios incrementais, cada um focando em um aspecto específico da tecnologia:

### [Desafio 1: Containers em Rede](./desafio1)

**Foco:** Networking básico no Docker.

- Criação de uma rede bridge customizada.
- Comunicação entre dois containers isolados (Servidor Web e Cliente) via resolução de nomes (DNS interno do Docker).

### [Desafio 2: Volumes e Persistência](./desafio2)

**Foco:** Gestão de dados e Volumes.

- Implementação de um banco de dados containerizado.
- Utilização de **Docker Volumes** para garantir que os dados persistam mesmo após a remoção ou reinício do container.

### [Desafio 3: Orquestração com Docker Compose](./desafio3)

**Foco:** Orquestração de múltiplos serviços.

- Uso do **Docker Compose** para subir uma stack completa (App Web, Cache Redis e Banco de Dados) com um único comando.
- Gerenciamento de dependências de inicialização (`depends_on`).

### [Desafio 4: Microsserviços Independentes](./desafio4)

**Foco:** Comunicação HTTP entre serviços.

- Criação de dois microsserviços (API Produtora e Cliente Consumidor) com Dockerfiles independentes.
- Integração via chamadas HTTP dentro da rede do Docker, simulando um ambiente distribuído real.

### [Desafio 5: Arquitetura com API Gateway](./desafio5)

**Foco:** Padrão API Gateway e Segurança.

- Implementação de um **API Gateway** como ponto único de entrada.
- Centralização do acesso aos microsserviços de _Usuários_ e _Pedidos_.
- Isolamento da rede interna (os microsserviços não expõem portas externas, apenas o Gateway).

---

## 🛠️ Tecnologias Utilizadas

- **Docker & Docker Compose**
- **Node.js** (Ambiente de execução dos serviços)
- **Express.js** (Framework Web e API Gateway)
- **Redis** (Cache)
- **PostgreSQL** (Banco de Dados Relacional)

## 🚀 Como Executar

Cada desafio possui o seu próprio `README.md` detalhado e isolado. Para testar um desafio específico:

1.  Navegue até a pasta do desafio (ex: `cd desafio5`).
2.  Siga as instruções de execução contidas no README daquela pasta.
