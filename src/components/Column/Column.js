import React from 'react';
import './Column.scss';

import Task from 'components/Task/Task';

const Column = () => {
	return (
		<div className="column">
			<header>Title</header>
			<ul className="task-list">
				<Task />
				<li className="task-item">Add something</li>
				<li className="task-item">Add something</li>
				<li className="task-item">Add something</li>
				<li className="task-item">Add something</li>
				<li className="task-item">Add something</li>
			</ul>
			<footer>Add another card</footer>
		</div>
	);
};

export default Column;
