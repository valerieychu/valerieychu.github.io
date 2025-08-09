import React from 'react';
import '../styles/global.less';
import '../styles/home.less';
import image from '../images/valeriechu.png';
import divider from '../images/divider.svg';
import Header from './header';
import Footer from './footer';
import valerie11x11 from '../images/valerie11x11.jpeg';
import valerie80x120 from '../images/valerie80x120.jpeg';
import valeriecamera from '../images/valeriecamera.jpeg';
import valeriegoddard from '../images/valeriegoddard.jpeg';
import valeriesfchronicle from '../images/valeriesfchronicle.jpeg';
import valeriewhitehouse from '../images/valeriewhitehouse.jpeg';
import valeriegoldstone from '../images/valeriegoldstone.jpeg';
import ProjectCard from './projectcard';

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      {/* Intro */}
      {/* Intro */}
      {/* Intro */}
      <div className='intro'>
        <div className='centered-text'>
          <h1 className='h1' style={{ marginBottom: '1rem' }}>
            Hi! I'm Valerie and I love storytelling.
          </h1>
          <h2 className='h2'>
            <span
              className='heart'
              style={{ color: '#b76e79', fontSize: '16px' }}>
              &#9829;
            </span>{' '}
            Data + Design + Code{' '}
            <span
              className='heart'
              style={{ color: '#b76e79', fontSize: '16px' }}>
              &#9829;
            </span>
          </h2>
          <h2 className='paragraph' style={{ margin: '1rem 0' }}>
            <em>~ Creating digital products that tell a story ~</em>
          </h2>
        </div>
        <img className='image' src={image} alt='Image of Valerie Chu' />
      </div>

      <img src={divider} alt='divider' className='divider' />
      <div className='centered-text'>
        <h3 className='h3'>A Quick Intro</h3>
        <p className='paragraph'>
          As part of NASA's Aerosciences Evaluation and Test Capabilities
          portfolio office, I focus on tracking our wind tunnel tests. I'm
          building a landing page that automatically updates with data
          visualizations, issues and highlights based on facility managers’
          reports on NASA's twelve wind tunnels. Essentially, I'm a full-stack
          developer/data scientist doing a combination of software development,
          UI/UX and data science.
        </p>
        <p className='paragraph'>
          I'm a three-time NASA intern, a former San Francisco Chronicle digital
          design/development intern, and a former freelance Congressional and
          White House photographer/reporter. I've loved every internship
          experience I've had so far, and I'm currently looking for a place
          where I can work with data to design and code digital products that
          tell a story.
        </p>
        <div className='imageslideshowwrapper'>
          <img
            className='imageslideshow'
            src={valeriegoddard}
            alt='Valerie at Wallops Flight Facility'
          />
          <img
            className='imageslideshow'
            src={valeriegoldstone}
            alt='Valerie at Goldstone'
          />
          <img
            className='imageslideshow'
            src={valeriecamera}
            alt='Valerie at the White House'
          />
          <img
            className='imageslideshow'
            src={valeriesfchronicle}
            alt='Valerie at the San Francisco Chronicle'
          />
          {/* <img
            className='imageslideshow'
            src={valeriewhitehouse}
            alt='Valerie at the White House'
          /> */}
          <img
            className='imageslideshow'
            src={valerie11x11}
            alt='Valerie at Ames UPWT 11x11'
          />
          <img
            className='imageslideshow'
            src={valerie80x120}
            alt='Valerie at NFAC 80x120'
          />
        </div>
      </div>

      <img src={divider} alt='divider' className='divider' />

      <div className='centered-text'>
        <h3 className='h3'>Select Works</h3>
        <ProjectCard
          image={valeriegoddard}
          alt='Valerie at Wallops'
          hed='Scoreboard Project'
          subhed='San Francisco Chronicle'
          description='A custom scoreboard component — Inspired by old-school sports design, I designed and coded a non-developer friendly scoreboard acts lets readers visually track games and scores within a photo story. Compatible with NBA, WNBA, MLB and NFL games.'
          skills='React, Figma, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/scoreboard-project'
          viewProjectUrl='https://www.sfchronicle.com/projects/2025/warriors-rockets-nba-playoffs/'
        />
        <ProjectCard
          image={valeriesfchronicle}
          alt='Valerie at the San Francisco Chronicle'
          hed='Investigative Series'
          subhed='San Francisco Chronicle'
          description='One of the Chronicle’s biggest investigative series this year, to be published later in 2025 — I led the product design and development for this series. With 30,000+ words and five parts, I knew the reader experience was crucial to get right. I wireframed then coded this series, creating custom components such as text message animations and bookmarking features.'
          skills='React, Figma, GSAP, Illustrator, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/stalker-project'
          viewProjectUrl='https://sfchronicle.com/'
        />
        <ProjectCard
          videoUrl='https://www.youtube.com/embed/oPsJiwtwxb4?si=LygNLsmEO-YP3Szz'
          hed='Reusable Video Components'
          subhed='San Francisco Chronicle'
          description='Adapting a video components from an existing codebase to a new project template under breaking news deadline — SF Chronicle photographers captured No Kings protests in photos and videos throughout the Bay Area and LA. I adapted video components to an existing photo story template under deadline for this story, which took the lead in our web traffic the Sunday after it was published.'
          skills='React, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/reusable-video-components'
          viewProjectUrl='https://youtu.be/oPsJiwtwxb4?si=QBsb-J0o9gIiHSx2'
        />
      </div>

      <img src={divider} alt='divider' className='divider' />
      <div className='centered-text'>
        <h3 className='h3'>A Quick Note</h3>
        <p className='paragraph'>
          Hi! Thank you so much for checking out my website!
        </p>
        <p className='paragraph'>
          Before you go further, I just want to note that this website is
          currently still under development. After you've visited the Select
          Works section located on this home page, to see more of my work,
          please visit my previous website.
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
        <h4 className='h4'>San Francisco Chronicle — Investigative Series</h4>
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
          When creating this project, I knew I had to look at it from both a
          product and storytelling perspective. It was a six part series
          consisting of over 5,000 words per part, so it was critical to keep
          readers engaged. With this in mind, and with the full creative control
          my mentor gave me over the project, I began designing and coding it.
          In particular, I focused on making two components.
        </p>
        <p className='paragraph'>
          The first was animating text messages. Text messages between the two
          main characters in the story were central to the storytelling process
          of this investigative piece, so I wanted to showcase the text messages
          somehow in each part of the series. I started by texting back and
          forth with my mentor, then studied how the text messages were sent and
          appeared. (One interesting thing I never noticed before was that when
          one person sends multiple texts, only the last text bubble gets an
          attribution arrow.) After looking through numerous photos on Google
          for additional text message bubble inspiration, I started designing a
          layout in InDesign then moved it to Figma when I decided I wanted to
          animate the text messages. After setting up the project within the
          Chronicle dev rig and getting the story working with ArchieML, I
          applied the typefaces, font colors and subtle gray-to-black background
          gradient to the project. Then I began animating the text messages
          using GSAP. It took a lot of YouTube videos, Googling, trial and
          error, and talking out my process with my mentor — but I overcame the
          learning curve and put together the animations! Along the way, I also
          learned how to use Illustrator to make SVGs work for the text bubble
          attributions and dived into dozens of niche Stack Overflow posts about
          animating using GSAP with React.
        </p>
        <p className='paragraph'>
          The second main element of the investigative project I focused on was
          a way to keep readers engaged with the article. When I first read a
          draft of the series in March, it was more than 30,000 words and took
          me 1 hour 45 minutes to finish reading from start to finish without
          breaks. While that was because I had the time to read it as part of
          working on its design/development, I knew most people wouldn’t finish
          reading the series in one continuous sitting. I needed to figure out
          how readers would engage with the series, then incorporate both
          storytelling features and product design to keep them hooked on the
          story. I started by developing user personas with our audience in
          mind, which comes from a wide range of backgrounds and with different
          daily reading habits. The most viable idea emerged as a bookmark modal
          — when the reader closes the tab or the app, their progress will be
          automatically saved. No matter which device they continue reading on,
          the page will resume from where they left off and a bookmark modal
          will appear, offering a brief summary of the story so far. I designed
          the bookmark modal and the user flow diagram for it using Figma. I
          pulled the data for the bookmark modal (ex. Summary hed and summary
          text applicable to each 25% of the story) from Google Sheets using
          ArchieML. I played around with different ways of using autosave —
          first, I tried calculating the scroll percentage and anchoring the
          bookmark modal to certain percentages. Then my mentor and I decided to
          make it more flexible, so we changed up our React hooks and used
          BlueConic to create the autosave feature.
        </p>
        <p className='paragraph'>
          I also prioritized both product design and accessibility when creating
          the bookmark modal. The Continue Reading button on the left side of
          the modal closes the bookmark modal and allows readers to pick up
          where they left off. The Start Over button on the right side of the
          modal deletes the bookmark/autosave progress and starts the reader
          back at the top of the story (which is useful if more than one person
          shares the same San Francisco Chronicle account). It’s also possible
          for the reader to close the modal through clicking on the Continue
          Reading button, the X button, Escape key or anywhere outside of the
          modal itself. All San Francisco Chronicle products are also coded with
          mobile-first design, all HTML tags are semantic, and all color
          contrast and font sizes are chosen to be easily understood whether the
          reader is using a screen reader or has color blindness.
        </p>
        <p className='paragraph'>
          By the end of my internship, I had used far more useStates,
          useEffects, useRefs and useContexts than I ever anticipated. Through
          working on this project from conception to execution, I gained a deep
          understanding of user design, product design and web
          design/development, allowing me to help bring this investigative
          series to life.
        </p>

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
