import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';
import divider from '../images/divider.svg';
import ProjectCard from './projectcard';
import SlideshowCard from './slideshowcard';
import manymeasuresofmeteorites from '../images/manymeasuresofmeteorites.png';
import mothstories from '../images/mothstories.png'
import photoinstagram from '../images/photoinstagram.png'

const Storytelling = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h1>Storytelling</h1>
        <h2 className='h2'>
          {/* <span
            className='heart'
            style={{ color: '#b76e79', fontSize: '16px' }}>
            &#9829;
          </span>{' '} */}
          Photojournalism | Design | Video | Writing | Data Visualization |
          UI/UX | Languages
          {/* {' '}
          <span
            className='heart'
            style={{ color: '#b76e79', fontSize: '16px' }}>
            &#9829;
          </span> */}
        </h2>
        {/* <p className='paragraph'>
          Data Visualization | Photojournalism | Design | Video | Writing |
          UI/UX | Languages
        </p> */}
        <img src={divider} alt='divider' className='divider' />

        <h3 className='h3'>Photojournalism</h3>
        <ProjectCard
          image={photoinstagram}
          alt='Valerie Photography Instagram'
          hed="Valerie's Photography Instagram"
          subhed=''
          description="Photographs of presidents, politicians, people, and some plants."
          skills='Adobe Lightroom, Event photography, Photoshop, Political coverage'
          learnMoreUrl=''
          viewProjectUrl='https://instagram.com/valerieychuphotos'
        />

        <br></br>

        <h3 className='h3'>Political Reporting & Photography on a Science and Tech Beat</h3>
        <ProjectCard
          image={mothstories}
          alt='Medill on the Hill stories'
          hed='The White House, Capitol, and Supreme Court'
          subhed='Medill News Service'
          description='Photographed President Trump and White House press briefings, covered Senate confirmation hearings, interviewed senators, reported on a Supreme Court case. Granted full press access to the Capitol, Supreme Court, and White House.'
          skills='Adobe Lightroom, Science and technology beat reporting, Political reporting, Freelancing, Navigating official press briefings, Chasing down senators in hallways, Capturing critical moments in each event'
          learnMoreUrl='https://medillonthehill.medill.northwestern.edu/author/vchu/'
          viewProjectUrl='https://instagram.com/valerieychuphotos'
        />

        <br></br>

        <h3 className='h3'>Data Visualization</h3>
        <ProjectCard
          image={manymeasuresofmeteorites}
          alt='AETC Slideshow'
          hed='The Many Measures of Meteorites'
          subhed='Northwestern University STAT 301-2 project'
          description='A fun, interactive dashboard showing where meteorites fall, how that has changed across the years, and how large their impacts are.'
          skills='R, Data visualization, Data wrangling, Shiny Applications, Map creation, HTML, Interactive elements, Science communication, UI/UX'
          learnMoreUrl='/storytelling'
          viewProjectUrl='https://nohrcx-valerie-chu.shinyapps.io/the_many_measures_of_meteorites/'
        />

        <img src={divider} alt='divider' className='divider' />

        <p className='paragraph'>
          [This website is currently still under development. After you've
          visited the Select Works section located on this home page, to see
          more of my work, please visit my previous website.]
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

export default Storytelling;
