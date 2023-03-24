import database from "../infra/bd.js";

class vendedoresDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM vendedores");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM vendedores WHERE id = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO vendedores (id, nome, email, cpf, metas) VALUES (?,?,?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Vendedor inserido com sucesso na tabela Vendedores" },
      status: 201,
    };
  }

  static async atualizar(id, obj) {
    try {
      await database.query("UPDATE vendedores SET id = ?, nome = ?, email = ?, cpf = ?, metas = ? WHERE id = ?", [
      obj.id,
      obj.nome, 
      obj.email,
      obj.cpf,
      obj.metas,
      id,
      ]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Vendedor atualizado com sucesso na tabela Vendedores" },
      status: 200,
    };
  }
  static async deletar(id) {
    try {
      await database.query("DELETE FROM vendedores WHERE id = ?", [id]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Vendedor excluido com sucesso da tabela Vendedores" },
      status: 200,
    };
  }

}

export default vendedoresDAO;
