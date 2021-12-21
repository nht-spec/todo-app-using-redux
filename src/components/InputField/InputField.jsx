import React from 'react';
import { Controller } from 'react-hook-form';
import './styles.scss';
function InputField({ name, form, errors, mess }) {
	return (
		<Controller
			name={name}
			control={form.control}
			rules={{
				required: {
					value: true,
					message: mess,
				},
			}}
			render={({ field: { onChange, onBlur, value } }) => (
				<input
					className='input-field fw-400'
					onBlur={onBlur}
					onChange={onChange}
					value={value}
					placeholder='add details'
				/>
			)}
		/>
	);
}

export default InputField;
