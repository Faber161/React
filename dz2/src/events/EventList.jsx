import React from 'react';
import EventInfo from './EventInfo';

export default function EventList(props) {
	return (
		<>
			{props.events.map(event => (
				<EventInfo key={event.id} {...event} />
			))}
		</>
	);
}