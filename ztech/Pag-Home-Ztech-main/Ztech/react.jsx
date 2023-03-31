import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark navbar-dark d-flex">
        <div className="logo"><img src="./img/ztechLOGO.png" width="50%" height="50%" alt="Logo"></div>
        <div className="nav navbar-nav navbar-right">
          <div className="d-flex mb-1 align-self-center">
            <div> <a className="navbar-brand" href="form.html">Inicio</a></div>
            <div> <a className="navbar-brand" href="form.html">Produtos</a></div>
            <div> <a className="navbar-brand" href="form.html">Cadastro</a></div>
            <div> <a className="navbar-brand" href="form.html">Sobre</a></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;