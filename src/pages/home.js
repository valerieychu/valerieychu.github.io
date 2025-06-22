import React from 'react';
import '../styles/home.less';
import divider from '../images/divider.svg';

const Bio = () => {
  return (
    <>
      <div className='centered-text'>
        <h1 className='h1'>Hi! I'm Valerie and I love storytelling.</h1>
        <h2 className='h2'>
          I’m an aspiring digital designer and front-end web developer. I also
          wrangle data, photograph and write.
        </h2>
      </div>
      <img src={divider} alt='divider' className='divider' />
    </>
  );
};

export default Bio;
