import React from 'react';
import './Scroll.css';

export const Scroll = (props)=>{
	return(
		<div style={{overflowY: 'scroll',
		border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
	)
}