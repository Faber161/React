import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";


export default function Spectacle() {
	const eventList = [
		{
			id: 1,
			name: "Примадонны",
			description: "Обаятельная старушка-миллионерша разыскивает двух потерявшихся в детстве племянниц, чтобы оставить им в наследство свои миллионы. Пока не установлены личности настоящих родственниц, в дело вступают мнимые – два молодых безработных красавчика-актера, ради денег готовые даже на перевоплощение в девушек. Но эта игра будет стоит свеч только до тех пор, пока в дело не вмешается настоящая любовь.",
		},
		{
			id: 2,
			name: "Тихий Дон",
			description: "Режиссер Геннадий Шапошников сумел создать уникальную постановку. Интересны его трактовки героев. Мятущуюся душу Григория он высвечивал на протяжении всего спектакля — от первой до последней минуты. Артист Роман Гайдамак вдохнул жизнь в этот образ, и в результате получился персонаж необычный, невероятно трогательный, страдающий так, что глядя на него, зритель замирал и чувствовал дрожь в теле. Прекрасна Аксинья (Екатерина Березина), выстрадавшая любовь к Григорию «за всю жизнь горькую». Потрясающей силой обладают характеры стариков — деда Гришаки (народный артист РСФСР Игорь Богодух), Мирона Григорьевича (Олег Ширшин), Лукиничны (Юлия Борисова), Пантелея Прокофьевича (Юрий Добринский) и Ильиничны (народная артистка РФ Наталья Гординская). Красивый и сильный образ бабуни воплотила народная артистка РФ Татьяна Шкрабак. Сочно и ярко сыграли все персонажи спектакля — для каждого режиссер нашел свою нишу в теле спектакля.",
		},
		{
			id: 3,
			name: "Люкс №13",
			description: "Рей Куни — автор более двадцати комедий, которые переведены на сорок языков и шли на театральных подмостках многих стран. Посчитано, что во всём мире на его пьесы было продано около ста миллионов билетов. Люкс № 13 — пьеса, восторженно встреченная британской критикой, была удостоена премии имени Лоуренса Оливье как лучшая английская комедия 1991 года. Оглушительный смех зрителей вызывает и остроумный английский юмор, и невероятные переделки, в которые попадают персонажи, вовлекаемые главным героем, незадачливым ловеласом, и по совместительству депутатом парламента.",
		},
	]

	const [events, setEventsArr] = useState(eventList);
	const updateEvent = update => {
		setEventsArr([...events, update]);
	};

	return (
		<ul className="list">
			<EventList events={events}/>
			<EventForm onSubmit={updateEvent}/>
		</ul>
	);
};