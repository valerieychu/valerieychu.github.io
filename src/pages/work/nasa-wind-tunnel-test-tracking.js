import React from 'react';
import '../../styles/global.less';
import '../../styles/home.less';
import divider from '../../images/divider.svg';
import Header from './../header';
import Footer from './../footer';
import aetchome from '../../images/aetchome.png';

const WorksampleNASAWindTunnelTestTracking = () => {
  return (
    <>
      <Header />
      <div className='centered-text'>
        <h3 className='h3' style={{ marginTop: '2rem' }}>
          NASA Wind Tunnel Test Tracking Project
        </h3>

        {/* NASA Lead Capture Forms */}
        {/* NASA Lead Capture Forms */}
        {/* NASA Lead Capture Forms */}
        <h4 className='h4'>
          NASA’s Aerosciences Evaluation and Test Capabilities (AETC) Portfolio
          Office
        </h4>
        <p className='paragraph'>
          Full stack development and data science for tracking NASA’s wind
          tunnel tests — Built a landing page that updates with real-time
          issues, highlights, and data visualizations for NASA’s 12 wind
          tunnels.
        </p>

        <p className='paragraph'>
          <i>Tools used: </i>
          Python, Figma, SQL, GitLab, Dash Mantine Components, Dash Plotly
        </p>

        <p className='paragraph'>
          [Note: Due to this project being part of an internal NASA cloud-based
          data application behind NASA's firewall, screenshots are not
          available.]
        </p>

        <p className='paragraph'>
          <i>The background: </i>
          NASA’s twelve wind tunnels are spread out across the country, with
          different facility managers overseeing each wind tunnel. Naturally,
          this led to the establishment of data silos, where knowledge between
          facility managers, AETC leadership, and other stakeholders wasn’t
          centralized. To solve this issue, NASA’s AETC’s Data & Analytics team
          built ADAPT, a centralized internal NASA platform for wind tunnel
          data.
        </p>
        <p className='paragraph'>
          <i>My project: </i>
          My wind tunnel test tracking project is a landing page within ADAPT.
          Previously, we had specific pages to display weekly reports, media,
          issues and highlights, and even facility-specific data. But facility
          managers and AETC leadership wanted a way to centralize and showcase
          data at the individual test level. So I designed, wireframed, then
          coded that landing page.
        </p>
        <p className='paragraph'>
          <i>Process: </i>
          My goal for this project was to create a product that would be useful
          and valuable to facility managers, center integration managers, AETC
          leadership, and AETC’s Data & Analytics team (us). So with my mentor’s
          enthusiastic words encouraging me to make this project my own, I
          jumped onto it.
        </p>
        <p className='paragraph'>
          My mentor, Rachael Smith, had already crafted a project plan
          describing all the things we wanted out of this project. So I
          continued with the next most logical step — user interviews with
          facility managers and AETC leadership. Through it, I gained two
          valuable insights I hadn’t previously considered based on the
          project’s technical requirements: both user groups wanted the page to
          have as many data visualizations as reasonably possible, and to be
          easily skimmable for specific test details.
        </p>
        <p className='paragraph'>
          To achieve this, I made several intentional design choices during the
          wireframing process done in Figma — I utilized a solid grid that would
          keep cards clean both vertically and horizontally. I made use of icons
          and color, where a red dot might mean the test wasn’t timely, or a sun
          icon would let a user easily locate the test duration card. I
          organized the modal into rough horizontal sections, where each section
          would be easily identifiable as Header, Details, Hours, Revenue, and
          Consumables. Within each of those sections, I grouped smaller cards
          into neat rows, some showcasing different types of revenue and
          consumables, each with the dollar amount in a larger font size and
          bold text to make that data point stand out. Overall, I kept the
          design minimalistic with pops of intentional color.
        </p>
        <p className='paragraph'>
          Throughout the development process, I learned how to write code that
          would reflect our existing platform in terms of design, documentation,
          file organization, and code structure. I made intentional data
          visualizations choices, like creating a card that showcased the delta
          between the consumables a facility manager asked for and what AETC
          budgeted for them, serving as a quick, visual way to flag any major
          differences. I queried data from an internal dataset with over two
          hundred variables using SQL. I utilized complex callbacks in Python to
          display different data visualizations and section layouts based on
          whether certain test conditions were met. I created data
          visualizations using creative ways to circumvent the design
          limitations of Dash Plotly like invisible colors and adjusted margins.
          I learned to confidently navigate and contribute to the team’s CI/CD
          pipeline setup in GitLab. And I kept my documentation clean.
        </p>
        <p className='paragraph'>
          This project taught me how to navigate the uncertainty and decision
          making process behind the creation of a new product, one still meant
          to fit into a preexisting application infrastructure deployed on
          Google Cloud Platform (GCP). I learned how to scan through
          documentation, Google search results, Stack Overflow, and generative
          AI to find the tips I needed to debug my code. I got used to
          delivering biweekly updates and learning from my amazing teammates.
          And I became familiar with tools used in full stack development and
          data science, combining those skills with my journalism and design
          background to create a useful and valuable product.
        </p>

        <p className='paragraph'>
          [Project, Pt. 2 — P.S. So, actually, the landing page came second.
          First, came the modal. (I adapted the landing page from the modal
          after we pushed it to production.)
        </p>
        <p className='paragraph'>
          In resume form, this is how I would describe the work I did for the
          modal: Designed, wireframed, and coded a home page modal that displays
          dozens of data visualizations and product design features to
          streamline the workflow of AETC leadership and facility managers.
        </p>
        <p className='paragraph'>
          In practice, this is how it works: The test tracking modal resides on
          the home page, which prominently features a calendar that indicates
          the various statuses of all wind tunnel tests for that month. When
          someone clicks on a specific test on the calendar, the modal opens and
          displays wind tunnel test information pulled from that specific test
          uid and year.
        </p>
        <p className='paragraph'>
          The modal consists of dozens of data visualizations and product design features
          designed to streamline the workflow of AETC leadership and facility
          managers. Essentially, the test tracking modal serves as an easily
          accessible way for any user (a facility member, center integration
          manager, AETC leader, or D&A team member) to find the information they
          seek on any individual wind tunnel test.]
        </p>

        <img
          style={{ maxWidth: '100%', margin: '1rem 0' }}
          src={aetchome}
          alt='NASA Aerosciences Evaluation and Test Capabilities Portfolio Office home page'
        />
      </div>
      <Footer />
    </>
  );
};

export default WorksampleNASAWindTunnelTestTracking;
