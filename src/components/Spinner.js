import React from 'react'
import logo from '../resources/img/spinner.gif';

export const Spinner = props => {

	const visibilityClassName = props.visible ? 'spinner-visible' : 'spinner-hidden';

	return (
		<div id='spinner-wrapper' className={visibilityClassName}>
			<img id='spinner-img' alt='Spinner' src={logo}/>
		</div>
	);
}