const express = require("express");
const router = express.Router();
const db = require("../config/db");

// 1. Listagem geral ou busca por query string (GET /times?jogo=Valorant)
router.get("/", async (req, res) => {
  const { jogo } = req.query;

  try {
    let query = "SELECT * FROM times";
    const params = [];

    if (jogo) {
      query += " WHERE LOWER(jogo) = LOWER(?)";
      params.push(jogo);
    }

    const [rows] = await db.query(query, params);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao consultar times.", erro: error.message });
  }
});

// 2. Consulta de time por ID (GET /times/:id)
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM times WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ mensagem: "Time não encontrado." });
    }

    return res.status(200).json(rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao buscar o time.", erro: error.message });
  }
});

// 3. Cadastro de novo time (POST /times)
router.post("/", async (req, res) => {
  const { nome, jogo, pais, ano_fundacao } = req.body;

  if (!nome || !jogo || !pais || !ano_fundacao) {
    return res.status(400).json({ mensagem: "Todos os campos (nome, jogo, pais, ano_fundacao) são obrigatórios." });
  }

  try {
    const [resultado] = await db.query(
      "INSERT INTO times (nome, jogo, pais, ano_fundacao) VALUES (?, ?, ?, ?)",
      [nome, jogo, pais, ano_fundacao]
    );

    return res.status(201).json({
      id: resultado.insertId,
      nome,
      jogo,
      pais,
      ano_fundacao,
      mensagem: "Time cadastrado com sucesso!",
    });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao cadastrar time.", erro: error.message });
  }
});

// 4. Atualização de time (PUT /times/:id)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, jogo, pais, ano_fundacao } = req.body;

  if (!nome || !jogo || !pais || !ano_fundacao) {
    return res.status(400).json({ mensagem: "Todos os campos (nome, jogo, pais, ano_fundacao) são obrigatórios." });
  }

  try {
    const [verificacao] = await db.query("SELECT * FROM times WHERE id = ?", [id]);
    if (verificacao.length === 0) {
      return res.status(404).json({ mensagem: "Time não encontrado para atualização." });
    }

    await db.query(
      "UPDATE times SET nome = ?, jogo = ?, pais = ?, ano_fundacao = ? WHERE id = ?",
      [nome, jogo, pais, ano_fundacao, id]
    );

    return res.status(200).json({ mensagem: "Time atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao atualizar time.", erro: error.message });
  }
});

// 5. Exclusão de time (DELETE /times/:id)
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [resultado] = await db.query("DELETE FROM times WHERE id = ?", [id]);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: "Time não encontrado para exclusão." });
    }

    return res.status(200).json({ mensagem: "Time removido com sucesso!" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao excluir time.", erro: error.message });
  }
});

module.exports = router;