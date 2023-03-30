import database from "./bd.js";


database.connection.connect();


database.connection.query(

  "CREATE TABLE `ztech`.`filiais` ( `id` INT, `nome` VARCHAR(45), `local` VARCHAR(45), `cnpj` VARCHAR(45) ); CREATE TABLE `ztech`.`vendedores` ( `id` INT NULL, `nome` VARCHAR(45), `email` VARCHAR(45), `cpf` VARCHAR(20), `meta` BIGINT(10) ); CREATE TABLE `ztech`.`fornecedores` ( `id` INT, `nome` VARCHAR(45), `endereco` VARCHAR(60), `produto` VARCHAR(45), `cnpj` VARCHAR(30) ); CREATE TABLE `ztech`.`produtos` (`id` INT, `nome` VARCHAR(60), `cor` VARCHAR(20) , `preco` FLOAT(10), `img` VARCHAR(300) )",
  function (error, results, fields) {
    if (error) {
      console.log(error);
    } else {
      console.log("Tabela Filiais criada com sucesso")
      console.log("Tabela Vendedores criada com sucesso")
      console.log("Tabela Fornecedores criada com sucesso")
      console.log("Tabela Produtos criada com sucesso")
    }
  }
);

database.connection.query(
  
     "INSERT INTO filiais (id, nome, local, cnpj) VALUES ( 1, 'nometeste', 'localteste', '12.321.123/0001-12' ); INSERT INTO vendedores (id, nome, email, cpf, meta) VALUES (1, 'nomeTeste', 'teste@gmail.com', '123.456.789-55', 10000); INSERT INTO fornecedores (id, nome, endereco, produto, cnpj) VALUES (1, 'fulanaTal', 'ruaTal', 'produtoTal', '12.456.123/0001-00'); INSERT INTO produtos(id,nome,cor,preco, img) VALUES (1,'Samsung Galaxy A34','Violeta',2317, 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a346mzkazto/gallery/br-galaxy-a34-5g-sm-a346-sm-a346mzkazto-thumb-535811088?$240_240_PNG$'), (2,'JBL Go 3','Preto',240, 'https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw61b5bf85/JBL_GO_3_HERO_BLACK_0079.png?sw=537&sfrm=png'), (3,'Philco Fone','Azul',95, 'https://philco.vteximg.com.br/arquivos/ids/236068-1000-1000/PFO06BTRG-01.jpg?v=638047388092570000'), (4,'Canon Camera','Preto',968, 'https://www.canon.com.br/static/landings/cameras/EOS-REBEL-T7-Plus/files/img/frontend/product/slider/05_thumb.jpg'), (5,'Xbox Videogame','Branco',1530, 'https://pngimg.com/uploads/xbox/xbox_PNG101375.png'); ",
    function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Tabela Filiais populada com sucesso")
        console.log("Tabela Vendedores populada com sucesso")
        console.log("Tabela Fornecedores populada com sucesso")
        console.log("Tabela Produtos populada com sucesso")
      }
    }
  );

database.connection.end();
