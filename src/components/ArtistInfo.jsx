import React from 'react';
import './ArtistInfo.css';
// Lembre-se de colocar a foto da artista na pasta assets!
import artistPhoto from '../assets/artista-foto.jpg'; 

function ArtistInfo() {
  return (
    <section className="artist-info-container">
      <div className="artist-card">
        <div className="artist-photo">
          <img src={artistPhoto} alt="Foto da Artista" />
        </div>
        <div className="artist-details">
          <h2>Sobre a Artista</h2>
          <p className="artist-name">Ana Elisa Sonda</p>
          <p className="artist-bio">
             A artista Ana Elisa é uma ourives talentosa, reconhecida por sua delicadeza e excelência técnica. Com uma carreira sólida construída no universo da moda, ela desenvolveu um olhar ainda mais apurado e criativo, unindo sensibilidade estética e refinamento.

Inspiradora por essência, Ana transforma sua paixão pela arte em joias únicas, guiada por uma elegância discreta e um olhar detalhista que imprime alma em cada criação. Sua relação com a ourivesaria vai além da técnica — é um ofício vivido com emoção, precisão e significado.

Neste curso, Ana compartilha não apenas sua ampla experiência, mas também o amor pelo que faz, o cuidado com os detalhes e a emoção que transforma metais e pedras em verdadeiras formas de expressão.

Apaixonada pela família, pela arte e pela beleza sutil das pequenas coisas, Ana convida você a mergulhar em seu universo criativo — onde cada peça conta uma história e carrega um propósito. Uma artista com alma, sensibilidade e um talento que encanta com sutileza.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArtistInfo;