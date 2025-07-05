import React from 'react';
import '../styles/global.less';
import '../styles/home.less';
import image from '../images/valeriechu.png';
import divider from '../images/divider.svg';

const Bio = () => {
  return (
    <>
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
            those skills to dive into the intersection of journalism, data
            science and design/development where storytelling thrives.
          </h2>
        </div>
        <img className='image' src={image} alt='Image of Valerie Chu' />
      </div>
      <img src={divider} alt='divider' className='divider' />
      {/* Selected Works */}
      <div className='centered-text'>
        <h3 className='h3'>Select Works</h3>
        <h4 className='h4'>San Francisco Chronicle — Scoreboard Project</h4>
        <p>
          The San Francisco Chronicle produced two photo stories that portrayed
          key moments from the Golden State Warriors' games in the first round
          then the semifinals of the NBA playoffs. Since each story featured
          photos taken during the entire round (ie. multiple games), we wanted
          to allow readers to visually track which game they're looking at. As
          the designer/developer for the project, I created a custom scoreboard
          component.
          <br />
          <br />
          {/* <span style={{ fontWeight: 'bold' }}>Tools used:</span>  */}
          <i>Tools used: </i>
          React, Figma, ArchieML, HTML, CSS, JavaScript
          <br />
          <br />
          <i>Process: </i>
          <br />
          <br />
          When creating the scoreboard component, I wanted to start by
          considering the history of old-school sports design. My mentor, Alex
          Fong, has a collection of newspaper designs from people including
          Vince Chiaramonte, Brian Gross and Wayne Kamidoi. After looking
          through some of their work as well as that of other designers, I began
          to pick up on particular ways of displaying fundamental sports
          information — with scoreboards being one such idea. Then my goal
          became to take these ideas I had from print and make them digitally
          presentable. I used Figma to design multiple scoreboard options,
          ultimately landing on one that could be reused for other sports
          including the WNBA, MLB and NFL.
          <br />
          <br />
          The scoreboard’s dynamic design adjusts to mobile and desktop devices,
          and allows editors and writers to simply edit an ArchieML tag in
          Google Docs to change scoreboard components — team names, score and
          game number — without needing access to the code or coding skills. The
          scoreboard then auto-designs itself.
          <br />
          <br />
          This scoreboard component was deployed for two Golden State Warriors
          photo stories. Since each photo story was published immediately after
          each NBA round, I utilized the scoreboard component and also
          designed/placed the game photos into each story under deadline. The
          scoreboard component exists as a San Francisco Chronicle
          component and will be reused for other sports we cover in the future.
        </p>
      </div>
    </>
  );
};

export default Bio;
