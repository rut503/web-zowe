import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "../css/NavBarCSS.css";

function NavBar() {
	return (
		<Navbar className="navbar-box" expand="sm" variant="dark" fixed="top">
			<div className="container">
				<Navbar.Brand className="title" href={"/"}>Web-Zowe</Navbar.Brand>
				<Nav className="mr-auto"></Nav>
				<Nav>
					<Nav.Link className="link" href={"/"}>JCL Files</Nav.Link>
					<Nav.Link className="link" eventKey={2} href={"/details"}>Job Details</Nav.Link>
				</Nav>
			</div>
		</Navbar>
	);
}

export default NavBar;
