import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Concert from "./Concert";
import Spectacle from "./Spectacle";
import Movie from "./Movie";

function Main() {
	return <h2>Выберите категорию</h2>;
};
function NotFound() {
	return <h2>NotFound</h2>;
};
function NavMenu() {
	return (
		<header className="header">
			<Link to="/concert" className="header__link">Концерты</Link>
			<Link to="/spectacle" className="header__link">Спектакли</Link>
			<Link to="/movie" className="header__link">Кино</Link>
		</header>
	);
}

export default function RouteNav() {
	return (
		<div>
			<Router>
				<div>
					<NavMenu />
					<Switch>
					<Route exact path="/" component={Main}/>
					<Route path="/concert" component={Concert}/>
					<Route path="/spectacle" component={Spectacle}/>
					<Route path="/movie" component={Movie}/>
					<Route component={NotFound}/>
				</Switch>
				</div>
			</Router>
		</div>
	);
}