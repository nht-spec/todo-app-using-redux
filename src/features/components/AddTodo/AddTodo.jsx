import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/InputField/InputField';
import './styles.scss';

function AddTodo({ handlesubmit }) {
	const form = useForm({
		defaultValues: {
			todo: '',
		},
	});

	const handleSubmit = (value) => {
		handlesubmit && handlesubmit(value);
		form.reset();
	};

	return (
		<form onSubmit={form.handleSubmit(handleSubmit)}>
			<div className='add-new-todo d-flex'>
				<div className='input-todo d-flex'>
					<InputField
						name='todo'
						form={form}
						errors={form.formState.errors}
						mess={'Todo is required'}
					/>
				</div>
				<button className='btn-add fw-600' type='submit'>
					Add
				</button>
			</div>
			{form.formState.errors.todo?.message && (
				<p className='err-mess fw-600 '>
					{form.formState.errors.todo.message}
				</p>
			)}
		</form>
	);
}

export default AddTodo;
