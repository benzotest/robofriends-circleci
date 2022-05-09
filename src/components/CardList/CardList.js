import React from 'react';
import Card from '../Card/Card.js'

export const CardList = ({robots}) => {
	return(
		<div>
			{
				robots.map((user,index)=>{
					return(
						<Card id={robots[index].id} 
						name={robots[index].name} 
						email={robots[index].email}
						key={robots[index].id}/>
					)
				})
			}
		</div>
	)
}