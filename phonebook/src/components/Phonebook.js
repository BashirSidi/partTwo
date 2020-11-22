import React from 'react';

const Phonebook = ({ Persons, Query, handleClick }) => {
	return (
		<div>
			<h2>Numbers</h2>
			<div>
				{Query !== '' ? (
					Persons.filter((person) => person.name === Query).map((filteredPerson, i) => (
						<div key={i}>
							{filteredPerson.name}: {filteredPerson.number}
						</div>
					))
				) : (
					<div>
						{Persons.map((person, i) => (
							<div style={{ lineHeight: '40px' }} key={i}>
								{person.name}: {person.number}&nbsp;&nbsp;
								{<button onClick={() => handleClick(person)}>delete</button>}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Phonebook;
