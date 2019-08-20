import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: ""
		};
	}
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">Email address</label>
										<input
											onChange={e => this.setState({ email: e.target.value })}
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Enter email"
										/>
										<small id="emailHelp" className="form-text text-muted">
											Well never share your email with anyone else.
										</small>
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputPassword1">Password</label>
										<input
											onChange={e => this.setState({ username: e.target.value })}
											type="text"
											className="form-control"
											id="exampleInputPassword1"
											placeholder="Password"
										/>
									</div>
									<div className="form-group form-check">
										<input type="checkbox" className="form-check-input" id="exampleCheck1" />
										<label className="form-check-label" htmlFor="exampleCheck1">
											Check me out
										</label>
									</div>
									<button
										onClick={() => actions.login(this.state.username, this.state.email)}
										type="submit"
										className="btn btn-primary">
										Submit
									</button>
								</div>
							);
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
