const db = require("../database")

async function listarProdutos(){
    const pool = await db.connect();
    const res = await pool.query("SELECT * FROM produtos;");
    return res.rows;
}
async function listarProduto(id){
    const pool = await db.connect();
    const res = await pool.query("SELECT * FROM produtos WHERE id=$1;", [id]);
    return res.rows;
}
async function adicionarProduto(produto) {
    const pool = await db.connect();
    const sql = "INSERT INTO produtos (nome, preco) VALUES ($1, $2);";
    const res = await pool.query(sql, [produto.nome, produto.preco])
}
async function deletarProduto(id) {
    const pool = await db.connect();
    const sql = "DELETE FROM produtos WHERE id=$1;";
    const res = await pool.query(sql, [id]);
}
async function atualizarProduto(id, nome, preco) {
    const pool = await db.connect();
    const sql = "UPDATE produtos SET nome=$1, preco=$2 WHERE id=$3;";
    const res = await pool.query(sql, [nome, preco, id]);
}

module.exports = {
    listarProduto,
    listarProdutos,
    adicionarProduto,
    deletarProduto,
    atualizarProduto
};