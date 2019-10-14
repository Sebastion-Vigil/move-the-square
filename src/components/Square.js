import React from 'react';

import '../css/Square.css';

class Square extends React.Component {
    render() {
        return (
            <div 
              className="square"
              style={this.props.style}
            >
            </div>
        )
    }
}

export default Square;