import React from "react";

export default function UserInfo(props) {
	return (
		<div>
			<div style={{display: 'inline-block'}}>
				<img src={props.avatar_url} alt="avatar" width='180'/>
			</div>
			<div style={{display: 'inline-block'}}>
				<h2>Login: {props.login}</h2>
				<h2>Name: {props.name}</h2>
				<h2>Followers: {props.followers}</h2>
			</div>
		</div>
	);
}