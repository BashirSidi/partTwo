import React from 'react';

const Search = ({ Query, handleQueryChange }) => {
	return (
		<div>
			<strong>Filter shown with:</strong> &nbsp;<input
				name="search"
				type="text"
				onChange={handleQueryChange}
				value={Query}
				placeholder="Filter"
			/>
		</div>
	);
};

export default Search;
