import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';
import divider from '../images/divider.svg';
import ProjectCard from './projectcard';
import valeriesfchronicle from '../images/valeriesfchronicle.jpeg';
import aetccomeworkwithus from '../images/aetccomeworkwithus.jpg';
import sfchroniclehome from '../images/sfchroniclehome.png';

const Work = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h1>Work</h1>

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
        <p className='paragraph'>
          From creating designs and code to streamline the work of NASA's wind
          tunnel facility managers, and building components that showcase one of
          the San Francisco Chronicle's biggest investigative series of the
          year, to reporting Senate confirmation hearings and photographing
          President Trump and White House press briefings, my work has always
          been about finding a way to tell a story that needs to be told.
        </p>

        <p className='paragraph'>
          These are the works that I'm most proud of and the stories behind
          them.
        </p>

        <img src={divider} alt='divider' className='divider' />

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
          image={sfchroniclehome}
          alt='San Francisco Chronicle home page'
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
        <ProjectCard
          image={aetccomeworkwithus}
          alt='AETC Slideshow'
          hed='NASA Lead Capture Forms'
          subhed='NASA’s Aerosciences Evaluation and Test Capabilities (AETC) Portfolio Office'
          description='Full-stack development for lead capture forms — For AETC’s exhibition at AIAA AVIATION 2024, we wanted to collect information from people interested in testing in our wind tunnel facilities or joining our team. I designed, coded, and deployed two data input forms for lead capture, working with complex callbacks to collect data and write to a database.'
          skills='Python, SQL, GitLab, Adobe InDesign, Figma, Dash Mantine Components, Photoshop'
          learnMoreUrl='/work/nasa-lead-capture-forms'
          viewProjectUrl='https://adapt-public.aetc.appdat.jsc.nasa.gov/come-test-with-us'
        />

        <img src={divider} alt='divider' className='divider' />

        <h3 className='h3'>A Quick Note</h3>
        <p className='paragraph'>
          Hi! Thank you so much for checking out my website!
        </p>
        <p className='paragraph'>
          This website is currently still under development. After you've
          visited the Select Works section, to see more of my work, please visit
          my previous website.
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

export default Work;
