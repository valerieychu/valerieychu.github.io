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
import valeriemirror from '../images/valeriechumirror.jpg';
import ProjectCard from './projectcard';
import aetccometestwithus from '../images/aetccometestwithus.jpg';
import aetccomeworkwithus from '../images/aetccomeworkwithus.jpg';
import aetcctwuform from '../images/aetcctwuform.png';
import aetccwwuform from '../images/aetccwwuform.png';
import sfchroniclehome from '../images/sfchroniclehome.png';
import aetchome from '../images/aetchome.png';

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
            Data + ML + Graphics & Vision{' '}
            <span
              className='heart'
              style={{ color: '#b76e79', fontSize: '16px' }}>
              &#9829;
            </span>
          </h2>
          <h2 className='paragraph' style={{ margin: '1rem 0' }}>
            <em>~ Ex-NASA (3x Intern), Ex-SF Chronicle ~</em>
          </h2>
        </div>
        <img className='image' src={image} alt='Image of Valerie Chu' />
      </div>

      <img src={divider} alt='divider' className='divider' />
      <div className='centered-text'>
        <h3 className='h3'>A Quick Intro</h3>
        <p className='paragraph'>
          Last summer, as a full stack data science intern in NASA's
          Aerosciences Evaluation and Test Capabilities portfolio office, I
          focused on tracking our wind tunnel tests. I conducted user interviews
          with the leadership team, then wireframed, built, and deployed a
          landing page that updates with real-time data visualizations, issues,
          and highlights for individual tests conducted within NASA's twelve
          wind tunnels.
        </p>
        <p className='paragraph'>
          In the winter, I was a teaching assistant for Northwestern
          University's STAT 302: Data Visualization class. Now, I'm currently
          working on autoresearch project — combining AI and data science for
          rapid model training in predicting next-day tech stock direction using
          news sentiment in the media — as my senior data science capstone
          project.
        </p>
        <p className='paragraph'>
          I'm a three-time NASA intern, a former San Francisco Chronicle digital
          design/development intern, and a former freelance Congressional and
          White House photographer/reporter. Currently, I'm actively looking for
          Data/ML/Graphics & Vision academic year internships within the
          aerospace, entertainment, or tech industries.
        </p>
        <p className='paragraph'>
          I'm a senior at Northwestern University triple majoring in data
          science, journalism, and international studies. In the fall, I'll be
          starting my Master's in Computer Science (Graphics & Vision) at UCLA.
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
          image={aetchome}
          alt='NASA Aerosciences Evaluation and Test Capabilities Portfolio Office home page'
          hed='NASA Wind Tunnel Test Tracking Project'
          subhed='NASA’s Aerosciences Evaluation and Test Capabilities Portfolio Office'
          description='Full stack development and data science for tracking NASA’s wind tunnel tests — Built a landing page that updates with real-time issues, highlights, and data visualizations for NASA’s 12 wind tunnels.'
          skills='Python, Figma, SQL, GitLab, Dash Mantine Components, Dash Plotly'
          learnMoreUrl='/work/nasa-wind-tunnel-test-tracking'
          // viewProjectUrl='https://www.nasa.gov/directorates/armd/aetc/'
        />
        <ProjectCard
          image={sfchroniclehome}
          alt='San Francisco Chronicle home page'
          hed='Investigative Series'
          subhed='San Francisco Chronicle'
          description='One of the Chronicle’s biggest investigative series this year, to be published later in 2025 — I led the product design and development for this series. With 30,000+ words and five parts, I knew the reader experience was crucial to get right. I designed, wireframed, and coded this series, creating custom components such as text message animations and bookmarking features.'
          skills='React, Figma, GSAP, Illustrator, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/stalker-project'
          // viewProjectUrl='https://sfchronicle.com/'
        />
        <ProjectCard
          videoSrc='/scoreboard-component.mp4'
          alt='A video demonstration of the scoreboard component.'
          hed='Scoreboard Project'
          subhed='San Francisco Chronicle'
          description='A custom scoreboard component — Inspired by old-school sports design, I designed and coded a non-developer friendly scoreboard that lets readers visually track games and scores within a photo story. Compatible with NBA, WNBA, MLB, and NFL games.'
          skills='React, Figma, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/scoreboard-project'
          viewProjectUrl='https://www.sfchronicle.com/projects/2025/warriors-timberwolves-nba-playoffs/'
        />
        <ProjectCard
          videoUrl='https://www.youtube.com/embed/oPsJiwtwxb4?si=LygNLsmEO-YP3Szz'
          hed='Reusable Video Components'
          subhed='San Francisco Chronicle'
          description='Adapting video components from an existing codebase to a new project template under breaking news deadline — SF Chronicle photographers captured No Kings protests in photos and videos throughout the Bay Area and LA. I adapted video components to an existing photo story template under deadline for this story, which took the lead in our web traffic the Sunday after it was published.'
          skills='React, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/reusable-video-components'
          viewProjectUrl='https://youtu.be/oPsJiwtwxb4?si=QBsb-J0o9gIiHSx2'
        />
        <ProjectCard
          image={aetccomeworkwithus}
          alt='AETC Slideshow'
          hed='NASA Lead Capture Forms'
          subhed='NASA’s Aerosciences Evaluation and Test Capabilities Portfolio Office'
          description='Design and development for lead capture forms — For AETC’s exhibition at AIAA AVIATION 2024, we wanted to collect information from people interested in testing in our wind tunnel facilities or joining our team. I designed, coded, and deployed two data input forms for lead capture, working with complex callbacks to collect data and write to a database.'
          skills='Python, SQL, GitLab, Adobe InDesign, Figma, Dash Mantine Components, Photoshop'
          learnMoreUrl='/work/nasa-lead-capture-forms'
          viewProjectUrl='https://adapt-public.aetc.appdat.jsc.nasa.gov/come-test-with-us'
        />
        <ProjectCard
          image={valeriemirror}
          alt='Valerie takes a mirror pic.'
          hed='valerieychu.github.io'
          subhed='Personal Project'
          description='A custom website — I designed, wireframed, coded, and deployed this portfolio site from scratch. I selected all typefaces, did all the styling, created all custom components in React and Adobe Illustrator, optimized for both mobile and desktop, and got everything running by myself.'
          skills='React, Gatsby, GitHub, Figma, Website development, Website deployment, Adobe Illustrator'
          // learnMoreUrl='/work/personal-portfolio'
          // viewProjectUrl='https://valerieychu.github.io/'
        />
      </div>

      {/* <img src={divider} alt='divider' className='divider' />
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
      </div> */}
    </>
  );
};

export default Home;
