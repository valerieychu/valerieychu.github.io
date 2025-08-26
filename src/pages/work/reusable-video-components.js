import React from 'react';
import '../../styles/global.less';
import '../../styles/home.less';
import divider from '../../images/divider.svg';
import Header from './../header';
import Footer from './../footer';

const WorksampleReusableVideoComponents = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h3 className='h3' style={{ marginTop: '2rem' }}>
          Reusable Video Components
        </h3>

        {/* LA/Bay Area Protests Project */}
        {/* LA/Bay Area Protests Project */}
        {/* LA/Bay Area Protests Project */}
        <h4 className='h4'>San Francisco Chronicle</h4>
        <p className='paragraph'>
          San Francisco Chronicle photographers captured demonstrations
          throughout the Bay Area and Los Angeles of people protesting President
          Donald Trump’s immigration policies and the military parade held on
          his birthday. We already had a photo component that enabled us to to
          add and design photos in the template I set up for this project, but
          we didn't have a compatible short video component. Under breaking news
          deadline, I took a horizontal video component from an existing code
          base I hadn’t worked with before and adapted it to this particular
          project template.
        </p>

        <p className='paragraph'>
          <i>Tools used: </i>
          React, ArchieML, HTML, CSS, JavaScript
        </p>

        <p className='paragraph'>
          <i>Process: </i>
          Because this story was published under deadline, after setting up the
          story’s custom build, I immediately started working with people from
          the photo and video teams to lay out and design the photos in this
          story using the same custom ArchieML tags as other Chronicle photo
          stories (ex. as seen in the photos in the scoreboard project). But we
          had a few videos that captured key scenes at the protests — and we
          didn’t have an existing video component that worked for this template
          — so creating that became my main focus during the crunch period of
          assembling this story.
        </p>
        <p className='paragraph'>
          In a previous Chronicle project, we made a vertical video component
          that drew data from a video subsheet within a Google Sheet, but it
          wasn't compatible with ArchieML/Google Docs. I imported several files
          from that project into this one; edited them to make them all work
          with ArchieML/Google Docs; changed the names of the files and
          components to be more intuitive (ex. interviewvideo.js became
          verticalvideohasaudio.js); renamed unintuitively named components and
          relinked them; changed the color of the scrub bar to our brand color;
          and changed the design of the video captions to be text width and in
          the right typeface.
        </p>
        <p className='paragraph'>
          Ultimately, I ended up creating a horizontal video component, a
          vertical component without audio, and a vertical component with audio
          — adapted under deadline from an existing codebase I hadn’t worked
          with before, and consistent with Chronicle video styles. Featuring
          photos/videos taken on Sunday, June 8 and updated daily over the
          course of a week, this photo/video story came in second for our web
          traffic on Saturday and took the lead on the following Sunday.
        </p>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://www.sfchronicle.com/projects/2025/ice-california-protest-photos/',
              '_blank',
            )
          }>
          View this project
        </button>

        <br />

        <iframe
          width='640'
          height='360'
          src='https://www.youtube.com/embed/oPsJiwtwxb4?si=LygNLsmEO-YP3Szz'
          title='Photos and video show No Kings, ICE protests in Bay Area, Los Angeles'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          style={{
            maxWidth: '100%',
            marginBottom: '1rem',
          }}
          allowfullscreen></iframe>
      </div>
      <Footer />
    </>
  );
};

export default WorksampleReusableVideoComponents;
