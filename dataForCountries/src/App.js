import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country.js';
const App = () => {
	const [ Countries, setCountries ] = useState([]);
	const [ FindCountries, setFindCountries ] = useState('');
	const [ View, setView ] = useState(false);
	const [ IsLoading, setIsLoading ] = useState(false);

	useEffect(
		() => {
			async function fetchData() {
				const response = await axios.get(
					`https://restcountries.eu/rest/v2/name/${FindCountries}`
				);
				setCountries(response.data);
			}
			if (IsLoading) {
				fetchData();
			}
		},
		[ FindCountries, IsLoading ]
	);

	const handleCountriesChange = (event) => {
		setFindCountries((event.target.fCountries = event.target.value));
		setView(false);
		setIsLoading(true);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFindCountries('');
	};

	const handleClick = (c) => {
		setCountries([ c ]);
		setView(true);
	};
	return (
		<div>
			<h1>Data For Countries</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="findCountries">Find countries:</label>
				<input
					type="text"
					name="fCountries"
					value={FindCountries}
					placeholder="find countries"
					onChange={handleCountriesChange}
				/>
			</form>
			<div>
				{Countries.length > 10 ? (
					'Too many matches, specify another filter.'
				) : Countries.length === 1 || View === true ? (
					<Country Country={Countries} />
				) : (
					Countries.map((c, i) => (
						<div key={i}>
							<ul>
								<li>
									{c.name} <button onClick={() => handleClick(c)}>Show</button>
								</li>
							</ul>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default App;
