import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import "react-notifications/lib/notifications.css";
import axios from "axios"
import "./style.css"
import { useHistory } from "react-router-dom";
import useStyles from './styles';
import {
	NotificationContainer,
	NotificationManager
} from "react-notifications";
const ForgetPass = () => {
  const [postData, setPostData] = useState({ email: '' });
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));


  const handleSubmit = async (e) => {
    e.preventDefault();

  const config = {
		headers: {
			"Content-Type": "application/json"
		}
  };
  if (postData.email==="") {
		NotificationManager.warning("Warning message", "Email is Required");
		return false;
  }
  const body = JSON.stringify(postData);

  axios
		.post("http://localhost:5000/posts/forgotPassword/", body, config)
		.then(result => {
			NotificationManager.success(
				"Password Reset link sent to your email .Please check the your email.Link Will be Valid For 15 min"
			);
		})
		.catch(err => {
			if (err.response && err.response.status === 404)
				NotificationManager.error(err.response.data.msg);
			else NotificationManager.error("Something Went Wrong");
			
		});


  };


  if (!user?.result?.name) {
    return (
		<>
			<NotificationContainer className ={classes.bg}/>
			<Paper className={classes.papers}>
				<form
					autoComplete="off"
					noValidate
					className={`${classes.root} ${classes.form}`}
					onSubmit={handleSubmit}
				>
					<Typography variant="h6" align="center">
						Please Enter Your Mail to reset Your Password.
					</Typography>
					<TextField
						name="email"
						variant="outlined"
						label="Email"
						fullWidth
						value={postData.email}
						onChange={e =>
							setPostData({ ...postData, email: e.target.value })
						}
					/>

					<Button
						className={classes.buttonSubmit}
						variant="contained"
						color="primary"
						size="large"
						type="submit"
						fullWidth
					>
						Submit
					</Button>
				</form>
			</Paper>
		</>
	);
  }
};

export default ForgetPass;
