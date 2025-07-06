import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';

const Storytelling = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h1>Storytelling</h1>
        <p className='paragraph'>
          Photojournalism | Design | Video | Writing | UI/UX | Languages
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Storytelling;
