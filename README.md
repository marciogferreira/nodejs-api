# Nodejs-Api
---
Criando um CRUD com autenticação de usuário e conexão com Mysql
Tecnologias: NodeJs + Express + Jwt + Validation + Mysql

<div style="background: #CCC; padding: 1px;"></div>

## Como baixar e rodar o projeto
---
```bash

    # Clonar o repositório
    git clone 

    # Entrar no diretório
    cd nodejs-api

    # Instalar as dependências do projeto
    npm install

    # Configurar o banco de dados
    # edite o arquivo /config/Connection.js
    this.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'name_database'
    });

    # Executar o projeto
    npm start

    # Acesse
    http://localhost:8000

```
---