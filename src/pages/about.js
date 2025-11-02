import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';
import divider from '../images/divider.svg';

const About = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h1>Me, professionally</h1>
        <p className='paragraph'>
          Hi! I'm Valerie. If you've reached this Me section, you've likely seen
          a bit of my work! But if not, here's a quick summary:
        </p>
        <p className='paragraph'>
          I'm a storyteller passionate about working with data to design and
          code digital products that tell a story. I'm also a senior at
          Northwestern University triple majoring in data science, journalism,
          and international studies.
          {/* I'm an aspiring data scientist who
          wants to use digital design/web development to tell the story behind
          the data.  */}
        </p>
        <p className='paragraph'>
          I've interned at NASA, the San Francisco Chronicle, and several other
          places. Currently, I'm the web interactives editor of North by
          Northwestern, where I lead our data visualizations, interactive
          storytelling, and magazine-to-web story team to help our articles
          reach the Northwestern University community and beyond. You can see my
          resume and a summary of my work experience below.
        </p>
        <p className='paragraph'>
          In my free time, I love reading, playing cello, taking photographs of
          my friends and family, and learning new languages.
        </p>
        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1rTdswpATWFARn9dJoY1XkhEQ5pAVDAkO/view?usp=sharing',
              '_blank',
            )
          }>
          View my resume
        </button>
        <img src={divider} alt='divider' className='divider' />

        <h2 className='h2'>Work experience, summarized</h2>
        <p className='paragraph'>
          • (September 2025 - Present) North by Northwestern - Web Interactives
          Editor - Evanston, Ill.
          <br />
          <br />
          • (June 2025 - September 2025) NASA - Full Stack Data Science Intern -
          JPL, Pasadena, Calif.
          <br />
          <br />
          • (March 2025 - June 2025) San Francisco Chronicle - Digital Design
          and Development Intern - San Francisco
          <br />
          <br />• (Jan. 2025 - March 2025) Medill News Service - Science &
          Tech Reporter and Photographer - Washington, D.C.
          <br />
          <br />• (Oct. 2024 - Dec. 2024) CoRegistros - U.S. Customer
          Acquisition Intern - Barcelona, Spain
          <br />
          <br />• (June 2024 - Aug. 2024) NASA - Social and Digital Media Intern
          - Greenbelt, Md.
          <br />
          <br />• (Jan. 2024 - May 2024) NASA - Data & Analytics / Strategic
          Communications Intern - Washington, D.C.
          <br />
          <br />• (Sept. 2023 - Dec. 2023) Northwestern University Knight Lab -
          AI Video Automation for Journalism Team - Evanston, Ill.
          <br />
          <br />• (June 2023 - Aug. 2023) Partnership for Public Service -
          Creative Intern (In-house photography, Google Analytics, UI/UX
          research, graphic design) - Washington, D.C.
          <br />
          <br />• (Aug. 2023 - Sept. 2023) Alexza Pharmaceuticals - Quality
          Control Lab Assistant I, Temporary - Fremont, Calif.
          <br />
          <br />• (March 2023 - Present) Asian American Student Journalists -
          Co-President, Internal Events Committee Chair - Evanston, Ill.
          <br />
          <br />• (Sept. 2022 - Dec. 2023) North by Northwestern - Assistant
          Photography Editor, Web Story Designer, Magazine Page Designer -
          Evanston, Ill.
          <br />
          <br />• (Sept. 2022 - June 2023) The Daily Northwestern - Design
          Editor, Photographer, Staff Writer - Evanston, Ill.
          <br />
          <br />• (April 2023 - Dec. 2023) nuAZN Magazine - Writer,
          Photographer, Designer - Evanston, Ill.
          <br />
          <br />• (Jan. 2020 - June 2022) The Campanile - Managing Editor,
          School Board Correspondent, Staff Writer - Palo Alto, Calif.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
