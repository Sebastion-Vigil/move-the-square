import React from 'react';

import Game from './components/Game.js';

import './css/App.css';

class App extends React.Component {
    render() {
        return (
          <div className="App">
            <Game/>
          </div>
        )
    }
}

export default App;