import conectarAoBanco from "../config/dbconfig.js";

const conn = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts() {
    const db = conn.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}
