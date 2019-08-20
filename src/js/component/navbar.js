import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Dropdown
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Disabled
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<Dropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
							<Link to="/login">
								<DropdownToggle caret>Login</DropdownToggle>
							</Link>
							<DropdownMenu>
								<DropdownItem header>Header</DropdownItem>
								<DropdownItem>Some Action</DropdownItem>
								<DropdownItem disabled>Action (disabled)</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Foo Action</DropdownItem>
								<DropdownItem>Bar Action</DropdownItem>
								<DropdownItem>Quo Action</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</form>
				</div>
			</nav>
		);
	}
}
