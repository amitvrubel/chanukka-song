import React from 'react';

import './App.css';
import {Menorah} from './components/background/menorah';
import {ChanukkaContainer} from './components/chanukka-container/chanukka-container';

function App() {
  return (
    <div className="App">
      <Menorah/>
      <ChanukkaContainer/>
    </div>
  );
}

export default App;
