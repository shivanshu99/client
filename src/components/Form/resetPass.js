import React, { Component } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";
import {
	NotificationContainer,
	NotificationManager
} from "react-notifications";
import "./style.css";
export default class resetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			linkDate: "",
			email: "",
			password: "",
			confirm_password: "",
			errors: {}
		};
	}
	componentDidMount() {
		let slugParam = this.props.match.params.slug;
		let splitSlug = slugParam.split("+++");
		let reqDate = splitSlug[0];
		let email = splitSlug[1];
		let newDate = reqDate.replace(/\+/g, " ");

		this.setState({ email: email, linkDate: newDate });
		let date1 = new Date(reqDate);
		var d = new Date().toString();
		var index = d.lastIndexOf(":") + 3;
		let currentDate = d.substring(0, index);
		let differenceinMS = currentDate - date1;
		if (differenceinMS > 900000) {
			console.log(differenceinMS);
			NotificationManager.error(
				"Link Not Valid link will be valid for 15 min.Please sent the reset link Again"
			);
			this.props.history.push("/login");
		}
    }
    
	handleInput = e => {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	};
	handleForm = e => {
		e.preventDefault();
		if (this.state.email === "") {
			NotificationManager.warning("Email is Required");
			return false;
        }
        if (this.state.password !== this.state.confirm_password) {
			NotificationManager.error("Password is not matching");
			return false;
		}
		const data = {
			confirm_password: this.state.confirm_password,
			password: this.state.password,
			email: this.state.email,
			linkDate: this.state.linkDate
		};
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		const body = JSON.stringify(data);
		// const data = { email: this.state.email, };
        // console.log(data)
       const myfunc=()=>{
        this.props.history.push("/auth");
    }
		console.log(body);
		axios
			.post("http://localhost:5000/posts/updatePassword/", body,config)
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
							<div className="card-header">Reset Password</div>
							<div
								className="card-body"
								style={{ marginTop: "30px" }}
							>
								<div className="form-group">
									<label for="fname">Password</label>

									<input
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleInput}
										className="form-control"
									/>
								</div>
								<div className="form-group">
									<label>Confirm Password</label>
									<input
										type="password"
										name="confirm_password"
										value={this.state.confirm_password}
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
