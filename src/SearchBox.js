import React from 'react';

const SearchBox =({searchfield,searchange})=>{
	return(
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue'
			type ='search'
			 placeholder='search robots'
			 onChange={searchange}
			/>
		</div>	
	)
}
export default SearchBox;
