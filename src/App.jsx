import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';
import SubReddits from './features/SubReddits/SubReddits';
import Blurb from './features/blurb/Blurb';
import Footer from './features/footer/footer';

function App() {
  return (
    <>
      <Header />
      <aside>
        <SubReddits />
      </aside>
      <main>
        <Home />
        <Footer />
      </main>
      <aside>
        <Blurb />
      </aside>
    </>
  );
}

export default App;
