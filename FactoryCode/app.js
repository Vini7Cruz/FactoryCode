import express from "express";
import funcionarios from "./routes/funcionarioRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/funcionarios", funcionarios);

app.get("/", (req, res) => {
  res.send("API de Funcionários está funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});