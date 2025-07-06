import React, { useEffect, useState } from 'react';
import '../styles/header.less';
// import { Link } from 'gatsby';
import { navigate } from 'gatsby';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-name-position'>
        <button className='header-name' onClick={() => navigate('/')}>
          Valerie Chu
        </button>
      </div>
      <div className='header-buttons'>
        <button className='work'>Work</button>
        <button className='storytelling' onClick={() => navigate('/storytelling')}>
          Storytelling
        </button>
        <button className='me' onClick={() => navigate('/about')}>
          Me
        </button>
        {/* <Link to="/about" className='me'>Me</Link> */}
      </div>
    </header>
  );
};

export default Header;
