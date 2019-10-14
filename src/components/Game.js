import React from 'react';

import Square from './Square.js';
// import TestStrip from './TestStrip.js';
// import MarioStrip from './MarioStrip.js';
import Space from './Space.js';
import GamePad from './GamePad.js';

import '../css/Game.css';

class Game extends React.Component {
	state = {
		timer: undefined,
		active: false,
		squarePosition: {
			top: '40vh',
			left: '15vw'
		},
		gamePosition: {
			right: '0%'
		}
	};
	
	// gamePosition: 0% - 600%
    startGame = () => {
      this.setState({
		  timer: setInterval(() => {
			  let gamePos = this.state.gamePosition.right;
			  gamePos = parseInt(gamePos) >= 600 ? '0%' : gamePos;
			  gamePos = (parseInt(gamePos) + 1).toString() + '%';
			  gamePos = {right: gamePos};
			  this.setState({
				  gamePosition: gamePos
			  });
		  }, 90)
	  })
	}

	stopGame = () => {
		clearInterval(this.state.timer);
	}

	toggleGame = () => {
		console.log("Square pos: ", this.state.squarePosition);
		console.log("Game pos: ", this.state.gamePosition);
		let gameState = this.state.active;
		if (gameState) {
			gameState = false;
			this.stopGame();
		} else {
			gameState = true;
            this.startGame();
		}
		this.setState({
			active: gameState
		})
	}

	updateSquarePosition = (newPosition) => {
		// need to fix bug in dPadHandler()
		this.setState({
			squarePosition: newPosition
		});
	}


	render() {
		return (
			<div className="game" style={this.state.gamePosition}>
				{/* <TestStrip />
				<MarioStrip /> */}
				<Space />
				<Square style={this.state.squarePosition} />
				<GamePad
				    SquarePosition={this.state.squarePosition}
					updateSquarePosition={this.updateSquarePosition}
					toggle={this.toggleGame}
				/>
			</div>
		);
	}
}

export default Game;
