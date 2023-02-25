import './App.css';
import React, { useState } from 'react';

// ================== Доп задание с урока =========================

function Citate(props) {
	const [currentValue, setCurrentValue] = useState(props.startVal);

	const btShow = () => {
		setCurrentValue('display');
	};

	const btClose = () => {
		setCurrentValue('none');
	};

	return (
		<div className='citate'>
		<button className='citate__button' onClick={btShow}>Показать цитату</button>
		<button className='citate__button' onClick={btClose}>Скрыть цитату</button>
		<p className={currentValue}>"Я не терпел поражений. Я просто нашел 10000 способов, которые не работают" - Томас Эдисон</p>
		</div>);
	}

// ================= Задание 1 =====================

function Album() {

	let album = {
		title: `Жить в кайф`,
		artist: `Макс корж`,
		year: 2013,
		genre: `русский рэп`,
		img: `./1.jpg`,
		list: ['Здоровый сон', 'Стань', 'Мотылёк', 'За тобой', 'Эмигрант', 'Тралики', 'Жить в кайф', 'Нет новостей', 'Сеть', 'Неважно', 'Эндорфин', 'Тает дым', 'Зелёный чемодан', 'Нет никаких правил', 'Время'],
	}

	let {title, artist, year, genre, img, list} = album;

	return (
		<section className='album'>
			<div className="album__data">
				<div className="album__img">
					<img src={img} />
				</div>
				<div className="album__info">
					<p className='album__suptitle low'>Альбом</p>
					<h1 className="album__title">{title}</h1>
					<h2 className='album__artist'>{artist}</h2>
					<p className='album__year low'>{year} {genre}</p>
				</div>
			</div>
			<ol className="album__list">
				{list.map(list => (
					<li key={list}>{list}</li>
				))}
			</ol>
		</section>
	)
};

// ================== Задание 2 =========================

function PersInf(props) {

	const [firstName, setFirstName] = useState(props.firstName);
	const [name, setName] = useState(props.name);
	const [lastName, setLastName] = useState(props.lastName);
	const [age, setAge] = useState(props.age);
	const [mail, setMail] = useState(props.mail);
	const [address, setAddress] = useState(props.address);
	const [hardSkills, setHardSkills] = useState(props.hardSkills);

	 const reset = event => {
		setFirstName(props.firstName);
		setName(props.name);
		setLastName(props.lastName);
		setAge(props.age);
		setMail(props.mail);
		setAddress(props.address);
		setHardSkills(props.hardSkills);

		event.preventDefault();
	};

	const handlerChanged = event => {
		const target = event.target;

		switch (target.name) {
			case 'firstName':
				setFirstName(target.value);
				break;
			case 'name':
				setName(target.value);
				break;
			case 'lastName':
				setLastName(target.value);
				break;
			case 'age':
				setAge(target.value);
				break;
			case 'email':
				setMail(target.value);
				break;
			case 'adress':
				setAddress(target.value);
				break;
			case 'skills':
				setHardSkills(target.value);
				break;
		}
	};

	return (
		<section className='personal'>
			<form action="" method="get" className="form">
				<div className="form__item">
					<label htmlFor="firstName" className='form__label'>Фамилия: </label>
					<input type="text" name="firstName" id="firstName" value={firstName} onChange={handlerChanged} className='form__input'/>
				</div>
				<div className="form__item">
					<label htmlFor="name" className='form__label'>Имя: </label>
					<input type="text" name="name" id="name" value={name} onChange={handlerChanged} className='form__input'/>
				</div>
				<div className="form__item">
					<label htmlFor="lastName" className='form__label'>Отчество: </label>
					<input type="text" name="lastName" id="lastName" value={lastName} onChange={handlerChanged} className='form__input'/>
				</div>
				<div className="form__item">
					<label htmlFor="age" className='form__label'>Возраст: </label>
					<input type="number" name="age" id="age" value={age} onChange={handlerChanged} className='form__input'/>
				</div>
				<div className="form__item">
					<label htmlFor="email" className='form__label'>Почта: </label>
					<input type="email" name="email" id="email" value={mail} onChange={handlerChanged} className='form__input'/>
				</div>
				<div className="form__item">
					<label htmlFor="adress" className='form__label'>Адрес: </label>
					<input type="text" name="adress" id="adress" value={address} onChange={handlerChanged} className='form__input'/>
				</div>
				<div className="form__item">
					<label htmlFor="skills" className='form__label'>Навыки: </label>
					<textarea name="skills" id="skills" value={hardSkills} onChange={handlerChanged} className='form__textarea'></textarea>
				</div>
				<div className="form__item">
					<button className='form__button' type='button' onClick={reset}>Сброс</button>
				</div>
			</form>
		</section>
	)
}

// ================== Вывод =============================

export default function App() {

	let persInf = {
		firstName: 'Фабер',
		name: 'Сергей',
		lastName: 'Александрович',
		age: 23,
		mail: 'google@gmail.com',
		address: 'г.Аксай, Ленина 36а',
		hardSkills: ['HTML', 'CSS', 'LESS/SCSS', 'Git', 'JavaScript', 'Angular', `React`],
	};

	let {firstName, name, lastName, age, mail, address, hardSkills} = persInf;

	return (
		<div className="App">
			<Citate startVal='none'/>
			<div className="wrapper">
				<Album />
				<PersInf firstName={firstName} name={name} lastName={lastName} age={23} mail={mail} address={address} hardSkills={hardSkills}/>
			</div>
		</div>
	)
}
