import React from 'react';
import './CourseInfo.css';

function CourseInfo() {
  return (
    <section className="info-container">
      <h2>O que você vai aprender?</h2>
      <div className="info-grid">
        <div className="info-card">
          <h3>Módulo 1: Fundamentos</h3>
          <p>Conheça as ferramentas essenciais, os tipos de metais e as técnicas de segurança.</p>
        </div>
        <div className="info-card">
          <h3>Módulo 2: Técnicas de Modelagem</h3>
          <p>Aprenda a serrar, limar, soldar e dar forma ao metal para criar suas primeiras peças.</p>
        </div>
        <div className="info-card">
          <h3>Módulo 3: Cravação de Pedras</h3>
          <p>Descubra os segredos para fixar pedras de forma segura e elegante em suas joias.</p>
        </div>
        <div className="info-card">
          <h3>Módulo 4: Acabamento Profissional</h3>
          <p>Domine as técnicas de lixamento, polimento e texturização para um acabamento impecável.</p>
        </div>
      </div>
    </section>
  );
}

export default CourseInfo;