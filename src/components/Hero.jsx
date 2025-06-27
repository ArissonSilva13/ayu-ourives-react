import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg'; // Vamos criar essa pasta e adicionar a imagem

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1>Aprenda a Arte da Joalheria Artesanal</h1>
        <p>Transforme metal e pedras em peças únicas e cheias de significado, no conforto da sua casa.</p>
        <a href="#pricing" className="cta-button">
          QUERO COMEÇAR AGORA
        </a>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Joia artesanal elegante" />
      </div>
    </section>
  );
}

export default Hero;