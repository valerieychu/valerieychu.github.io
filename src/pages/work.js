import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';

const Work = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h1>Work</h1>
        <p className='paragraph'>
          [This website is currently still under development. To see more of my
          work beyond the Select Works section located on the home page,
          please visit my previous website.]
        </p>
        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://valerieychu.myportfolio.com/',
              '_blank',
            )
          }>
          My previous website
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Work;
