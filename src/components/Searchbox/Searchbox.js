import React from 'react';

export const Searchbox = ({searchChange}) =>{
	return(
		<div>
			<input type='search' 
			placeholder="search robots"
			className={`pa3 ba b--green bg-lightest-blue`}
			onChange={searchChange}
			/>
		</div>
	)
}



