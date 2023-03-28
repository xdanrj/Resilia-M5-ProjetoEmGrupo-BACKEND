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
      dados: { msg: "Produto inserido com sucesso na tabela Produtos" },
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
      dados: { msg: "Produto atualizado com sucesso na tabela Produtos" },
      status: 200,
    };
  }
  static async deletar(id) {
    try {
      await database.query("DELETE FROM produtos WHERE id = ?", [id]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Produto excluido com sucesso da tabela Produtos" },
      status: 200,
    };
  }
}

export default produtosDAO;
