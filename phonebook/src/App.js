import React, { useState, useEffect } from 'react';
import Search from './components/Search.js';
import Form from './components/Form.js';
import Phonebook from './components/Phonebook.js';
import personService from './services/persons.js';
import Notification from './components/Notification.js';
const App = () => {
	const [ NewName, setNewName ] = useState('');
	const [ NewNumber, setNewNumber ] = useState('');
	const [ Query, setQuery ] = useState('');
	const [ Persons, setPersons ] = useState([]);
	const [ ErrorMessage, setErrorMessage ] = useState(null);
	//===========================================================================
	async function fetchData() {
		const initialPersons = await personService.getAll();
		setPersons(initialPersons);
	}
	useEffect(() => {
		fetchData();
	}, []);

	//===========================================================================

	const handleNameChange = (event) => {
		setNewName((event.target.name = event.target.value));
	};

	const handleQueryChange = (event) => {
		setQuery((event.target.search = event.target.value));
	};

	const handleNumberChange = (event) => {
		setNewNumber((event.target.number = event.target.value));
	};

	//===========================================================================

	const addName = async (event) => {
		event.preventDefault();
		const fName = Persons.find((p) => p.name === NewName);
		const fNumber = Persons.find((p) => p.number === NewNumber);
		if (NewName !== '' && NewNumber !== '') {
			const newObject = {
				name: NewName,
				number: NewNumber,
				id: Persons.length + 1
			};
			if (fName || fNumber) {
				const result = window.confirm(
					`${NewName} is already added to phonebook, replace the old number with a new one ?`
				);
				if (result) {
					const pers = Persons.filter(
						(p) => p.name === NewName || p.number === NewNumber
					);

					pers.map((p) => {
						const newObject = {
							name: p.name,
							number: NewNumber,
							id: p.id
						};
						return personService.update(p.id, newObject);
					});
					fetchData();
				}
			} else {
				const data = await personService.create(newObject);
				setErrorMessage(`Added ${data.name}.`);
				setTimeout(() => {
					setErrorMessage(null);
				}, 5000);
				setPersons(Persons.concat(data));
			}
		}
		setNewNumber('');
		setNewName('');
	};

	//==============================================================================

	const handleClick = (person) => {
		const result = window.confirm(`Delete ${person.name} ?`);
		if (result) {
			personService.deleteData(person.id);
			fetchData();
		}
	};

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={ErrorMessage} />
			<Search handleQueryChange={handleQueryChange} Query={Query} />
			<br />
			<br />
			<Form
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
				NewName={NewName}
				NewNumber={NewNumber}
				addName={addName}
			/>
			<Phonebook Persons={Persons} Query={Query} handleClick={handleClick} />
		</div>
	);
};

export default App;
