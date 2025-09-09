import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';
import divider from '../images/divider.svg';
import ProjectCard from './projectcard';
import aetccomeworkwithus from '../images/aetccomeworkwithus.jpg';
import aetchome from '../images/aetchome.png';
import sfchroniclehome from '../images/sfchroniclehome.png';
import valeriemirror from '../images/valeriechumirror.jpg';
import valeriesfchronicle from '../images/valeriesfchronicle.jpeg';

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
          From creating designs and coding products to streamline the workflow
          of NASA's wind tunnel facility managers, to building components and
          adding product features that enhance one of the San Francisco
          Chronicle's biggest investigative series of the year, my work has
          always been about finding a way to tell a story that needs to be told.
        </p>

        <p className='paragraph'>
          These are the works that I'm most proud of and the stories behind
          them.
        </p>

        <img src={divider} alt='divider' className='divider' />

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
          viewProjectUrl='https://www.sfchronicle.com/projects/2025/warriors-rockets-nba-playoffs/'
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
