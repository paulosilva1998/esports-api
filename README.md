# 🎮 API de Times de E-sports

API RESTful completa desenvolvida em **Node.js** com framework **Express.js** e banco de dados relacional **MySQL**. O projeto gerencia o cadastro, consulta, atualização, exclusão e filtragem de organizações participantes de campeonatos de esportes eletrônicos.

---

## 📚 Conceitos Praticados

* **Arquitetura Modular:** Separação de responsabilidades em camadas dedicadas (`config/`, `database/`, `routes/` e `requests/`).
* **CRUD Completo:** Implementação dos métodos HTTP fundamentais (`GET`, `POST`, `PUT` e `DELETE`).
* **Consultas com Query String:** Filtragem dinâmica de registros via parâmetros na URL (`GET /times?jogo=Valorant`).
* **Códigos e Respostas HTTP Semânticos:** Uso de status padronizados da web (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found` e `500 Internal Server Error`).
* **Segurança e Variáveis de Ambiente:** Isolamento de credenciais locais de banco de dados com `dotenv` e bloqueio de rastreamento com `.gitignore`.
* **Automação e Testes de API:** Execução em tempo de desenvolvimento monitorada por `nodemon` e testes de endpoints via extensão REST Client (`requests/testes.rest`).

---

## 🛠️ Tecnologias e Dependências

* [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript server-side.
* [Express.js](https://expressjs.com/) — Framework web para criação de rotas, middlewares e APIs.
* [MySQL2](https://github.com/sidorares/node-mysql2) — Driver para conexão assíncrona ao banco MySQL via Promises.
* [dotenv](https://github.com/motdotla/dotenv) — Gerenciamento seguro de variáveis de ambiente.
* [Nodemon](https://nodemon.io/) — Monitor de arquivos com reinicialização automática do servidor.
* [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) — Extensão do VS Code para disparar requisições HTTP.

---

## 📁 Estrutura do Projeto

```text
esports-api/
├── config/
│   └── db.js            # Configuração do pool de conexões com o MySQL
├── database/
│   └── schema.sql       # Script de criação da base e tabela com dados iniciais
├── requests/
│   └── testes.rest      # Bateria de testes de todas as rotas (REST Client)
├── routes/
│   └── times.js         # Rotas, controladores e regras de negócio do CRUD
├── .env                 # Variáveis de ambiente locais (ignorado no Git)
├── .env.example         # Modelo de configuração para novos ambientes
├── .gitignore           # Lista de arquivos e pastas excluídos do versionamento

---

# Clonar e Instalar Dependências

# Clone o repositório
git clone [https://github.com/paulosilva1998/esports-api.git](https://github.com/paulosilva1998/esports-api.git)

# Acesse o diretório
cd esports-api

# Instale os pacotes necessários
npm install
├── package.json         # Dependências, metadados e scripts de execução
└── server.js            # Ponto de entrada e inicialização da aplicação Express
