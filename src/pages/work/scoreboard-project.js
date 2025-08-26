import React from 'react';
import '../../styles/global.less';
import '../../styles/home.less';
import divider from '../../images/divider.svg';
import Header from './../header';
import Footer from './../footer';

const WorksampleScoreboard = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h3 className='h3' style={{ marginTop: '2rem' }}>
          Scoreboard Project
        </h3>

        {/* Scoreboard Project */}
        {/* Scoreboard Project */}
        {/* Scoreboard Project */}
        <h4 className='h4'>San Francisco Chronicle</h4>
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
          <i>Skills: </i>
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
      </div>
      <Footer />
    </>
  );
};

export default WorksampleScoreboard;
