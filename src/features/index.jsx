import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import NavBar from './components/NavBar/NavBar';
import TodoList from './components/TodoList/TodoList';
import './styles.scss';

function TodoFeatures() {
	const [mode, setMode] = useState('');
	const todoList = useSelector((state) => state.todo.list);
	const dispatch = useDispatch();

	const handleSubmit = (value) => {
		dispatch({
			type: 'ADD_TODO',
			payload: {
				id: todoList.length - 1 + 1,
				title: value.todo,
				status: 'active',
			},
		});
	};

	localStorage.setItem('list', JSON.stringify(todoList));

	return (
		<div className='todo-Feature'>
			<h2 className='title color-darkslategray d-flex d-flex-center'>
				#todo
			</h2>
			<NavBar modeCurrent={setMode} />
			{mode !== 'completed' && <AddTodo handlesubmit={handleSubmit} />}
			<TodoList todoList={todoList} mode={mode} />
		</div>
	);
}

export default TodoFeatures;
