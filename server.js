require("dotenv").config();
const express = require("express");
const timesRouter = require("./routes/times");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/times", timesRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});