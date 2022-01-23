import React from "react";
import {
	Link
} from "react-router-dom";

export  function Sidebar() {

	return (
		<>
			<section className="sidebar">
				<nav className="menu">
					<ul className="menu__wrap">
						<li className="menu__item">
							<Link to={`/profile`}>Profile</Link>
						</li>
						<li className="menu__item">
							<Link to={`/dialogs`}>Dialogs</Link>
						</li>
						<li className="menu__item">News</li>
						<li className="menu__item">Music</li>
					</ul>
				</nav>
			</section>
		</>
	)
}
