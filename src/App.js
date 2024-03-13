import React from 'react';
import './App.css';
import imagem1 from './assets/1.jpeg';
import imagem2 from './assets/2.jpeg';
import imagem3 from './assets/3.jpeg';
import imagem4 from './assets/4.webp';
import imagem5 from './assets/5.webp';

function App() {
  return (
    <div className="container">
      <h1>Lanches</h1>
      <div className="menu-item">
        <img src={imagem1} alt="Lanche1" />
        <p>Este é um lanche delicioso com os melhores ingredientes.</p>
      </div>

      <div className="menu-item">
      <img src={imagem2} alt="Lanche2" />
        <p>Este lanche é feito especialmente para satisfazer seu paladar.</p>
      </div>     
      
      <div className="menu-item">
      <img src={imagem3} alt="Lanche3" />
        <p>Experimente nosso lanche exclusivo com ingredientes frescos.</p>
      </div>

      <div className="menu-item">
      <img src={imagem4} alt="Lanche4" />
        <p>Aproveite o sabor refrescante com e sem calorias.</p>
      </div>

      <div className="menu-item">
  <img src={imagem5} alt="Lanche5" />
  <p>Ótimos sabores com ou sem açúcar.</p>
</div>

      <a href="https://api.whatsapp.com/send?phone=[SEU_NÚMERO_DE_TELEFONE]&text=Olá! Gostaria de fazer um pedido."
        className="cta-button">Faça seu pedido pelo WhatsApp</a>
    </div>
  );
}

export default App;
