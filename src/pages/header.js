import React, { useEffect, useState } from 'react';
import '../styles/header.less';
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
        <div className='dropdown'>
          <button className='work' onClick={() => navigate('/work')}>
            Work
          </button>
          <div className='dropdown-content'>
            <button onClick={() => navigate('/work/scoreboard-project')}>
              Scoreboard Project
            </button>
            <button onClick={() => navigate('/work/stalker-project')}>
              Investigative Series
            </button>
          </div>
        </div>
        <button
          className='storytelling'
          onClick={() => navigate('/storytelling')}>
          Storytelling
        </button>
        <button className='me' onClick={() => navigate('/about')}>
          Me
        </button>
      </div>
    </header>
  );
};

export default Header;
