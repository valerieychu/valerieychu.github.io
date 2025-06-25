import * as React from 'react';
import Bio from './home.js';
import Footer from './footer.js';
import '../styles/global.less';

const IndexPage = () => {
  return (
    <>
      <div className='page-container'>
        <main>
          <Bio />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
