import React from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

function Todo({ data, mode }) {
	const dispatch = useDispatch();

	const handleChange = (evt) => {
		evt.target.checked &&
			dispatch({
				type: 'UPDATE_TODO',
				payload: {
					id: data.id,
					title: data.title,
					status: 'completed',
				},
			});

		evt.target.checked === false &&
			dispatch({
				type: 'UPDATE_TODO',
				payload: {
					id: data.id,
					title: data.title,
					status: 'active',
				},
			});
	};

	const handleRemove = (id) => {
		dispatch({
			type: 'REMOVE_TODO',
			payload: id,
		});
	};

	return (
		<div className='d-flex '>
			{mode === 'completed' && data.status === 'completed' && (
				<div className='completed-control d-flex'>
					<div className='d-flex'>
						<input
							className='check-box'
							type='checkbox'
							defaultChecked={data.status === 'completed' && true}
							onClick={handleChange}
							id={data.id}
						/>
						<p className='fw-500 title-info'>{data.title}</p>
					</div>

					<span
						className='btn-remove'
						onClick={() => handleRemove(data.id)}
						className='material-icons-round'
					>
						delete_outline
					</span>
				</div>
			)}

			{mode === 'active' && data.status === 'active' && (
				<>
					<input
						className='check-box'
						type='checkbox'
						defaultChecked={data.status === 'completed' && true}
						onClick={handleChange}
						id={data.id}
					/>
					<p className='fw-500 title-info'>{data.title}</p>
				</>
			)}

			{mode === 'all' && (
				<>
					<input
						className='check-box '
						id={data.id}
						type='checkbox'
						defaultChecked={data.status === 'completed' && true}
						onClick={handleChange}
					/>
					<p className='fw-500 title-info'>{data.title}</p>
				</>
			)}
		</div>
	);
}

export default Todo;
