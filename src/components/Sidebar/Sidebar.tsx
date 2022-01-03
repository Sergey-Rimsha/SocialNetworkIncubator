import React from "react";

const Sidebar = () => {

	return (
		<>
			<section className="sidebar">
				<nav className="menu">
					<ul className="menu__wrap">
						<li className="menu__item">Profile</li>
						<li className="menu__item">Messages</li>
						<li className="menu__item">News</li>
						<li className="menu__item">Music</li>
					</ul>
				</nav>
			</section>
		</>
	)
}

export default Sidebar;