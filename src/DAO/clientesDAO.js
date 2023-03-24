import database from "../infra/bd.js";

class clientesDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM clientes");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async mostrarUm(param) {
    const dadosbd = await database.query(`SELECT * FROM clientes WHERE id = ?`, param);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO clientes (idusuarios, nome, email) VALUES (?,?,?)", Object.values(obj));
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Cliente inserido com sucesso na tabela Clientes" },
      status: 201,
    };
  }

  static async atualizar(id, obj) {
    try {
      await database.query("UPDATE clientes SET idusuarios = ?, nome = ?, email = ? WHERE id = ?", [
        obj.idusuarios,
        obj.nome,
        obj.email,
        id,
      ]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Cliente atualizado com sucesso na tabela Clientes" },
      status: 200,
    };
  }
  static async deletar(id) {
    try {
      await database.query("DELETE FROM clientes WHERE id = ?", [id]);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: "Cliente excluido com sucesso da tabela Clientes" },
      status: 200,
    };
  }
}

export default clientesDAO;
