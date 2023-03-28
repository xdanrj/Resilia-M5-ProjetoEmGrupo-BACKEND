import database from "./bd.js";

database.connection.connect();

database.connection.query(

  "CREATE TABLE `ztech`.`filiais` ( `id` INT NULL, `nome` VARCHAR(45), `local` VARCHAR(45), `cnpj` VARCHAR(45) ); CREATE TABLE `ztech`.`vendedores` ( `id` INT NULL, `nome` VARCHAR(45), `email` VARCHAR(45), `cpf` VARCHAR(20), `meta` BIGINT(10) ); CREATE TABLE `ztech`.`fornecedores` (`id` INT NULL, `nome` VARCHAR(45), `endereco` VARCHAR(60), `produto` VARCHAR(45), `cnpj` VARCHAR(30) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela Filiais criada com sucesso")
      console.log("Tabela Vendedores criada com sucesso")
      console.log("Tabela Fornecedores criada com sucesso")
    }
  }
);

database.connection.query(
  
     "INSERT INTO filiais (id, nome, local, cnpj) VALUES ( 1, 'nometeste', 'localteste', 'cnpjteste' ); INSERT INTO vendedores (id, nome, email, cpf, meta) VALUES (1, 'nomeTeste', 'teste@gmail.com', 'cpfteste', 10000); INSERT INTO fornecedores (id, nome, endereco, produto, cnpj) VALUES (1, 'fulana de tal', 'rua tal', 'produto tal', '12.456.123/0001-00')",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela Filiais populada com sucesso")
        console.log("Tabela Vendedores populada com sucesso")
        console.log("Tabela Fornecedores populada com sucesso")
      }
    }
  );

database.connection.end();
