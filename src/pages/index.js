import * as React from 'react';
import Header from './header.js';
import Home from './home.js';
import Footer from './footer.js';
import '../styles/global.less';

const IndexPage = () => {
  return (
    <>
      <div className='page-container'>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
