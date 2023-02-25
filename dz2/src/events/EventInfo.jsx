import React, { useState } from "react";

export default function EventInfo(props) {
	const [display, setDisplay] = useState('none');	
	const handlerClick = () => {
		if (display === 'none') setDisplay('block')
		else  setDisplay('none');
	}

	function comment(data) {
		if(data) return <p><strong>Ваш комментарий:</strong> {props.comment}</p>;
	}

	return (
		<div className="list__card">
			<div className="list__info">
				<h2 className="list__name" onClick={handlerClick}>{props.name}</h2>
				<div style={{ display: `${display}` }}>
					<p>{props.description}</p>
					<p>{comment(props.comment)}</p>
				</div>
			</div>
		</div>
	);
}