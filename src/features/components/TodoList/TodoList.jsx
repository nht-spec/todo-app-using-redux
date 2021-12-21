import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Todo from '../Todo/Todo';
import './styles.scss';

function TodoList({ todoList, mode }) {
	const [isCompleted, setIsCompleted] = useState(false);
	const dispatch = useDispatch();

	const handleRemoveAll = () => {
		dispatch({
			type: 'REMOVE_All_TODO',
			payload: 'completed',
		});
	};

	useEffect(() => {
		const newArr = todoList.filter((data) => data.status === 'completed');
		newArr.length !== 0 && setIsCompleted(true);
		newArr.length === 0 && setIsCompleted(false);
	}, [todoList]);

	return (
		<div style={{ marginTop: '32px' }}>
			{todoList.map((data) => (
				<div key={data.id}>
					<Todo data={data} mode={mode} />
				</div>
			))}
			{mode === 'completed' && isCompleted && (
				<button className='btn-del fw-600' onClick={handleRemoveAll}>
					<span className='material-icons-round'>delete_outline</span>
					delete all
				</button>
			)}
		</div>
	);
}

export default TodoList;
