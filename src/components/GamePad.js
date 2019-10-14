import React from 'react';

import '../css/GamePad.css';

class GamePad extends React.Component {
	state = {
		timer: undefined,
		buttonDisplay: 'Start'
	};

	update = update => {
		this.props.updateSquarePosition(update);
	};

	handleStartButton = () => {
		let display = this.state.buttonDisplay === 'Start' ? 'Stop' : 'Start';
		this.props.toggle();
		this.setState({
			buttonDisplay: display
		})
	};

	dPadHandler = d => {
		this.setState({
			timer: setInterval(() => {
				let t = this.props.SquarePosition.top;
				let l = this.props.SquarePosition.left;
				// will need some serious refactoring
				// checks if out of screen boundaries
		        if (d === 'u' && parseInt(this.props.SquarePosition.top) <= 5) return;
		        if (d === 'd' && parseInt(this.props.SquarePosition.top) >= 80) return;
		        if (d === 'l' && parseInt(this.props.SquarePosition.left) <= 15) return;
		        if (d === 'r' && parseInt(this.props.SquarePosition.left) >= 89) return;
				// a switch case comes to mind
				if (d === 'u') {
					t = (parseInt(t) - 1).toString() + 'vh';
				} else if (d === 'd') {
					t = (parseInt(t) + 1).toString() + 'vh';
				} else if (d === 'l') {
					l = (parseInt(l) - 1).toString() + 'vw';
				} else if (d === 'r') {
					l = (parseInt(l) + 1).toString() + 'vw';
				}
				this.update({
					top: t,
					left: l
				})
			}, 25),
		});
	};

	stopTimer = () => {
		clearInterval(this.state.timer);
	};

	render() {
		return (
			<div className="controller">
				<div className="d-pad">
					<div className="arrow-column left">
						<div className="d-button">
							<div
								className="arrow-left"
								onMouseDown={() => this.dPadHandler('l')}
								onMouseUp={() => this.stopTimer()}
								onTouchStart={() => this.dPadHandler('l')}
								onTouchEnd={() => this.stopTimer()}
							></div>
						</div>
					</div>
					<div className="arrow-column center">
						<div className="d-button">
							<div
								className="arrow-up"
								onMouseDown={() => this.dPadHandler('u')}
								onMouseUp={() => this.stopTimer()}
								onTouchStart={() => this.dPadHandler('u')}
								onTouchEnd={() => this.stopTimer()}
							></div>
						</div>
						<div className="d-button">
							<div
								className="arrow-down"
								onMouseDown={() => this.dPadHandler('d')}
								onMouseUp={() => this.stopTimer()}
								onTouchStart={() => this.dPadHandler('d')}
								onTouchEnd={() => this.stopTimer()}
							></div>
						</div>
					</div>
					<div className="arrow-column right">
						<div className="d-button">
							<div
								className="arrow-right"
								onMouseDown={() => this.dPadHandler('r')}
								onMouseUp={() => this.stopTimer()}
								onTouchStart={() => this.dPadHandler('r')}
								onTouchEnd={() => this.stopTimer()}
							></div>
						</div>
					</div>
				</div>
				<div className="start-button" onClick={this.handleStartButton}>
					{this.state.buttonDisplay}
				</div>
			</div>
		);
	}
}

export default GamePad;