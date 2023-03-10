import React, { useState } from "react";
import EventList from "./EventList";
import EventForm from "./EventForm";


export default function Concert() {
	const eventList = [
		{
			id: 1,
			name: "Григорий Лепс",
			description: "Григорий Лепс — это брутальность и мужественность всей российской эстрады. Его голос поражает, а концерты дарят потрясающие эмоции, ведь каждый раз он поёт, как в последний: на нерве, с душой и сердцем. Он — кумир женщин и сильных духом мужчин. Лепс поёт о том, что близко и понятно каждому вне зависимости от пола и возраста, социального положения и привычек. Любая новая работа Григория становится настоящим событием: меняются исполнение, музыкальное сопровождение, эмоциональное состояние. Каждое выступление Григория Лепса — это настоящий подарок поклонникам. Он экспериментирует с жанрами и стилями, у него есть чувство хита, и цена тому — обожание слушателей.",
		},
		{
			id: 2,
			name: "MакSим",
			description: "Певица МакSим анонсировала большой весенний тур. Весной этого года многих поклонников певицы МакSим ожидает приятный сюрприз: она отправится в большой концертный тур «Я буду жить». В его рамках певица даст концерты в крупнейших городах нашей страны — Санкт-Петербурге, Нижнем Новгороде, Казани и многих других. Кроме того, МакSим посетит столицу Беларуси — Минск, а так же Израиль — Тель-Авив. 2022 год стал для МакSим новым ярким стартом после болезни, вынудившей её на время прервать творческую деятельность. В нём уже было многое — успешная работа с Егором Кридом, которая долгие месяцы держалась в топе всех цифровых площадок, сильный дуэт с талантливым Димой Биланом, выступление на Кубке России по футболу, где 70 тысяч человек пели с ней в унисон, громкие появления на музыкальных премиях страны.",
		},
		{
			id: 3,
			name: "SHAMAN",
			description: "SHAMAN — популярный российский певец, поэт и композитор. За плечами артиста три музыкальных образования, включая РАМ им. Гнесиных, и многолетний опыт сценической деятельности. SHAMAN самостоятельно продюсирует свое творчество и является автором слов и музыки всех своих песен. SHAMAN добился популярности благодаря интернету. Его песня «Встанем», выпущенная 23 февраля 2022 года, попала в тренды соцсетей и молниеносно стала народным хитом. На данный момент видео на песню набрали в соцсетях артиста более 35 млн просмотров. 22 июля музыкант выпустил рок-манифест «Я русский», который произвел в интернете эффект разорвавшейся бомбы. На протяжении 2 недель с момента релиза, клип на песню занимает первое место в российских трендах и чартах YouTube и собрал за это время более 7 млн просмотров, полмиллиона лайков и 100 тысяч восторженных комментариев. Также ролик вошел в глобальный хит-парад YouTube «100 лучших клипов мира».",
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