import React, { useEffect, useState } from 'react';
import '../styles/returnhomebutton.less';
import { navigate } from 'gatsby';
import { FaHome } from 'react-icons/fa';

const ReturnHomeButton = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setShowIcons(true); // icons run only in browser
  }, []);
  
  return (
    <button
      className='return-home-button'
      aria-label='Go to home page'
      onClick={() => navigate('/')}>
      <FaHome className='return-home-icon' />
    </button>
  );
};

export default ReturnHomeButton;
