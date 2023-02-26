import React, { useState } from 'react';
import axios from 'axios';

export default function SearchForm(props) {
	const [userName, setUserName] = useState('');
	const handlerChange = event => {
		setUserName(event.target.value);
	};
	const handlerSubmit = async event => {
		event.preventDefault();
		const query = `https://api.github.com/users/${userName}`;

		try {
			let resp = await axios.get(query);
			props.onSubmit(resp.data);
		} catch(error) {
			console.log(error);
			alert('User Not Found');
		}
		
	};

	return (
		<form onSubmit={handlerSubmit}>
			<input type="text" style={{ margin: "15px" }} required placeholder='Input user name' value={userName} onChange={handlerChange} />
			<input type="submit" value="Search GitHub user" />
		</form>
	);
}