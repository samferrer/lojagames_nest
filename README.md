# 🎮 Loja de Games API

API REST desenvolvida com NestJS para gerenciamento de uma loja de games, permitindo o cadastro, consulta, atualização e remoção de produtos e categorias.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* NestJS
* TypeScript
* TypeORM
* MySQL
* Insomnia (para testes)

---

## 📌 Funcionalidades

### 📂 Categoria

* Criar categoria
* Listar categorias
* Buscar categoria por ID
* Buscar categoria por nome
* Atualizar categoria
* Deletar categoria

### 🎮 Produto

* Criar produto
* Listar produtos
* Buscar produto por ID
* Buscar produto por nome
* Atualizar produto
* Deletar produto

---

## 🔗 Relacionamento

* Uma **Categoria** pode ter vários **Produtos**
* Um **Produto** pertence a apenas uma **Categoria**

Relacionamento implementado com:

* `@OneToMany`
* `@ManyToOne`

---

## ⚙️ Configuração do Projeto

### 1. Instalar dependências

```bash
npm install
```

---

### 2. Configurar o banco de dados

Crie um banco no MySQL:

```sql
CREATE DATABASE db_lojagames;
```

Configure no arquivo `app.module.ts`:

```ts
TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_lojagames',
      entities: [Categoria, Produto],
      synchronize: true,
})
```

---

### 3. Rodar o projeto

```bash
npm run start:dev
```

A aplicação estará disponível em:

```
http://localhost:4000
```

---

## 🧪 Testes com Insomnia

### 📂 Categoria

#### Criar

POST /categorias

```json
{
  "nome": "Ação",
  "descricao": "Jogos de ação e aventura"
}
```

---

### 🎮 Produto

#### Criar

POST /produtos

```json
{
  "nome": "God of War Ragnarok",
  "descricao": "Jogo de ação para PS5",
  "preco": 299.90,
  "estoque": 10,
  "console": "PS5",
  "categoria": {
    "id": 1
  }
}
```

---

## 📁 Estrutura do Projeto

```
src/
 ├── categoria/
 ├── produto/
 ├── app.module.ts
 └── main.ts
```

---

## 📚 Conceitos Aplicados

* Arquitetura em camadas (Controller, Service, Entity)
* Injeção de dependência
* CRUD completo
* Relacionamento entre entidades
* Boas práticas com NestJS

---

## 👩‍💻 Desenvolvido por

Samara Ferreira 🚀

---

## 📌 Observações

Este projeto foi desenvolvido para fins educacionais como parte de um exercício prático de Backend com NestJS - Formação em FullStack Javascript pela Generation Brasil.
