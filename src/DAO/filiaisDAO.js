import database from "../infra/bd.js";

class filiaisDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM filiais");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM filiais WHERE id = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO filiais (id, nome, local, cnpj) VALUES (?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Filial inserido com sucesso na tabela Filiais" },
      status: 201,
    };
  }

  static async atualizar(id, obj) {
    try {
      await database.query("UPDATE filiais SET id = ?, nome = ?, local = ?, cnpj = ? WHERE id = ?", [
        obj.id,
        obj.nome,
        obj.local,
        obj.cnpj,
        id,
      ]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Filial atualizado com sucesso na tabela Filiais" },
      status: 200,
    };
  }
  static async deletar(id) {
    try {
      await database.query("DELETE FROM filiais WHERE id = ?", [id]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Filial excluido com sucesso da tabela Filiais" },
      status: 200,
    };
  }
}

export default filiaisDAO;
