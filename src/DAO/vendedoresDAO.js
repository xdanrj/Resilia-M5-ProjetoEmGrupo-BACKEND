import database from "../infra/bd.js";

class vendedoresDAO {
  static async mostrarTodos() {
    const dadosbd = await database.query("SELECT * FROM vendedores");
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  // ESSE TA FUNCIONANDO \/
  static async mostrarUm(atributo, valor) {
    const dadosbd = await database.query(`SELECT * FROM vendedores WHERE ${atributo} = ?`, valor);
    return {
      dados: { msg: dadosbd },
      status: 200,
    };
  }
  static async inserir(obj) {
    try {
      await database.query("INSERT INTO vendedores (id, nome, email, cpf, meta) VALUES (?,?,?,?,?)", Object.values(obj));
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

  static async atualizar(atributo, valor, obj) {
    try {
      await database.query(`UPDATE vendedores SET id = ?, nome = ?, email = ?, cpf = ?, meta = ? WHERE ${atributo} = ?`, 
      [obj.id,
      obj.nome,
      obj.email,
      obj.cpf,
      obj.meta,
      valor
    ]);
      return {
        dados: { msg: `Vendedor atualizado com sucesso pelo atributo "${atributo}"`},
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
      await database.query(`DELETE FROM vendedores WHERE ${atributo} = ?`, valor);
    } catch (error) {
      return {
        dados: { msg: "MySql error", error: error.code },
        status: 500,
      };
    }
    return {
      dados: { msg: `Vendedor exluido com sucesso usando o atributo "${atributo}"` },
      status: 200,
    };
  }

}

export default vendedoresDAO;
