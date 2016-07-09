import React from 'react';
import TodosList from './todo-list';
import CreateTodos from './create-todos'

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
	constructor(props){
		super(props);

		this.state = {
			todos
		};
	}

	render () {
		return (
			<div>
				<h1> React toDos app</h1>
				<CreateTodos createTask={this.createTask.bind(this)} />
				<TodosList 
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
			  />
			</div>
		);
	}

	toggleTask(task) {
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos});
	}

	createTask(task) {
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos });
	}
}