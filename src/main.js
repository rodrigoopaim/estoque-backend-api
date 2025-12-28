require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const produtosRoutes = require("./routes/produto.routes")

app.use(express.json());
app.use('/produtos', produtosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});