import React from 'react';
import './App.css';
import Home from './features/Home/Home';
import Header from './features/Header/Header';
import SubReddits from './features/SubReddits/SubReddits';

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
    </>
  );
}

export default App;
