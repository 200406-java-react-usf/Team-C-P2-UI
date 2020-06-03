import React, { useState } from 'react';
import { NewUser } from '../../dtos/newUser';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Card } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';
import { save } from '../../remote/user-service';
import { User } from '../../dtos/user';

interface IRegisterProps {
	authUser: User;
	loginAction: (username: string, password: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Container: {
			display: "flex",
			justifyContent: "center",
			margin: 'auto',
			marginTop: 40,
			padding: 20,
			width: '50%',
			backgroundColor:'#48967D',
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
			paddingBottom: '.5em',
			color: '#FFF'
		},
		link: {
			textDecoration: 'none',
			fontWeight: 'bolder'
		},
		button: {
			backgroundColor: '#0A3729',
			color: '#FAFDFC'
		}
	}));

	function RegisterComponent(props: IRegisterProps) {

		const classes = useStyles();

		const [firstName, setFirstName] = useState('');
		const [lastName, setLastName] = useState('');
		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');
		const [verify_password, setVerifyPassword] = useState('');
		const [email, setEmail] = useState('');
		const [errorMessage, setErrorMessage] = useState('');

		let updateRegisterForm = (e: any) => {
			switch(e.target.id) {
				case 'firstName':
					setFirstName(e.target.value);
					break;
				case 'lastName':
					setLastName(e.target.value);
					break;
				case 'username':
					setUsername(e.target.value);
					break;
				case 'password':
					setPassword(e.target.value);
					break;
				case 'verify_password':
					setVerifyPassword(e.target.value);
					break;	
				case 'email':
					setEmail(e.target.value);
					break;
				default:
					console.warn(`Improper binding detected on element with id: ${e.target.id}`);
			}
		}

		const register = async() => {

			if(password !== verify_password) {
				setErrorMessage('Passwords must match')
			}

			let newUser = new NewUser(firstName, lastName, username, password, email);
			
			try {
			await save(newUser);
			} catch (e) {
				setErrorMessage(e.response.data.cause)
			}
			await login(newUser.username, newUser.password);
			return (<Redirect to="/home" />)
		}

		const login = async (un: string, pw: string) => {
			await props.loginAction(un, pw);
		}

		return (
		<>
		{ props.authUser ? <Redirect to="/home" /> : 
		<Card raised={true} className={classes.Container}>
			<Grid className={classes.root}>
				<form  noValidate autoComplete="off" >
					<TextField className={classes.form} onChange={updateRegisterForm} id="firstName" label="First Name" variant="outlined" />
						<br/>
					<TextField className={classes.form} onChange={updateRegisterForm} id="lastName" label="Last Name" variant="outlined"  />
						<br/>
					<TextField className={classes.form} onChange={updateRegisterForm} id="username" label="Username" variant="outlined" />
						<br/>
					<TextField className={classes.form} onChange={updateRegisterForm} id="password" label="Password" type="password" variant="outlined" />
						<br/>
					<TextField className={classes.form} onChange={updateRegisterForm} id="verify_password" label="Re-Enter Password" type="password" variant="outlined" />
						<br/>	
					<TextField className={classes.form} onChange={updateRegisterForm} id="email" label="E-mail" variant="outlined" />
				</form>

					<Button className={classes.button} onClick={register} variant="contained">REGISTER</Button>

				{	errorMessage ? <Alert severity="error" variant="outlined">{errorMessage}</Alert> : <></> }
			</Grid>
		</Card>
		}	
		</>
		)
	}

	export default RegisterComponent;