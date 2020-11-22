import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Weather = ({ Capital }) => {
	const [ Weather, setWeather ] = useState([]);
	const api_key = process.env.REACT_APP_API_KEY;
	const params = {
		access_key: api_key,
		query: 'Abuja'
	};

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('https://api.weatherstack.com/current', { params });
			setWeather(response.data);
		}
		fetchData();
	});

	return <div>Data...</div>;
};

export default Weather;
