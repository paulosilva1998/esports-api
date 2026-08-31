# 📚 Atividades Práticas — Desenvolvimento de Aplicações Corporativas

Repositório contendo as aplicações práticas desenvolvidas na disciplina de **Desenvolvimento de Aplicações Corporativas** do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas** (IFRS - Campus Bento Gonçalves), ministrada pelo **Prof. Dr. Maurício Covolan Rosito**.

---

## 📑 Sumário

1. [Projeto 1 — Simulador de Missão Espacial](#-projeto-1--simulador-de-missão-espacial)
2. [Projeto 2 — Gerenciador de Clientes (Rotas Dinâmicas)](#-projeto-2--gerenciador-de-clientes-rotas-dinâmicas)
3. [Projeto 3 — Avaliação Criativa de Filmes (Formulários)](#-projeto-3--avaliação-criativa-de-filmes-formulários)
4. [Projeto 4 — Gerenciador e Filtro de Produtos](#-projeto-4--gerenciador-e-filtro-de-produtos)
5. [Projeto 5 — Consumo de API: Rick and Morty](#-projeto-5--consumo-de-api-rick-and-morty)
6. [Projeto 6 — API RESTful de Times de E-sports (Node.js & MySQL)](#-projeto-6--api-restful-de-times-de-e-sports-nodejs--mysql)

---

## 🚀 Projeto 1 — Simulador de Missão Espacial

Aplicação interativa desenvolvida em React para praticar o gerenciamento de estado composto (`useState`), eventos e efeitos colaterais com o ciclo de vida dos componentes (`useEffect`).

### 📚 Conceitos Praticados
* **`useState` com Objetos:** Gerenciamento de estado composto contendo `nome`, `fase` e `combustivel`.
* **Operador Spread (`...`):** Atualização imutável preservando propriedades anteriores ao atualizar apenas uma chave.
* **`useEffect`:** Monitoramento da propriedade `missao.fase` para disparar efeitos colaterais no console do navegador.

### 🛠️ Tecnologias
* React, Vite, JavaScript (ES6+), CSS Inline.

### 🔧 Como Executar
```bash
cd missao-espacial
npm install
npm run dev
