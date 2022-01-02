import React from "react";
import logo from "../../img/logo.svg";

const Header = () => {

	return (
		<header className="header">
			<div className="container">
				<div className="header__logo">
					<img src={logo} alt="logo"/>
				</div>
			</div>
		</header>
	)
}

export default Header;