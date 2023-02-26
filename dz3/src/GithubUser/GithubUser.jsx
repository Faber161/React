import React, { useState } from 'react';
import SearchForm from './SearchForm';
import UserList from './UserList';

export default function GithubUser() {
	const [usersArr, setUsersArr] = useState([]);
	const updateUser = user => {
		setUsersArr([...usersArr, user]);
	};

	return (
		<div>
			<SearchForm onSubmit={updateUser} />
			<UserList users={usersArr} />
		</div>
	);
}