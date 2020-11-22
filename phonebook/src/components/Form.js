import React from 'react';

const Form = ({ addName, handleNameChange, handleNumberChange, NewName, NewNumber }) => {
	return (
		<div>
			<h2>Add New Contact</h2>
			<form onSubmit={addName}>
				<div>
					Name:{' '}
					<input
						name="name"
						value={NewName}
						placeholder="name"
						onChange={handleNameChange}
					/>
					&nbsp;&nbsp;Number:{' '}
					<input
						name="number"
						value={NewNumber}
						placeholder="number"
						onChange={handleNumberChange}
					/>
					<br />
					<br />
					<button type="submit">Add</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
