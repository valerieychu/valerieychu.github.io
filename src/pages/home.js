import React from 'react';
import '../styles/global.less';
import '../styles/home.less';
import image from '../images/valeriechu.png';
import divider from '../images/divider.svg';
import Header from './header';
import Footer from './footer';
import valerie11x11 from '../images/valerie11x11.jpeg';
import valerie80x120 from '../images/valerie80x120.jpeg';
import valeriecamera from '../images/valeriecamera.jpeg';
import valeriegoddard from '../images/valeriegoddard.jpeg';
import valeriesfchronicle from '../images/valeriesfchronicle.jpeg';
import valeriewhitehouse from '../images/valeriewhitehouse.jpeg';
import valeriegoldstone from '../images/valeriegoldstone.jpeg';
import ProjectCard from './projectcard';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Intro */}
      {/* Intro */}
      {/* Intro */}
      <div className='intro'>
        <div className='centered-text'>
          <h1 className='h1' style={{ marginBottom: '1rem' }}>
            Hi! I'm Valerie and I love storytelling.
          </h1>
          <h2 className='h2'>
            <span
              className='heart'
              style={{ color: '#b76e79', fontSize: '16px' }}>
              &#9829;
            </span>{' '}
            Data + Design + Code{' '}
            <span
              className='heart'
              style={{ color: '#b76e79', fontSize: '16px' }}>
              &#9829;
            </span>
          </h2>
          <h2 className='paragraph' style={{ margin: '1rem 0' }}>
            <em>~ Creating digital products that tell a story ~</em>
          </h2>
        </div>
        <img className='image' src={image} alt='Image of Valerie Chu' />
      </div>

      <img src={divider} alt='divider' className='divider' />
      <div className='centered-text'>
        <h3 className='h3'>A Quick Intro</h3>
        <p className='paragraph'>
          As part of NASA's Aerosciences Evaluation and Test Capabilities
          portfolio office, I focus on tracking our wind tunnel tests. I'm
          building a landing page that automatically updates with data
          visualizations, issues and highlights based on facility managers’
          reports on NASA's twelve wind tunnels. Essentially, I'm a full-stack
          developer/data scientist doing a combination of software development,
          UI/UX and data science.
        </p>
        <p className='paragraph'>
          I'm a three-time NASA intern, a former San Francisco Chronicle digital
          design/development intern, and a former freelance Congressional and
          White House photographer/reporter. I've loved every internship
          experience I've had so far, and I'm currently looking for a place
          where I can work with data to design and code digital products that
          tell a story.
        </p>
        <div className='imageslideshowwrapper'>
          <img
            className='imageslideshow'
            src={valeriegoddard}
            alt='Valerie at Wallops Flight Facility'
          />
          <img
            className='imageslideshow'
            src={valeriegoldstone}
            alt='Valerie at Goldstone'
          />
          <img
            className='imageslideshow'
            src={valeriecamera}
            alt='Valerie at the White House'
          />
          <img
            className='imageslideshow'
            src={valeriesfchronicle}
            alt='Valerie at the San Francisco Chronicle'
          />
          {/* <img
            className='imageslideshow'
            src={valeriewhitehouse}
            alt='Valerie at the White House'
          /> */}
          <img
            className='imageslideshow'
            src={valerie11x11}
            alt='Valerie at Ames UPWT 11x11'
          />
          <img
            className='imageslideshow'
            src={valerie80x120}
            alt='Valerie at NFAC 80x120'
          />
        </div>
      </div>

      <img src={divider} alt='divider' className='divider' />

      <div className='centered-text'>
        <h3 className='h3'>Select Works</h3>
        <ProjectCard
          videoSrc='/scoreboard-component.mp4'
          alt='A video demonstration of the scoreboard component.'
          hed='Scoreboard Project'
          subhed='San Francisco Chronicle'
          description='A custom scoreboard component — Inspired by old-school sports design, I designed and coded a non-developer friendly scoreboard acts lets readers visually track games and scores within a photo story. Compatible with NBA, WNBA, MLB and NFL games.'
          skills='React, Figma, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/scoreboard-project'
          viewProjectUrl='https://www.sfchronicle.com/projects/2025/warriors-rockets-nba-playoffs/'
        />
        <ProjectCard
          image={valeriesfchronicle}
          alt='Valerie at the San Francisco Chronicle'
          hed='Investigative Series'
          subhed='San Francisco Chronicle'
          description='One of the Chronicle’s biggest investigative series this year, to be published later in 2025 — I led the product design and development for this series. With 30,000+ words and five parts, I knew the reader experience was crucial to get right. I wireframed then coded this series, creating custom components such as text message animations and bookmarking features.'
          skills='React, Figma, GSAP, Illustrator, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/stalker-project'
          viewProjectUrl='https://sfchronicle.com/'
        />
        <ProjectCard
          videoUrl='https://www.youtube.com/embed/oPsJiwtwxb4?si=LygNLsmEO-YP3Szz'
          hed='Reusable Video Components'
          subhed='San Francisco Chronicle'
          description='Adapting a video components from an existing codebase to a new project template under breaking news deadline — SF Chronicle photographers captured No Kings protests in photos and videos throughout the Bay Area and LA. I adapted video components to an existing photo story template under deadline for this story, which took the lead in our web traffic the Sunday after it was published.'
          skills='React, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/reusable-video-components'
          viewProjectUrl='https://youtu.be/oPsJiwtwxb4?si=QBsb-J0o9gIiHSx2'
        />
      </div>

      <img src={divider} alt='divider' className='divider' />
      <div className='centered-text'>
        <h3 className='h3'>A Quick Note</h3>
        <p className='paragraph'>
          Hi! Thank you so much for checking out my website!
        </p>
        <p className='paragraph'>
          Before you go further, I just want to note that this website is
          currently still under development. After you've visited the Select
          Works section located on this home page, to see more of my work,
          please visit my previous website.
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

      {/* <img src={divider} alt='divider' className='divider' /> */}
    </>
  );
};

export default Home;
