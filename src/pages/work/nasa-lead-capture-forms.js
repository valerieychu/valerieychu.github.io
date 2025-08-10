import React from 'react';
import '../../styles/global.less';
import '../../styles/home.less';
import divider from '../../images/divider.svg';
import Header from './../header';
import Footer from './../footer';
import aetccometestwithus from '../../images/aetccometestwithus.jpg';
import aetccomeworkwithus from '../../images/aetccomeworkwithus.jpg';
import aetcctwuform from '../../images/aetcctwuform.png';
import aetccwwuform from '../../images/aetccwwuform.png';

const WorksampleNASALeadCaptureForms = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h3 className='h3' style={{ marginTop: '2rem' }}>
          NASA Lead Capture Forms
        </h3>

        {/* NASA Lead Capture Forms */}
        {/* NASA Lead Capture Forms */}
        {/* NASA Lead Capture Forms */}
        <h4 className='h4'>
          NASA’s Aerosciences Evaluation and Test Capabilities (AETC) Portfolio
          Office
        </h4>
        <p className='paragraph'>
          AIAA AVIATION is a conference that brings together more than 4000+
          attendees across the aviation industry. My NASA mentor asked me to
          tackle the challenge of designing, coding and deploying two lead
          capture (visitor data input) forms for our booth at the conference,
          inviting people to both work with us and test in our wind tunnels.
        </p>

        <p className='paragraph'>
          <i>Tools used: </i>
          Python, SQL, GitLab, Adobe InDesign, Figma, Dash Mantine Components,
          Photoshop
        </p>

        <p className='paragraph'>
          <i>Process: </i>
          Drawing upon dozens of hours spent looking through designs on the
          internet for input forms, I started on this lead capture project by
          refining design ideas. With just a couple weeks to finish the project
          and the various eyes we needed to get on the project before letting it
          go public for the conference, my co-intern and I decided to split up
          the workload but keep in constant communication to ensure we met the
          deadlines we set. While she worked on the graphic design for the
          poster presenting the QR codes for the forms, I assumed a full stack
          development role, taking over the design and coding for the forms. I
          narrowed down the fields we had to capture for each form — Come Work
          With Us and Come Test With Us. After wireframing then fleshing out a
          version of the forms with Figma then Adobe InDesign, I moved onto the
          build process.
        </p>
        <p className='paragraph'>
          NASA’s Aerosciences Evaluation and Test Capabilities (AETC)’s Data &
          Analytics team primarily uses Python, Dash Mantine Components and SQL.
          After dozens of Slack threads and almost-daily check-ins with my
          mentor, Erik Lopez, I learned how to synthesize then apply my
          classroom-obtained knowledge to this project, while navigating Stack
          Overflow, Google and Generative AI to fill in the gaps.
        </p>
        <p className='paragraph'>
          This was the project that truly taught me how to fish. I learned how
          to utilize complex callbacks, work with a new UI library I had never
          seen before, collect critical data for lead capture and write it to a
          database. Ultimately, thousands of people who visited our booth at
          AIAA AVIATION had the opportunity to fill out my form, capturing their
          data within our system and enabling future opportunities for all
          parties involved.
        </p>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://adapt-public.aetc.appdat.jsc.nasa.gov/come-test-with-us',
              '_blank',
            )
          }>
          View this project (Come Test With Us)
        </button>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://adapt-public.aetc.appdat.jsc.nasa.gov/come-work-with-us',
              '_blank',
            )
          }>
          View this project (Come Work With Us)
        </button>
        <div className='imageslideshowwrapper'>
          <img
            style={{ maxHeight: '700px', width: 'auto', margin: '1rem 0' }}
            src={aetcctwuform}
            alt='AETC Come Test With Us Form'
          />
          <img
            style={{ maxHeight: '700px', width: 'auto', margin: '1rem 0' }}
            src={aetccwwuform}
            alt='AETC Come Work With Us Form'
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorksampleNASALeadCaptureForms;
