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
import valeriemirror from '../images/valeriechumirror.jpg';
import ProjectCard from './projectcard';
import aetccometestwithus from '../images/aetccometestwithus.jpg';
import aetccomeworkwithus from '../images/aetccomeworkwithus.jpg';
import aetcctwuform from '../images/aetcctwuform.png';
import aetccwwuform from '../images/aetccwwuform.png';
import sfchroniclehome from '../images/sfchroniclehome.png';
import aetchome from '../images/aetchome.png';
import thewrongstalker from '../images/thewrongstalker.png';
import m7newssentiment from '../images/m7newssentiment.png';
import flickr8k from '../images/flickr8k.png';

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
            Hi! I'm Valerie.
          </h1>
          <h2 className='h2'>
            <span
              className='heart'
              style={{ color: '#b76e79', fontSize: '16px' }}>
              &#9829;
            </span>{' '}
            Data + AI/ML + Graphics/Vision{' '}
            <span
              className='heart'
              style={{ color: '#b76e79', fontSize: '16px' }}>
              &#9829;
            </span>
          </h2>
          <h2 className='paragraph' style={{ margin: '1rem 0' }}>
            <em>~ NASA Intern 3x, SF Chronicle Intern ~</em>
          </h2>
        </div>
        <img className='image' src={image} alt='Image of Valerie Chu' />
      </div>

      <img src={divider} alt='divider' className='divider' />
      <div className='centered-text'>
        <h3 className='h3'>A Quick Intro</h3>
        <p className='paragraph'>
          Last summer, as a full stack data science intern in NASA's
          Aerosciences Evaluation and Test Capabilities portfolio office, I
          focused on tracking our wind tunnel tests. I conducted user interviews
          with the leadership team, then wireframed, built, and deployed a
          landing page that updates with real-time data visualizations, issues,
          and highlights for individual tests conducted within NASA's twelve
          wind tunnels, solving a persistent data silo issue for the leadership
          team which adopted my landing page into its daily workflow.
        </p>
        <p className='paragraph'>
          In the winter, I was a teaching assistant for Northwestern
          University's STAT 302: Data Visualization class. In the spring, I
          completed two projects. The first was an autoresearch project built
          upon a custom dataset I made through using BigQuery to pull news
          sentiment data on a massive scale and join it with yfinance data, upon
          which I used Claude as an agentic AI to enable rapid hyperparameter
          tuning and ML model evaluation to predict next-day tech stock
          direction using news sentiment. In the second project, I built and
          compared three image captioning approaches using images on Flickr — a
          ResNet-50 + KNN retrieval baseline, a CNN + LSTM encoder-decoder, and
          a fine-tuned GIT transformer — to benchmark generative captioning
          against retrieval and evaluate BLEU across architectures.
        </p>
        <p className='paragraph'>
          I'm a three-time NASA intern, a former San Francisco Chronicle digital
          design/development intern, and a former freelance Congressional and
          White House photographer/reporter. Currently, I'm actively looking for
          software engineering, machine learning, or visual computing
          internships (both academic and summer) within the aerospace,
          entertainment, or tech industries.
        </p>
        <p className='paragraph'>
          I recently graduated cum laude from Northwestern University with a
          triple major in data science, journalism, and international studies.
          This fall, I'm starting my Master's in Computer Science at UCLA, where
          I aim to focus on machine learning and visual computing.
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
          image={aetchome}
          alt='NASA Aerosciences Evaluation and Test Capabilities Portfolio Office home page'
          hed='NASA Wind Tunnel Test Tracking Project'
          subhed='NASA’s Aerosciences Evaluation and Test Capabilities Portfolio Office'
          description='Full stack development and data science for tracking NASA’s wind tunnel tests — Built a landing page that updates with real-time issues, highlights, and data visualizations for NASA’s 12 wind tunnels.'
          skills='Python, Figma, SQL, GitLab, Dash Mantine Components, Dash Plotly'
          learnMoreUrl='/work/nasa-wind-tunnel-test-tracking'
          // viewProjectUrl='https://www.nasa.gov/directorates/armd/aetc/'
        />
        <ProjectCard
          image={thewrongstalker}
          alt='San Francisco Chronicle home page'
          hed='Investigative Series'
          subhed='San Francisco Chronicle'
          description='One of the Chronicle’s biggest investigative series of 2026 — I led the product design and development for this series. With 12,000+ words and eight chapters, I knew the reader experience was crucial to get right. I designed, wireframed, and coded this series, creating custom components such as text message animations and bookmarking features.'
          skills='React, Figma, GSAP, Illustrator, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/stalker-project'
          viewProjectUrl='https://www.sfchronicle.com/projects/2026/the-wrong-stalker/?utm_source=marketing&utm_medium=copy-url-link&utm_campaign=article-share&hash=aHR0cHM6Ly93d3cuc2ZjaHJvbmljbGUuY29tL3Byb2plY3RzLzIwMjYvdGhlLXdyb25nLXN0YWxrZXIv&time=MTc3OTQzOTk1OTIxMw==&rid=NmRmODQ5YTgtNDE3Mi00ZWQ4LTg0ZmEtYjkwNjYxZjUyNDU4&sharecount=MQ=='
        />
        <ProjectCard
          image={m7newssentiment}
          alt='A presentation slide from this project'
          hed='Agentic AI for Rapid ML Model Tuning'
          subhed='Northwestern University'
          description='Applying autoresearch to predict next-day stock price direction using news sentiment — Created a custom dataset with BigQuery through joining news sentiment and yfinance data, then built an agentic workflow using Claude to enable rapid hyperparameter tuning and ML model evaluation, ultimately producing a reproducible negative result. Conducted feature engineering, ablation testing, failure analysis, and stability checks.'
          skills='Machine learning, BigQuery, Claude as an AI agent, Data wrangling'
          learnMoreUrl='/work/autoresearch-project'
          viewProjectUrl='https://github.com/valerieychu/m7-news-sentiment'
        />
        <ProjectCard
          image={flickr8k}
          alt='A screenshot of the Flickr8k dataset on Kaggle'
          hed='Image Captioning on a Real-World Dataset'
          subhed='Northwestern University'
          description='Compared a ResNet-50 + KNN retrieval baseline, a CNN + LSTM encoder-decoder, and a fine-tuned GIT transformer to examine how each design choice — feature representation, language modeling strategy, and scale of pretraining — affects image caption quality, as measured by BLEU scores.'
          skills='TensorFlow, Machine learning, Deep learning, Image captioning'
          viewProjectUrl='https://github.com/valerieychu/flickr8k-image-captioning'
        />
        <ProjectCard
          videoSrc='/scoreboard-component.mp4'
          alt='A video demonstration of the scoreboard component.'
          hed='Scoreboard Project'
          subhed='San Francisco Chronicle'
          description='A custom scoreboard component — Inspired by old-school sports design, I designed and coded a non-developer friendly scoreboard that lets readers visually track games and scores within a photo story. Compatible with NBA, WNBA, MLB, and NFL games.'
          skills='React, Figma, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/scoreboard-project'
          viewProjectUrl='https://www.sfchronicle.com/projects/2025/warriors-timberwolves-nba-playoffs/'
        />
        <ProjectCard
          videoUrl='https://www.youtube.com/embed/oPsJiwtwxb4?si=LygNLsmEO-YP3Szz'
          hed='Reusable Video Components'
          subhed='San Francisco Chronicle'
          description='Adapting video components from an existing codebase to a new project template under breaking news deadline — SF Chronicle photographers captured No Kings protests in photos and videos throughout the Bay Area and LA. I adapted video components to an existing photo story template under deadline for this story, which took the lead in our web traffic the Sunday after it was published.'
          skills='React, ArchieML, HTML, CSS, JavaScript'
          learnMoreUrl='/work/reusable-video-components'
          viewProjectUrl='https://youtu.be/oPsJiwtwxb4?si=QBsb-J0o9gIiHSx2'
        />
        <ProjectCard
          image={aetccomeworkwithus}
          alt='AETC Slideshow'
          hed='NASA Lead Capture Forms'
          subhed='NASA’s Aerosciences Evaluation and Test Capabilities Portfolio Office'
          description='Design and development for lead capture forms — For AETC’s exhibition at AIAA AVIATION 2024, we wanted to collect information from people interested in testing in our wind tunnel facilities or joining our team. I designed, coded, and deployed two data input forms for lead capture, working with complex callbacks to collect data and write to a database.'
          skills='Python, SQL, GitLab, Adobe InDesign, Figma, Dash Mantine Components, Photoshop'
          learnMoreUrl='/work/nasa-lead-capture-forms'
          viewProjectUrl='https://adapt-public.aetc.appdat.jsc.nasa.gov/come-test-with-us'
        />
        <ProjectCard
          image={valeriemirror}
          alt='Valerie takes a mirror pic.'
          hed='valerieychu.github.io'
          subhed='Personal Project'
          description='A custom website — I designed, wireframed, coded, and deployed this portfolio site from scratch. I selected all typefaces, did all the styling, created all custom components in React and Adobe Illustrator, optimized for both mobile and desktop, and got everything running by myself.'
          skills='React, Gatsby, GitHub, Figma, Website development, Website deployment, Adobe Illustrator'
          // learnMoreUrl='/work/personal-portfolio'
          // viewProjectUrl='https://valerieychu.github.io/'
        />
      </div>

      {/* <img src={divider} alt='divider' className='divider' />
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
      </div> */}
    </>
  );
};

export default Home;
