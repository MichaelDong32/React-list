import React from 'react'
import { render } from 'react-dom'

export default class TodosList extends React.Component {
	render () {
		return (
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Action</th>
					</tr>
				</thead>
			</table>
		);
	}
}