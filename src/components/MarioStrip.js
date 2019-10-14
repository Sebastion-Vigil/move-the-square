import React from 'react';

import '../css/MarioStrip.css';

class MarioStrip extends React.Component {
    render() {
        return (
            <div className="mario-strip">
              <div className="mario-section first"></div>
              <div className="mario-section second"></div>
              <div className="mario-section third"></div>
              <div className="mario-section first"></div>
            </div>
        )
    }
}

export default MarioStrip;