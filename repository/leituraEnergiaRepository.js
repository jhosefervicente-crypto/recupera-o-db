import conexao from "../config/database.js";

export async function cadastrar(leitura) {
    const sql = 'INSERT INTO leituras_energia(maquina_id, data_leitura, consumo_kwh, horas_operacao) VALUES(?, ?, ?, ?)';
    const [result] = conexao.execute(sql, [
        leitura.maquinaId,
        leitura.dataLeitura,
        leitura.consumoKwh,
        leitura.horasOperacao
    ]);

    return result.insertId;
}

export async function listar() {
    const sql = 'SELECT * FROM leituras_energia'
    const [result] = conexao.execute(sql);

    return result[0];
}

export async function listarDetalhadas() {
    const sql = 'SELECT * FROM maquinas INNER JOIN leituras_energia ON maquinas.id = leituras_energia.fk_leituras_maquinas';
    const [result] = conexao.execute(sql);

    return result[0];
}

export async function buscarPorId(id) {
    const sql = 'SELECT * FROM leituras_energia WHERE id = ?'
    const [result] = conexao.execute(sql,[id]);

    return result[0] ?? undefined
}

export async function atualizar(id, leitura) {
    const sql = 'UPDATE SET leituras_energia(maquina_id, data_leitura, consumo_kwh, horas_operacao) VALUES(?, ?, ?, ?) WHERE id = ?';
    const [result] = conexao.execute(sql, [
        leitura.maquinaId,
        leitura.dataLeitura,
        leitura.consumoKwh,
        leitura.horasOperacao,
        id
    ]); 
    
    return result.affectRows;
}

export async function deletar(id) {
    const sql = 'DELETE leituras_energia WHERE id = ?'
    const [result] = conexao.execute(sql)

    return result.affectRows;
}
