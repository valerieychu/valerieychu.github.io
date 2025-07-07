import React from 'react';
import '../styles/global.less';
import '../styles/home.less';
import image from '../images/valeriechu.png';
import divider from '../images/divider.svg';
import Header from './header';
import Footer from './footer';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Intro */}
      {/* Intro */}
      {/* Intro */}
      <div className='intro'>
        <div className='centered-text'>
          <h1 className='h1'>Hi! I'm Valerie and I love storytelling.</h1>
          <h2 className='h2'>
            I’m an aspiring digital designer and front-end web developer. I also
            wrangle data, photograph and write.
          </h2>
          <h2 className='paragraph'>
            I've previously interned at NASA, the San Francisco Chronicle, and
            several other places. I've had experience in a variety of roles
            including digital design/development, data analytics, database
            marketing, political reporting and social media. Now, I want to use
            those skills to dive into storytelling at the intersection of data
            science, journalism and design/development.
          </h2>
        </div>
        <img className='image' src={image} alt='Image of Valerie Chu' />
      </div>
      <img src={divider} alt='divider' className='divider' />

      {/* Selected Works */}
      {/* Selected Works */}
      {/* Selected Works */}
      <div className='centered-text'>
        <h3 className='h3'>Select Works</h3>

        {/* Scoreboard Project */}
        {/* Scoreboard Project */}
        {/* Scoreboard Project */}
        <h4 className='h4'>San Francisco Chronicle — Scoreboard Project</h4>
        <p className='paragraph'>
          The San Francisco Chronicle published two photo stories that portrayed
          key moments from the Golden State Warriors' games in the first round
          then the semifinals of the NBA playoffs. Since each story featured
          photos taken during the entire round (ie. multiple games), we wanted
          to allow readers to visually track which game they're looking at. As
          the designer/developer for the project, I created a custom scoreboard
          component.
        </p>

        <p className='paragraph'>
          {/* <span style={{ fontWeight: 'bold' }}>Tools used:</span>  */}
          <i>Tools used: </i>
          React, Figma, ArchieML, HTML, CSS, JavaScript
        </p>

        <p className='paragraph'>
          <i>Process: </i>
          When creating the scoreboard component, I wanted to start by
          considering the history of old-school sports design. My mentor, Alex
          Fong, has a collection of newspaper designs from people including
          Vince Chiaramonte, Brian Gross and Wayne Kamidoi. After looking
          through some of their work as well as that of other designers, I began
          to pick up on particular ways of displaying fundamental sports
          information — with scoreboards being one such idea. Then my goal
          became to take the inspiration I gained from print sports design and
          make those ideas digitally presentable. I used Figma to design
          multiple scoreboard options, ultimately landing on one that could be
          reused for other sports including the WNBA, MLB and NFL.
        </p>
        <p className='paragraph'>
          The scoreboard’s dynamic design adjusts to mobile and desktop devices,
          and allows editors and writers to simply edit an ArchieML tag in
          Google Docs to change scoreboard components — team names, score and
          game number — without needing access to the code or coding skills. The
          scoreboard then auto-designs itself.
        </p>
        <p className='paragraph'>
          This scoreboard component was deployed for two Golden State Warriors
          photo stories. Since each photo story was published immediately after
          each NBA round, I utilized the scoreboard component and also
          designed/placed the game photos into each story under deadline. The
          scoreboard component exists as a San Francisco Chronicle component and
          will be reused for other sports we cover in the future.
        </p>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() =>
            window.open(
              'https://www.sfchronicle.com/projects/2025/warriors-rockets-nba-playoffs/',
              '_blank',
            )
          }>
          View this project (1st story)
        </button>

        <button
          className='view-this-project'
          onClick={() =>
            window.open(
              'https://www.sfchronicle.com/projects/2025/warriors-timberwolves-nba-playoffs/',
              '_blank',
            )
          }>
          View this project (2nd story)
        </button>

        <video
          width='640'
          height='427'
          controls
          // autoPlay
          muted
          loop
          style={{
            maxWidth: '100%',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}>
          <source src='/scoreboard-component.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        {/* Investigative Project */}
        {/* Investigative Project */}
        {/* Investigative Project */}
        <h4 className='h4'>San Francisco Chronicle — Investigative Story</h4>
        <p className='paragraph'>
          [Story not yet published] I worked from conception to execution on a
          long-term investigative project that will be published later in 2025.
        </p>

        <p className='paragraph'>
          {/* <span style={{ fontWeight: 'bold' }}>Tools used:</span>  */}
          <i>Tools used: </i>
          React, Figma, GSAP, Illustrator, ArchieML, HTML, CSS, JavaScript
        </p>

        <p className='paragraph'>
          <i>Process: </i>
          Design inspo process
        </p>
        <p className='paragraph'>Design highlights</p>
        <p className='paragraph'>Design use</p>

        <button
          className='view-this-project'
          style={{ marginRight: '1rem' }}
          onClick={() => window.open('https://www.sfchronicle.com/', '_blank')}>
          This investigative story will be published later in 2025
        </button>

        {/* LA/Bay Area Protests Project */}
        {/* LA/Bay Area Protests Project */}
        {/* LA/Bay Area Protests Project */}
        <h4 className='h4'>
          San Francisco Chronicle — Reusable video components
        </h4>
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
          {/* <span style={{ fontWeight: 'bold' }}>Tools used:</span>  */}
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
      {/* <Footer /> */}
    </>
  );
};

export default Home;
