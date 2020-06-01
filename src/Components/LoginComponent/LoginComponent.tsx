import React, { useState } from 'react';
import { User } from '../../dtos/user';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link, Redirect } from 'react-router-dom';

interface ILoginProps {
	authUser: User;
	errorMessage: String;
	loginAction: (username: string, password: string) => void;
}

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
	
	loginContainer: {
		display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
	},
	root: {
		'& > *': {
		  margin: theme.spacing(1),
		  maxwidth: '25ch',
		},
		textAlign: 'center',
		maxWidth: '50%'

	}, 
	form: {
		justifyContent: 'center',
	},
	link: {
		textDecoration: 'none',
		fontWeight: 'bolder'
	}
}));


function LoginComponent(props: ILoginProps) {

	const classes = useStyles();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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

	return (
		props.authUser ? <Redirect to="" /> :
		<>
		<div className={classes.loginContainer}>
				<br/>
			<Grid className={classes.root}>
				<form className={classes.form} noValidate autoComplete="off" >
					<TextField onChange={updateLoginForm} id="username" label="Username" variant="outlined" />
						<br/>
					<TextField onChange={updateLoginForm} id="password" label="Password" type="password" variant="outlined" />
				</form>

				<Link to="/login" className={classes.link}> 
					<Button onClick={login} variant="contained">LOGIN</Button>
				</Link>

				{	props.errorMessage ? <Alert severity="error" variant="outlined">{props.errorMessage}</Alert> : <></> }
			</Grid>

		</div>	
		</>
	)
}

export default LoginComponent;