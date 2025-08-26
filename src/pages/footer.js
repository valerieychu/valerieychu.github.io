import React, { useEffect, useState } from 'react';
import '../styles/footer.less';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';
import ReturnHomeButton from '../pages/returnhomebutton';

const Footer = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setShowIcons(true); // icons run only in browser
  }, []);

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>
          <span className='heart'>&#9829;</span> Design and development by
          Valerie Chu using Gatsby & React
        </p>
        {showIcons && (
          <div className='footer-links'>
            <a
              href='https://github.com/valerieychu'
              aria-label='GitHub'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub />
            </a>
            <a
              href='https://instagram.com/valerieychuphotos'
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'>
              <FaInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/valerieychu/'
              aria-label='LinkedIn'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
            <a
              href='https://twitter.com/valerieychu'
              aria-label='Twitter'
              target='_blank'
              rel='noopener noreferrer'>
              <FaTwitter />
            </a>
            <a
              href='mailto:valeriechu2026@u.northwestern.edu?subject=Hello!&body=Hi%20Valerie,'
              aria-label='Email'>
              <FaEnvelope />
            </a>
          </div>
        )}
        <p>&copy; {new Date().getFullYear()} Valerie Chu</p>
        <ReturnHomeButton />
      </div>
    </footer>
  );
};

export default Footer;
