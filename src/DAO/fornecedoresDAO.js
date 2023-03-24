import database from "../infra/bd.js";

class fornecedoresDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM fornecedores");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM fornecedores WHERE id = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO fornecedores (id, nome, endereco, produto, cnpj) VALUES (?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Fornecedor inserido com sucesso na tabela Fornecedores" },
      status: 201,
    };
  }

  static async atualizar(id, obj) {
    try {
      await database.query("UPDATE fornecedores SET id = ?, nome = ?, endereco = ?, produto = ?, cnpj = ? WHERE id = ?", [
        obj.id,
        obj.nome,
        obj.endereco,
        obj.produto,
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
      dados: { msg: "Fornecedor atualizado com sucesso na tabela Fornecedores" },
      status: 200,
    };
  }
  static async deletar(id) {
    try {
      await database.query("DELETE FROM fornecedores WHERE id = ?", [id]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Fornecedor excluido com sucesso da tabela Fornecedores" },
      status: 200,
    };
  }
}

export default fornecedoresDAO;
