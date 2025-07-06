import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';

const About = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h1>Me, Professionally</h1>
        <p className='paragraph'>
          Hi! I'm Valerie, a rising senior at Northwestern University exploring
          the intersection of journalism, data science and design/development.
          Some of my other passions include reading, photography, cello and
          learning new languages.
        </p>
        <p className='paragraph'>
          I've previously interned at NASA, the San Francisco Chronicle, and
          several other places. I've had experience in a variety of roles
          including digital design/development, data analytics, database
          marketing, political reporting and social media. Now, I want to use
          those skills to dive into storytelling at the intersection of data
          science, journalism and design/development.
        </p>
        <h2 className='h2'>A summary of my experience</h2>
        <p className='paragraph'>
          • (March 2025 - June 2025) San Francisco Chronicle - Digital Design
          Intern - San Francisco
          <br />
          <br />• (Jan. 2025 - March 2025) Medill News Service - Health &
          Science Reporter / Photographer - Washington, D.C.
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
          <br />
          <br />
          To see my portfolio tailored for the Journalist of the Year
          competition, which contains my pre-college work, visit here:
          https://valerieychu.wixsite.com/website
          <br />
          <br />
          To see my music experience, visit this link.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
