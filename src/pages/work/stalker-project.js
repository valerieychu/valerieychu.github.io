import React from 'react';
import '../../styles/global.less';
import '../../styles/home.less';
import divider from '../../images/divider.svg';
import Header from './../header';
import Footer from './../footer';
import sfchroniclehome from '../../images/sfchroniclehome.png';

const WorksampleStalker = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h3 className='h3' style={{ marginTop: '2rem' }}>
          Investigative Series
        </h3>

        {/* Investigative Project */}
        {/* Investigative Project */}
        {/* Investigative Project */}
        <h4 className='h4'>San Francisco Chronicle</h4>
        <p className='paragraph'>
          [Story not yet published] I led the product design and development for
          one of the Chronicle’s biggest investigative series this year, to be
          published later in 2025.
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
          attributions and dove into dozens of niche Stack Overflow posts about
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

        <img
          style={{ maxWidth: '100%', margin: '1rem 0' }}
          src={sfchroniclehome}
          alt='San Francisco Chronicle home page'
        />
      </div>
      <Footer />
    </>
  );
};

export default WorksampleStalker;
