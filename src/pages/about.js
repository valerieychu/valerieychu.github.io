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
          I'm a former data journalist who never lost the skill of telling a
          good story. After one design & development internship with
          the San Francisco Chronicle, and two internships on NASA's wind
          tunnel's data & analytics team, I know how to build products that
          work. With skills at the intersection of Data, AI/ML, and
          Graphics/Vision, I hope to contributing to innovation that strengthens
          the reach of human stories.
        </p>
        <p className='paragraph'>
          I recently graduated cum laude from Northwestern University with a
          triple major in data science, journalism, and international studies.
          This fall, I'm starting my Master's in Computer Science at UCLA, where
          I aim to focus on machine learning and visual computing.
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
              'https://drive.google.com/file/d/1K6tXK1Wytwbr4OYOYWZS4pWy82Gjq_3F/view',
              '_blank',
            )
          }>
          View my resume
        </button>
        <img src={divider} alt='divider' className='divider' />
        <h2 className='h2'>Work experience, summarized</h2>
        <p className='paragraph'>
          • (March 2026 - June 2026) Northwestern University - Deep learning
          project: Image captioning on a real-world dataset - Evanston, Ill.
          <br />
          <br />
          • (March 2026 - June 2026) Northwestern University - Autoresearch
          project: Agentic AI for rapid ML model tuning - Evanston, Ill.
          <br />
          <br />
          • (January 2026 - March 2026) Northwestern University - Teaching
          Assistant for STAT 302: Data Visualization - Evanston, Ill.
          <br />
          <br />
          • (September 2022 - December 2025) North by Northwestern - Web
          Interactives Editor - Evanston, Ill.
          <br />
          <br />
          • (June 2025 - September 2025) NASA - Full Stack Data Science Intern -
          JPL, Pasadena, Calif.
          <br />
          <br />
          • (March 2025 - June 2025) San Francisco Chronicle - Digital Design
          and Development Intern - San Francisco
          <br />
          <br />• (Jan. 2025 - March 2025) Medill News Service - Science & Tech
          Reporter and Photographer - Washington, D.C.
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
