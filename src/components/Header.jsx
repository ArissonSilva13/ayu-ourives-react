import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        : ayu : 
      </div>
      <nav>
        {/* ESTA É A LINHA QUE FOI ALTERADA. 
          Note que quebrei em várias linhas para facilitar a leitura.
        */}
        <a 
          href="https://wa.me/5548999502369?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20curso." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="header-button"
        >
          Entre em Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;