import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

// import pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
