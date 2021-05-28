import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Verification from "./components/Auth/verification";
import Home from './components/Home/Home';
import ForgetPAssword from "./components/Form/ForgetPass";
import ResetPassword from "./components/Form/resetPass";
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
	<BrowserRouter>
		<Container maxWidth="false">
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/auth" exact component={Auth} />
				<Route path="/forgetPassword" exact component={ForgetPAssword} />
				<Route path="/verification" component={Verification} />
				<Route path="/change-password/:slug" component={ResetPassword} />
			</Switch>
		</Container>
	</BrowserRouter>
);

export default App;
