import React from 'react';
import Weather from './Weather.js';

const Country = ({ Country }) => {
	return (
		<div>
			{Country.map((c, i) => (
				<div key={i}>
					<h1>{c.name}</h1>
					Capital: {c.capital}
					<br />
					Population: {c.population}
					<h3>Languages:</h3>
					{c.languages.map((lang, i) => (
						<div key={i}>
							<ul>
								<li>{lang.name}</li>
							</ul>
						</div>
					))}
					<img style={{ width: '250px', height: '200px' }} src={c.flag} alt="Flag" />
					<h3>Weather in {c.capital}</h3>
					<Weather Capital={c.capital} />
				</div>
			))}
		</div>
	);
};

export default Country;
