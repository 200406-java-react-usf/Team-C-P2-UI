import React, { useState } from 'react';
import { NewUser } from '../../dtos/newUser';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { User } from '../../dtos/user';

interface IRegisterProps {
	authUser: User;
	errorMessage: String;
	registerAction: (newUser: NewUser) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Container: {
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

	function RegisterComponent(props: IRegisterProps) {

		const classes = useStyles();

		const [first_name, setFirstName] = useState('');
		const [last_name, setLastName] = useState('');
		const [username, setUsername] = useState('');
		const [password, setPassword] = useState('');
		const [verify_password, setVerifyPassword] = useState('');
		const [email, setEmail] = useState('');
		const [errorMessage, setErrorMessage] = useState('');

		let updateRegisterForm = (e: any) => {
			switch(e.target.id) {
				case 'first_name':
					setFirstName(e.target.value);
					break;
				case 'last_name':
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

		const register = () => {

			if(password !== verify_password) {
				setErrorMessage('Passwords Do Not Match');
			}
			console.log('Register Button Clicked');
		}

		return (
		<>
			<div className={classes.Container}>
				<br/>
			<Grid className={classes.root}>
				<form className={classes.form} noValidate autoComplete="off" >
					<TextField onChange={updateRegisterForm} label="First Name" variant="outlined" />
						<br/>
					<TextField onChange={updateRegisterForm} label="Last Name" variant="outlined"  />
						<br/>
					<TextField onChange={updateRegisterForm} label="Username" variant="outlined" />
						<br/>
					<TextField onChange={updateRegisterForm} label="Password" type="password" variant="outlined" />
						<br/>
					<TextField onChange={updateRegisterForm} label="Re-Enter Password" type="password" variant="outlined" />
						<br/>	
					<TextField onChange={updateRegisterForm} label="E-mail" variant="outlined" />
				</form>

				<Link to="/home" className={classes.link}> 
					<Button onClick={register} variant="contained">REGISTER</Button>
				</Link>

				{	props.errorMessage ? <Alert severity="error" variant="outlined">{props.errorMessage}</Alert> : <></> }
			</Grid>

			</div>	
		</>
		)
	}

	export default RegisterComponent;