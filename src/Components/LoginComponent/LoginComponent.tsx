/**
 * LoginComponent helps render the login page for the client to sign in using username and password.
 * Has a login button to navigate to the home page and a register button to direct to the 
 * registration page
 */
import React, { useState } from 'react';
import { User } from '../../dtos/user';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link, Redirect, useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import OptimizedRainbowFallsRiverMorningSunriseKerikeri from '../../image/OptimizedRainbowFallsRiverMorningSunriseKerikeri.png';


interface ILoginProps {
	authUser: User;
	errorMessage: String;
	loginAction: (username: string, password: string) => void;
}

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
	
	loginContainer: {
		// backgroundImage: "url('https://cdn.discordapp.com/attachments/713513695644483594/717748604277620806/rainbow-falls-river-morning-sunrise-kerikeri.png')",
		backgroundImage: `url(${OptimizedRainbowFallsRiverMorningSunriseKerikeri})`,
		height: "calc(100vh - 64px)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		alignItem: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	form: {
		display:'inline-block',
		justifyContent: 'center',
		margin: 'auto',	
	},
	link: {
		textDecoration: 'none',
		fontWeight: 'bolder',
		margin:'auto'
	},
	//card styling
	root: {
		display: 'flex',
		alignItem: "center",
		justifyContent: "center",
		flexDirection: "column",
		textAlign: 'center',
		width: '40%',
		height: '75%',
		minHeight: 350,
		minWidth: 275,
		margin: "Auto", 
		backgroundColor: 'rgba(10,55,41,.8)', 
	  },
	  pos: {
		marginBottom: 12,
	  },
	  button: {
		backgroundColor: '#0A3729',
		color: '#FAFDFC'
	}
}));

/**
 * Takes in the following properties and renders a view for users to log into the applicaiton
 * @param props authenticated user, error message, login action method
 */
function LoginComponent(props: ILoginProps) {

	const classes = useStyles();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	/**
	 * Takes in a target element and updates the state of the for input fields
	 * @param e target element
	 */
	let updateLoginForm = (e: any) => {
		switch(e.target.id) {
			case 'username':
				setUsername(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			default:
				console.warn(`Improper binding detected on element with id: ${e.target.id}`);
		}
	}
	
	const login = async () => {
		props.loginAction(username, password);
		console.log('Login Button Clicked');
	}
	let history = useHistory();
	const register = async () => {
		history.push('/register')
		console.log('Register Button Clicked');
	}

	return (
		props.authUser ? <Redirect to="/home" /> :
		<>
		<div className={classes.loginContainer}>
				
			<Card className={classes.root}>
				<CardContent>
					<div>
					<form className={classes.form} noValidate autoComplete="off" >
						<TextField style ={{backgroundColor:'white'}}onChange={updateLoginForm} id="username" placeholder="Username" variant="outlined" />
							<br/><br/>
						<TextField style = {{backgroundColor:'white'}}onChange={updateLoginForm} id="password" placeholder="Password" type="password" variant="outlined" />
					</form>
							<br/><br/>
						<Link to="/login" className={classes.link}> 
							<Button className={ classes.button } onClick={login} variant="contained">LOGIN</Button>
						</Link><br/><br/>
						<Link to="/register" className={classes.link}> 
							<Button className={ classes.button } onClick={register} variant="contained">REGISTER</Button>
						</Link>
						<br/><br/>
						{	props.errorMessage ? <Alert severity="error" variant="outlined" style={{color:'#f44336'}}>{props.errorMessage}</Alert> : <></> }
					</div>
				</CardContent>

    </Card>

		</div>	
		</>
	)
}

export default LoginComponent;