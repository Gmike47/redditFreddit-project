import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';
import SubReddits from './features/SubReddits/SubReddits';
import Blurb from './features/blurb/Blurb';

function App() {
  return (
    <>
      <Header />
      <aside>
        <SubReddits />
      </aside>
      <main>
        <Home />
      </main>
      <aside>
        <Blurb />
      </aside>
    </>
  );
}

export default App;
