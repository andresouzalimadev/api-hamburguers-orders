# API de Gerenciamento de Pedidos

Este repositório contém uma aplicação Node.js Express simples para gerenciar pedidos. A API suporta operações básicas de CRUD (Create, Read, Update, Delete) para pedidos. Cada pedido possui um identificador único gerado usando a biblioteca UUID.


### 1. Obter Todos os Pedidos

- **Endpoint:** `GET /order`
- **Descrição:** Recupere uma lista de todos os pedidos.
- **Exemplo de Resposta:**
  ```json
  [
    {
      "id": "d3885746-67c6-4df4-8293-1d2982c3e2fe",
      "order": "Produto A",
      "clientName": "John Doe",
      "price": 50,00,
      "status": "Pendente"
    },
    // ... outros pedidos
  ]
  ```

### 2. Criar um Novo Pedido

- **Endpoint:** `POST /order`
- **Descrição:** Crie um novo pedido.
- **Corpo da Solicitação:**
  ```json
  {
    "order": "Produto B",
    "clientName": "Jane Doe",
    "price": 75,00,
    "status": "Processando"
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
    "id": "a12c3d45-67e8-4fgh-901i-jk2lmn345opq",
    "order": "Produto B",
    "clientName": "Jane Doe",
    "price": 75,00,
    "status": "Processando"
  }
  ```

### 3. Obter Pedido por ID

- **Endpoint:** `GET /order/:id`
- **Descrição:** Recupere os detalhes de um pedido específico.
- **Exemplo de Resposta:**
  ```json
  {
    "id": "d3885746-67c6-4df4-8293-1d2982c3e2fe",
    "order": "Produto A",
    "clientName": "John Doe",
    "price": 50,00,
    "status": "Pendente"
  }
  ```

### 4. Atualizar Pedido por ID

- **Endpoint:** `PUT /order/:id`
- **Descrição:** Atualize todos os detalhes de um pedido específico.
- **Corpo da Solicitação:**
  ```json
  {
    "order": "Produto A Atualizado",
    "clientName": "John Doe",
    "price": 60,00,
    "status": "Concluído"
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
    "id": "d3885746-67c6-4df4-8293-1d2982c3e2fe",
    "order": "Produto A Atualizado",
    "clientName": "John Doe",
    "price": 60,00,
    "status": "Concluído"
  }
  ```

### 5. Atualizar Status do Pedido por ID

- **Endpoint:** `PATCH /order/:id`
- **Descrição:** Atualize apenas o status de um pedido específico.
- **Corpo da Solicitação:**
  ```json
  {
    "status": "Enviado"
  }
  ```
- **Exemplo de Resposta:**
  ```json
  {
    "id": "d3885746-67c6-4df4-8293-1d2982c3e2fe",
    "order": "Produto A Atualizado",
    "clientName": "John Doe",
    "price": 60,00,
    "status": "Enviado"
  }
  ```

### 6. Excluir Pedido por ID

- **Endpoint:** `DELETE /order/:id`
- **Descrição:** Exclua um pedido específico.

## Início do Servidor

O servidor está configurado para ser executado na porta 3000. Após iniciar o servidor, você verá a seguinte mensagem no console:

```bash
🖥🖥🖥 Server started on port 3000
```
