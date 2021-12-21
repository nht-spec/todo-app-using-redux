import React, { useState } from 'react';
import './styles.scss';
NavBar.propTypes = {};

function NavBar({ modeCurrent }) {
	const [mode, setMode] = useState('all');

	if (modeCurrent) {
		modeCurrent && modeCurrent(mode);
	}
	return (
		<div>
			<div className='nav-bar-control d-flex'>
				<div className='mode-option'>
					<p
						onClick={() => setMode('all')}
						className={'color-darkslategray modeText'}
					>
						All
					</p>

					<div className={mode === 'all' ? 'border-active' : ''} />
				</div>

				<div className='mode-option'>
					<p
						onClick={() => setMode('active')}
						className='color-darkslategray modeText'
					>
						Active
					</p>
					<div className={mode === 'active' ? 'border-active' : ''} />
				</div>

				<div className='mode-option'>
					<p
						onClick={() => setMode('completed')}
						className='color-darkslategray modeText'
					>
						Completed
					</p>
					<div
						className={mode === 'completed' ? 'border-active' : ''}
					/>
				</div>
			</div>
			<div className='border' />
		</div>
	);
}

export default NavBar;
