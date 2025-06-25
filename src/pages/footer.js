import React from 'react';
// import loadable from '@loadable/component';
// // Dynamically load icons so they only import on the client:
// const FaGithub = loadable(() => import('react-icons/fa').then(mod => mod.FaGithub));
// const FaInstagram = loadable(() => import('react-icons/fa').then(mod => mod.FaInstagram));
// const FaLinkedin = loadable(() => import('react-icons/fa').then(mod => mod.FaLinkedin));
// const FaTwitter = loadable(() => import('react-icons/fa').then(mod => mod.FaTwitter));
// const FaEnvelope = loadable(() => import('react-icons/fa').then(mod => mod.FaEnvelope));
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';
import '../styles/footer.less';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p><span class="heart">&#9829;</span> Design and development by Valerie Chu using Gatsby & React</p>
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
        <p>&copy; {new Date().getFullYear()} Valerie Chu</p>
      </div>
    </footer>
  );
};

export default Footer;
