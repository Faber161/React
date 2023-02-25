import React, { useState } from 'react';

export default function EventForm(props) {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [comm, setComm] = useState('');
	
	const nameChange = event => {
		setName(event.target.value);
	};
	
	const descChange = event => {
		setDesc(event.target.value);
	
	};
	const commChange = event => {
		setComm(event.target.value);
	};
	
	const handlerSubmit = event => {
		event.preventDefault();
		const newEvent = {
			name: `${name}`,
			description: `${desc}`,
			comment: `${comm}`,
		}
		props.onSubmit(newEvent);
	};

	return (
		<form className='form' onSubmit={handlerSubmit}>
			<input type="text" required placeholder='Введите имя события' value={name} onChange={nameChange} />
			<textarea required placeholder='Введите описание события' value={desc} onChange={descChange} />
			<input type="text" required placeholder='Введите комментарий к событию' value={comm} onChange={commChange} />
			<input className='button' type="submit" value="Добавить" />
		</form>
	);
}