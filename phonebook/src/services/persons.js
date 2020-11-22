import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
	const request = await axios.get(baseUrl);
	const nonExisting = {
		name: 'Bashir Sidi',
		number: '+2348067753836',
		id: 1
	};
	//return request.then((response) => response.data.concat(nonExisting));
	return request.data.concat(nonExisting);
};

const create = async (newObject) => {
	const response = await axios.post(baseUrl, newObject);
	return response.data;
};

const update = async (id, newObject) => {
	const response = axios.put(`${baseUrl}/${id}`, newObject);
	return response.data;
};

const deleteData = async (id) => {
	const response = await axios.delete(`${baseUrl}/${id}`);
	return response.data;
};

export default { getAll, create, deleteData, update };
