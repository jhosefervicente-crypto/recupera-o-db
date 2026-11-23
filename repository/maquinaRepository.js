import conexao from "../config/database.js";

export async function cadastrar(maquina) {
    const sql = 'INSERT INTO maquinas(codigo, nome, setor, status) values(?, ?, ?, ?);';
    const [result] = conexao.execute(sql, [
        maquina.codigo,
        maquina.nome,
        maquina.setor,
        maquina.status,
    ]);

    return result.insertId
}

export async function listar() {
    const sql = 'SELECT * FROM maquinas'
    const [result] = conexao.execute(sql)

    return result[0];
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM maquinas WHERE id = ?'
    const [result] = conexao.execute(sql, [id])

    return result[0] ?? undefined;
}

export async function atualizar(id, maquina) {
    const sql = 'UPDATE SET maquinas(codigo, nome, setor, status) VALUES(?, ?, ?, ?) WHERE id = ?';
    const [result] = conexao.execute(sql, [
        maquina.codigo,
        maquina.nome,
        maquina.setor,
        maquina.status,
        id
    ])
    return result.affectRows;
}

export async function deletar(id) {
    const sql = 'DELETE maquinas WHERE id = ?'
    const [result] = conexao.execute(sql)

    return result.affectRows;
}
