# Gerenciador de Tarefas

Este é um projeto de Gerenciamento de Tarefas, construído com uma aplicação **frontend** em React e uma **API backend** em .Net. A aplicação permite criar, listar, editar e excluir tarefas, bem como marcar tarefas como concluídas.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Tecnologias Utilizadas

- **Frontend**: React, Axios, CSS
- **Backend**: C#, .NET, Entity Framework
- **Bibliotecas adicionais**: Font Awesome para ícones, Axios para chamadas HTTP

## Funcionalidades

- **Criar Tarefa**: Adicione novas tarefas com título e descrição.
- **Listar Tarefas**: Visualize uma lista de todas as tarefas cadastradas.
- **Editar Tarefa**: Edite título e descrição das tarefas.
- **Deletar Tarefa**: Exclua tarefas indesejadas.
- **Marcar como Concluída**: Utilize o checkbox para marcar uma tarefa como concluída.

## Pré-requisitos

Certifique-se de ter instalado:

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)

## Instalação

### Backend

1. Navegue para a pasta `tarefas-backend`:
   ```bash
   cd tarefas-backend
   ```

2. Instale as dependências:

    ```bash
    dotnet restore
    ```

3. Inicie o servidor backend:

    ```bash
    dotnet run
    ```

O servidor backend será iniciado em http://localhost:5007.

### Frontend
Navegue para a pasta tarefas-frontend:

  ```bash
  cd tarefas-frontend
  ```

Instale as dependências:

  ```bash
  npm install
  ```
Inicie o servidor frontend:

  ```bash
  npm start
  ```
A aplicação será iniciada em http://localhost:3000.

Executando o Projeto
Certifique-se de que o backend e o frontend estejam em execução.
Abra http://localhost:3000 no navegador para interagir com o aplicativo.
Estrutura do Projeto
```plaintext
.
├── tarefas-backend
│   ├── Controllers
│   ├── Models
│   ├── appsettings.json
│   └── Program.cs
└── tarefas-frontend
    ├── public
    ├── src
    │   ├── components
    │   │   ├── TarefasList.js
    │   │   ├── TarefaForm.js
    │   ├── Api.js
    │   └── App.js
    │   └── App.css
    └── package.json
```
tarefas-backend: Contém a API construída em .NET.
tarefas-frontend: Contém o código React que renderiza a interface do usuário.

### Observação
O banco de dados configurado para este projeto é em memória. Isso significa que os dados não serão salvos entre reinicializações do backend, o que é útil para desenvolvimento e testes rápidos. Para persistência, considere configurar um banco de dados como SQLite ou SQL Server, ajustando a string de conexão no arquivo appsettings.json do backend.

### Contribuição
Contribuições são bem-vindas! Para contribuir:

Fork este repositório.
Crie uma branch para a sua feature (git checkout -b feature/nome-da-feature).
Commit suas mudanças (git commit -am 'Adiciona nova feature').
Push para a branch (git push origin feature/nome-da-feature).
Crie um novo Pull Request.

## Licença
Distribuído sob a licença MIT. Consulte LICENSE para mais informações.
