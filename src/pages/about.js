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
          I'm a{' '}
          <span style={{ color: '#b76e79' }}>
            former data graphics journalist
          </span>{' '}
          turned{' '}
          <span style={{ color: '#b76e79' }}>
            machine learning engineer and product thinker
          </span>{' '}
          who never lost the skill of telling compelling stories. After one
          design & development internship with the San Francisco Chronicle and
          two internships on NASA's wind tunnel's data & analytics team, I've
          conceptualized, coded, and deployed multiple products that work for
          people and teams. With skills at the intersection of Data, AI/ML, and
          HCI, I hope to continue working on projects that help people.
        </p>
        <p className='paragraph'>
          I recently graduated cum laude from Northwestern University with a
          triple major in data science, journalism, and international studies.
          This fall, I'm starting my Master's in Computer Science at UCLA, where
          I'm specializing in machine learning and human-computer interaction.
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
              'https://drive.google.com/file/d/1-Ley-iuZ1OuXUfQxspxgrEEYkYkqBx--/view',
              '_blank',
            )
          }>
          View my resume
        </button>
        <img src={divider} alt='divider' className='divider' />
        <h2 className='h2'>Relevant courses</h2>
        <p className='paragraph'>
          <b>
            <span style={{ textDecoration: 'underline' }}>UCLA Courses</span>
          </b>
          <br />
          • Large-Scale Machine Learning
          <br />
          • Neural Networks and Deep Learning
          <br />
          • Computational Ethics and Large Language Models
          <br />
          • Current Topics in AI: Communication with Computers
          <br />
          <br />
          <b>
            <span style={{ textDecoration: 'underline' }}>
              Northwestern Courses (a selection)
            </span>
          </b>
          <br /><i>Data Science and Computer Science</i>
          <br />• Advanced Machine Learning (with Python) 
          <br />• Data Structures and Algorithms 
          <br />• Data Visualization
          <br />• Information Management (with SQL)
          <br />• Data Science 1, 2, 3 (with R)
          <br /><i>Mathematics and Statistics</i>
          <br />• Linear Algebra
          <br />• Multivariable Differential Calculus
          <br />• Statistical Theories and Methods 1 & 2
          <br />• Series and Multiple Integrals
          <br /><i>Journalism</i>
          <br />• Knight Lab Studio: AI Video Automation for
          Journalism
          <br />• Data Journalism
          <br />• Court Watchers: The Legal Beat
          <br />• Media Law & Ethics
          <br />• Government and National Policy Reporting: Mastering the Washington Beat
          <br />• Covering Washington, D.C. as a Real-Time Journalist
          <br />• How To Be a Government Watchdog
          <br />• Fundamentals of Video Journalism
          <br />• Fundamentals of Reporting and Writing
          <br />• Media History: Watergate's Legacy: The Press and the Presidency
          <br /><i>Design</i>
          <br />• Design Thinking and Doing
          <br />• Wireframing and App Design
          <br />• Rendering (with Vizcom and Keyshot)
          <br /><i>Fun Courses</i>
          <br />• Introduction to the Philosophy of Language
          <br />• Advanced Spanish I & II
          <br />• Pirates, Guns, and Empires
          <br />
          <br />
          <b>
            <span style={{ textDecoration: 'underline' }}>
              Universitat de Barcelona Courses
            </span>
          </b>
          <br /><i>Semester abroad | All classes fully taught in Spanish alongside local students at Spain’s top university | GPA: 9.48/10</i>
          <br />• Sociología del futuro (10/10, Matrícula de Honor, 1st in the class)
          <br />• Antropología del turismo (9.5/10, 3rd in the class)
          <br />• Diseño y edición de productos multimedia (8.8/10)
          <br />• Propedéutico de lengua y cultura (9.2/10, a Catalan language course)
          <br />• Picasso, Miró & Dalí (9.9/10)
        </p>
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
