import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <img src="logo.jpeg" alt="Logo" className="logo" />
          <h1 className="logo-title">SustentaStart</h1>
        </div>
        <nav className="nav">
          <a href="#destaques">DESTAQUES</a>
          <a href="#sacolas">SACOLAS</a>
          <a href="#caixas">CAIXAS</a>
          <a href="#sobre-nos">SOBRE NÓS</a>
        </nav>
      </header>

      {/* DESTAQUES */}
      <section className="destaques-section">
        <h2 className="destaques-title">Destaques</h2>
        <div className="destaques">
          <div className="destaque-item">
            <img src="branco.png" alt="Destaque 1" />
          </div>
          <div className="destaque-item2">
            <img src="floresta.png" alt="Destaque 2" />
          </div>
        </div>
      </section>

      {/* Seção de Sacolas */}
      <section className="product-section">
        <h2>Sacolas</h2>
        <div className="product-grid">
          {Array(8).fill().map((_, index) => (
            <div className="product-card" key={index}>
              <p className="product-title">Sacola Azul Reciclada</p>
              <img className="product-image" src="sacola.png" alt="Sacola Azul" />
              <p className="product-price">R$ 00,75 (un)</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Caixas */}
      <section className="product-section">
        <h2>Caixas</h2>
        <div className="product-grid">
          {Array(8).fill().map((_, index) => (
            <div className="product-card" key={index}>
              <p className="product-title">Caixa de Reciclagem símbolo verde</p>
              <img className="product-image" src="caixa.png" alt="Caixa de Reciclagem" />
              <p className="product-price">R$ 02,00 (un)</p>
              <p>25×20×15</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Moldar */}
      <section className="cta-section">
        <div className="cta-content">
          <p>Gostou da ideia?,<br />Faça a sua própria!<br />Clique no link ao lado:</p>
          <button className="moldar-button">MOLDAR</button>
        </div>
      </section>

      <footer className="simple-footer">
  <p>©Todos os direitos estão reservados à SustentaStart</p>
</footer>

    </div>
  );
};

export default App;
