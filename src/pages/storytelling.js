import React from 'react';
import '../styles/global.less';
import Header from './header';
import Footer from './footer';
import divider from '../images/divider.svg';
import ProjectCard from './projectcard';
import HorizontalGallery from './horizontalgallery';
import SlideshowCard from './slideshowcard';
import manymeasuresofmeteorites from '../images/manymeasuresofmeteorites.png';
import mothstories from '../images/mothstories.png';
import photoinstagram from '../images/photoinstagram.png';
import avocados from '../images/avocados.jpeg';
import eclipse from '../images/eclipse.jpg';
import goodreads from '../images/goodreads.png';
import cpacmusk from '../images/selectedphotos/cpac-musk.jpg';
import trumpstarmer from '../images/selectedphotos/trump-starmer.jpg';
import kennedyconfirmationhearing from '../images/selectedphotos/kennedy-confirmation-hearing.jpg';
import leavittbriefing from '../images/selectedphotos/leavitt-briefing-2.jpg';
import trumpeod from '../images/selectedphotos/trump-education-of-department.jpg';
import patelconfirmationhearing from '../images/selectedphotos/patel-confirmation-hearing.jpg';
import nasawallops from '../images/selectedphotos/nasa-wallops.jpg';
import nbncover from '../images/selectedphotos/nbn-cover.jpg';
import nbnbobaboom from '../images/selectedphotos/nbn-boba-boom.jpg';
import nuaznfeature from '../images/selectedphotos/nuazn-feature-story.jpg';
import nuaznlausanity from '../images/selectedphotos/nuazn-lausanity.jpg';

const Storytelling = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h1>Storytelling</h1>
        <h2 className='h2'>
          {/* <span
            className='heart'
            style={{ color: '#b76e79', fontSize: '16px' }}>
            &#9829;
          </span>{' '} */}
          Reporting | Data Science | Data Visualization | Photojournalism |
          Design | Video | UI/UX | Languages
          {/* {' '}
          <span
            className='heart'
            style={{ color: '#b76e79', fontSize: '16px' }}>
            &#9829;
          </span> */}
        </h2>
        {/* <p className='paragraph'>
          Data Visualization | Photojournalism | Design | Video | Writing |
          UI/UX | Languages
        </p> */}
        <img src={divider} alt='divider' className='divider' />

        <h3 className='h3'>
          Political Reporting & Photography on a Science and Tech Beat
        </h3>
        <ProjectCard
          image={mothstories}
          alt='Medill on the Hill stories'
          hed='The White House, Capitol, and Supreme Court'
          subhed='Medill News Service'
          description='Photographed President Trump and White House press briefings, covered Senate confirmation hearings, interviewed senators, reported on a Supreme Court case. Granted full press access to the Capitol, Supreme Court, and White House.'
          skills='Adobe Lightroom, Science and technology beat reporting, Political reporting, Freelancing, Navigating official press briefings, Chasing down senators in hallways, Capturing critical moments in each event'
          // learnMoreUrl='https://medillonthehill.medill.northwestern.edu/author/vchu/'
          viewProjectUrl='https://medillonthehill.medill.northwestern.edu/author/vchu/'
        />

        <br></br>

        <h3 className='h3'>
          Supervised Machine Learning for Prediction Modeling
        </h3>

        <ProjectCard
          image={avocados}
          alt='an analysis of avocados'
          hed='An Analysis of Avocados'
          subhed='Northwestern University STAT 301-2 final project'
          description='Developed a predictive model for the prices of avocados by comparing 13 model variants across 7 model types (Null, Ordinary Least Squares, Lasso, Ridge, K-Nearest Neighbors, Random Forest, Boosted Tree), evaluated across 50 resampled datasets to identify the best-performing model. 
Utilized V-fold cross-validation resampling and parallel processing techniques for efficiently tuning hyperparameter values with Tidymodels in RStudio.'
          skills='R, RStudio, Data analysis, Data visualization, Data wrangling, Common machine learning prediction models, Regression model, Model building, Refinement and selection, Hyperparameter tuning, Graphical analysis'
          // learnMoreUrl='/storytelling'
          viewProjectUrl='https://github.com/valerieychu/an-analysis-of-avocados'
        />

        <ProjectCard
          image={eclipse}
          alt='eclipse'
          hed='When Do Eclipses Happen?'
          subhed='Northwestern University STAT 301-3 final project'
          description='Developed a predictive model for when eclipses happen by comparing 18 model variants across 10 model types (Null, Boosted Tree, Elastic Net, K-Nearest Neighbors, Logistic, MARS, Neural Network, Random Forest, SVM Poly, SVM Radial), evaluated across 50 resampled datasets to identify the best-performing model. 
Utilized V-fold cross-validation resampling and parallel processing techniques for efficiently tuning hyperparameter values with Tidymodels in RStudio.'
          skills='R, RStudio, Data analysis, Data visualization, Data wrangling, Common machine learning prediction models, Classification model, Model building, Refinement and selection, Hyperparameter tuning, Graphical analysis'
          // learnMoreUrl='/storytelling'
          viewProjectUrl='https://github.com/valerieychu/when-do-eclipses-happen'
        />

        <br></br>

        <h3 className='h3'>Data Visualization</h3>

        <ProjectCard
          image={manymeasuresofmeteorites}
          alt='Meteorites'
          hed='The Many Measures of Meteorites'
          subhed='Northwestern University STAT 302 final project'
          description='A fun, interactive dashboard showing where meteorites fall, how that has changed across the years, and how large their impacts are.'
          skills='R, Data visualization, Data wrangling, Shiny Applications, Map creation, HTML, Interactive elements, Science communication, UI/UX'
          // learnMoreUrl='/storytelling'
          viewProjectUrl='https://nohrcx-valerie-chu.shinyapps.io/the_many_measures_of_meteorites/'
        />

        <ProjectCard
          image={goodreads}
          alt='goodreads'
          hed='The Habits of Goodreads Users'
          subhed='Northwestern University STAT 301-1 final project'
          description="A book lover's analysis of key bookish questions: Do people hate-rate or love-rate books? What languages are books on Goodreads written in? How many years have young adult books been around? And many more questions..."
          skills='R, RStudio, Data analysis, Exploratory data analysis (EDA), Data visualization, Data wrangling'
          // learnMoreUrl='/storytelling'
          viewProjectUrl='https://github.com/valerieychu/habits-of-goodreads-users'
        />

        <br></br>

        <h3 className='h3'>Photojournalism</h3>
        <ProjectCard
          image={photoinstagram}
          alt='Valerie Photography Instagram'
          hed="Valerie's Photography Instagram"
          subhed=''
          description='Photographs of presidents, politicians, people, and some plants.'
          skills='Adobe Lightroom, Event photography, Photoshop, Political coverage'
          learnMoreUrl=''
          viewProjectUrl='https://instagram.com/valerieychuphotos'
        />

        <br></br>

        <HorizontalGallery
          hed='[Horizontal gallery under development] Selected Works of Photojournalism'
          // subhed='Magazine Photojournalism. Newspaper Photojournalism. Corporate Events. Theater. Nature Photography. Headshots.'
          description='Magazine. Newspaper. Corporate Events. Theater. Nature Photography. Headshots.'>
          <img
            src={cpacmusk}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='Elon Musk showcases a bejeweled chainsaw gifted by Javier Milei (right) at the Conservative Political Action Conference (CPAC) at Oxon Hill, Md., on Thursday, Feb. 20, 2025.'
          />
          <img
            src={trumpstarmer}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='President Donald Trump and British Prime Minister Keir Starmer hold a joint press conference at the White House on Feb. 27, 2025.'
          />
          <img
            src={kennedyconfirmationhearing}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='Robert F. Kennedy Jr. took questions from senators at his confirmation hearing on Jan. 29, 2025.'
          />
          <img
            src={leavittbriefing}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='White House Press Secretary Karoline Leavitt holds a press briefing on March 19, 2025.'
          />
          <img
            src={trumpeod}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='President Donald Trump signed an executive order to begin dismantling the Department of Education as students, Republican governors and conservative organizations watched.'
          />
          <img
            src={patelconfirmationhearing}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='Kash Patel, Trump’s nominee for Director of the FBI, faced questions from the Senate Judiciary Committee.'
          />
          <img
            src={nasawallops}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='NASA Goddard communications interns visited NASA Wallops.'
          />
          <img
            src={nbncover}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt="NBN cover story: Northwestern's marching band builds community and connections"
          />
          <img
            src={nuaznfeature}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='NuAZN feature story: Lessons in Alchemy.'
          />
          <img
            src={nbnbobaboom}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='NBN Boba Boom.'
          />
          <img
            src={nuaznlausanity}
            sizes='(max-width: 768px) 90vw, 604px'
            loading='lazy'
            alt='NuAZN Lausanity.'
          />
        </HorizontalGallery>

        <br></br>

        <img src={divider} alt='divider' className='divider' />

        <p className='paragraph'>
          [This website is currently still under development. After you've
          visited the Select Works section located on this home page, to see
          more of my work, please visit my previous website.]
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
      <Footer />
    </>
  );
};

export default Storytelling;
