import database from "../infra/bd.js";

class produtosDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM produtos");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(atributo, valor) {
    const dadosbd = await database.query(`SELECT * FROM produtos WHERE ${atributo} = ?`, valor);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO produtos (id, nome, cor, preco) VALUES (?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Produto atualizado com sucesso usando o atributo "${atributo}"` },
      status: 201,
    };
  }

  static async atualizar(atributo, valor, obj) {
    try {
      await database.query(`UPDATE produtos SET id = ?, nome = ?, cor = ?, preco = ? WHERE ${atributo} = ?`, [
        obj.id,
        obj.nome,
        obj.cor,
        obj.preco,
        valor
      ]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Produto atualizado com sucesso pelo atributo "${atributo}"` },
      status: 200,
    };
  }
  static async deletar(atributo, valor) {
    try {
      await database.query(`DELETE FROM produtos WHERE ${atributo} = ?`, valor);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Produto exluido com sucesso usando o atributo "${atributo}"` },
      status: 200,
    };
  }
}

export default produtosDAO;
