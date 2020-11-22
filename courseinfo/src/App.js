import React from 'react';

const Header = ({ course }) => {
	return (
		<div>
			<h2>{course.name}</h2>
		</div>
	);
};

const Total = ({ course }) => {
	const sum = course.parts.map((part) => part.exercises).reduce((a, b) => a + b);
	return <h4>Total of {sum} excercises</h4>;
};

const Part = ({ part }) => {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	);
};

const Content = ({ course }) => {
	return <div>{course.parts.map((part, i) => <Part key={i} part={part} />)}</div>;
};

const Course = (props) => {
	return (
		<div>
			{props.courses.map((course, i) => (
				<div key={i}>
					<Header course={course} />
					<Content course={course} />
					<Total course={course} />
				</div>
			))}
		</div>
	);
};

const App = () => {
	const courses = [
		{
			name: 'Half Stack application development',
			parts: [
				{
					name: 'Fundamentals of React',
					exercises: 10
				},
				{
					name: 'Using props to pass data',
					exercises: 7
				},
				{
					name: 'State of a component',
					exercises: 14
				},
				{
					name: 'Redux',
					exercises: 11
				}
			]
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	];

	return (
		<div>
			<h1>Web development curriculum</h1>
			<Course courses={courses} />
		</div>
	);
};

export default App;
