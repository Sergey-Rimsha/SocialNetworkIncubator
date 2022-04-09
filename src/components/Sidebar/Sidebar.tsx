import React from "react";
import {NavLink} from "react-router-dom";

export function Sidebar() {

	const setActive = ({isActive}: any) => (isActive ? "menu__item_active" : "");

	return (
		<>
			<section className="sidebar">
				<nav className="menu">
					<div className="menu__item">
						<NavLink
							className={setActive}
							to={`/profile`}>
							Profile
						</NavLink>
					</div>
					<div className="menu__item">
						<NavLink
							className={setActive}
							to={`/dialogs`}>
							Dialogs
						</NavLink>
					</div>
					<div className="menu__item">
						<NavLink
							className={setActive}
							to={`/users`}>
							Users
						</NavLink>
					</div>
					<div className="menu__item">
						<NavLink
							className={setActive}
							to={`/news`}>
							News
						</NavLink>
					</div>
				</nav>
			</section>
		</>
	)
}


