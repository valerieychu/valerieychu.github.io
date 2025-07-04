import React, { useEffect, useState } from 'react';
import '../styles/header.less';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-name-position'>
        <button className='header-name'>Valerie Chu</button>
      </div>
      <div className='header-buttons'>
        <button className='work'>Work</button>
        <button className='storytelling'>Storytelling</button>
        <button className='me'>Me</button>
      </div>
    </header>
  );
};

export default Header;
