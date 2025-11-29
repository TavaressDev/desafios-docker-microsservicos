# Desafio 2: Persistência de Dados com Banco de Dados

Este projeto implementa um banco de dados **PostgreSQL** em container, configurado para garantir a persistência dos dados mesmo após a destruição do container.

## Tecnologias Utilizadas

- **Docker** (Engine e CLI)
- **PostgreSQL** (Imagem oficial)
- **Docker Volumes** (Bind Mounts)

## Arquitetura e Decisões Técnicas

O objetivo principal deste desafio é resolver o problema da volatilidade dos containers. Por padrão, qualquer dado criado dentro de um container é perdido quando ele é removido.

**Solução de Persistência:**
Utilizei um **Bind Mount** (volume ligado a uma pasta local) para mapear os dados do banco para o meu computador físico (`host`).

- **Mapeamento:** A pasta local `pgdata` é espelhada para `/var/lib/postgresql` dentro do container.
- **Decisão Técnica (Caminho do Volume):** Optei por mapear o diretório pai (`/var/lib/postgresql`) em vez do subdiretório de dados (`.../data`) para garantir compatibilidade com as versões mais recentes da imagem do Postgres, evitando erros de inicialização (`initdb`).

## ⚙️ Como Executar

### 1. Iniciar o Banco de Dados

Abra o terminal na pasta do projeto e execute o comando abaixo (compatível com PowerShell) para subir o container com a persistência ativada:

```powershell
docker run --name meu-postgres -e POSTGRES_PASSWORD=123 -v "${PWD}/pgdata:/var/lib/postgresql" -d postgres
```

### 2. Criar dados

- Acesse o terminal interativo do banco de dados:

```
docker exec -it meu-postgres psql -U postgres
```

- Dentro do prompt interativo do banco (postgres=#), crie uma tabela e insira um dado de teste:

```
CREATE TABLE segredo (mensagem TEXT);
INSERT INTO segredo VALUES ('Volume persiste');
```

### 3. Testar a Persistência

- Para provar que os dados estão seguros, remova o container forçosamente:

```
docker rm -f meu-postgres
```

- Agora, recrie o container usando exatamente o mesmo comando do Passo 1. Aguarde 10 segundos para a inicialização e verifique se os dados ainda estão lá:

```
docker exec -it meu-postgres psql -U postgres -c "SELECT * FROM segredo;"
```

- Resultado Esperado:

```
mensagem
----------------------
 Volume persiste
(1 row)
```

### PRINTS


## 1. Comando para visualização da coluna segredo no banco
![WhatsApp Image 2025-11-29 at 16 12 20](https://github.com/user-attachments/assets/9c24355e-cf1d-418e-8c18-d7589b0d207b)

## 2. Comando de remoção e stop do container + comando de criação do container + comando de visualização da coluna segredo no banco
![WhatsApp Image 2025-11-29 at 16 13 20](https://github.com/user-attachments/assets/7f1430cd-b53c-4301-891c-d6e1f9565719)
