import database from "../infra/bd.js";

class fornecedoresDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM fornecedores");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(atributo, valor) {
    const dadosbd = await database.query(`SELECT * FROM fornecedores WHERE ${atributo} = ?`, valor);
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
      dados: { msg: `Fornecedor atualizado com sucesso usando o atributo "${atributo}"` },
      status: 201,
    };
  }

  static async atualizar(atributo, valor, obj) {
    try {
      await database.query(`UPDATE fornecedores SET nome = ?, endereco = ?, produto = ?, cnpj = ? WHERE ${atributo} = ?`, [
        obj.nome,
        obj.endereco,
        obj.produto,
        obj.cnpj,
        valor
      ]);
      return {
        dados: {
          msg: `Fornecedor atualizado com sucesso pelo atributo "${atributo}"`,
        },
        status: 200,
      };
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
  }
  
  static async deletar(atributo, valor) {
    try {
      await database.query(`DELETE FROM fornecedores WHERE ${atributo} = ?`, valor);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Fornecedor exluido com sucesso usando o atributo "${atributo}"` },
      status: 200,
    };
  }
}

export default fornecedoresDAO;
