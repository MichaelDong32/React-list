import React from 'react';
import TodosList from './todo-list';

const todos = [
	{
		task: 'make dinner',
		isCompleted: false
	},
	{
		task: 'do dishes',
		isCompleted: true

	}
	];

	//create a list from which to render - are these states?

export default class App extends React.Component {
	render () {
		return (
			<div>
				<h1> React toDos app</h1>
				<TodosList />
			</div>
		);
	}
}