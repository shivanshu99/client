import React, { Component } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";
import {
	NotificationContainer,
	NotificationManager
} from "react-notifications";
import "../Form/style.css";
export default class Verification extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
		};
	}
	componentDidMount() {
		
		// let reqDate = splitSlug[0];
		// let email = splitSlug[1];
		// let newDate = reqDate.replace(/\+/g, " ");

		// let date1 = new Date(reqDate);
		// var d = new Date().toString();
		// var index = d.lastIndexOf(":") + 3;
		// let currentDate = d.substring(0, index);
		// let differenceinMS = currentDate - date1;
		// if (differenceinMS > 900000) {
		// 	console.log(differenceinMS);
		// 	NotificationManager.error(
		// 		"Link Not Valid link will be valid for 15 min.Please sent the reset link Again"
		// 	);
		// 	this.props.history.push("/login");
		// }
	}

	handleInput = e => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	};
	handleForm = e => {
		e.preventDefault();
		if (this.state.password === "") {
			NotificationManager.warning("Otp is Required");
			return false;
		}
		
		const data = {
			
			vcode: this.state.password,
			
		};
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		const body = JSON.stringify(data);
		// const data = { email: this.state.email, };
		// console.log(data)
		const myfunc = () => {
			this.props.history.push("/");
		};
		console.log(body);
		axios
			.post("http://localhost:5000/posts/updatePassword/", body, config)
			.then(result => {
				NotificationManager.success(result.data);
				setTimeout(function() {
					myfunc();
				}, 3000);
			})
			.catch(err => {
				if (err.response && err.response.status === 404)
					NotificationManager.error(err.response.data.msg);
				else NotificationManager.error("Something Went Wrong");
			});
	};

	render() {
		return (
			<>
				<NotificationContainer />

				<form onSubmit={this.handleForm}>
					<div
						className="row"
						style={{
							marginTop: 20,
							display: "flex",
							justifyContent: "center"
						}}
					>
						<div className="card">
							<div className="card-header">Enter Your Otp</div>
							<div
								className="card-body"
								style={{ marginTop: "30px" }}
							>
								<div className="form-group">
									<label for="fname">OTP</label>

									<input
										type="text"
										name="password"
										value={this.state.password}
										onChange={this.handleInput}
										className="form-control"
									/>
								</div>
								
							</div>
							<div className="card-footer text-center">
								<div className="form-group">
									<input
										style={{ backgroundColor: "Green" }}
										type="submit"
										value="Reset"
										onClick={this.handleForm}
										className="btn btn-primary"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-3"></div>
				</form>
			</>
		);
	}
}
