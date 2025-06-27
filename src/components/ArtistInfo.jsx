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
            A artista Ana Elisa é uma maravilhosa e delicada talentosa ourives. ela construiu uma carreira sólida em grandes empresas ligadas à moda, onde desenvolveu ainda mais seu olhar sensível e criativo. Inspiradora por natureza, Ana une sua paixão pela arte com uma elegância discreta e uma visão detalhista que torna cada peça sua absolutamente única.

Sua relação com a ourivesaria é profunda — um encontro entre técnica refinada e sentimento. Neste curso, ela compartilha não apenas anos de experiência, mas também o amor pelo que faz, o cuidado com os detalhes e a emoção que transforma metal e pedra em expressão.

Apaixonada pela família, pelo seu ofício e pela beleza sutil das pequenas coisas, Ana convida você a mergulhar em um universo onde cada criação carrega significado. Uma artista com classe, alma e um talento que encanta em silêncio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArtistInfo;