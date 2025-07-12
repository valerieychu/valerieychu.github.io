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
          Data Visualization | Photojournalism | Design | Video | Writing |
          UI/UX | Languages
        </p>
        <p className='paragraph'>
          [This website is currently still under development. After you've
          visited the Select Works section located on this home page, to see
          more of my work, please visit my previous website.]
        </p>
        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open('https://valerieychu.myportfolio.com/', '_blank')
          }>
          My previous website
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Storytelling;
