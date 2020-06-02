import React, { useState } from 'react';
import { NewUser } from '../../dtos/newUser';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Card } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { User } from '../../dtos/user';
import { save } from '../../remote/user-service';

interface IRegisterProps {
	authUser: User;
	errorMessage: string;
	registerAction: (newUser: NewUser) => void;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		Container: {
			display: "flex",
			justifyContent: "center",
			margin: 'auto',
			marginTop: 40,
			padding: 20,
			width: '85%',
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
		},
		link: {
			textDecoration: 'none',
			fontWeight: 'bolder'
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

		const register = async() => {

			if(password !== verify_password) {
				setErrorMessage('Passwords Do Not Match');
			}

			let newUser = new NewUser(firstName, lastName, username, password, email);
			let response = await save(newUser);
			console.log(response);
			return response
		}

		return (
		<>
		<Card raised={true} className={classes.Container}>
			<Grid className={classes.root}>
				<form className={classes.form} noValidate autoComplete="off" >
					<TextField onChange={updateRegisterForm} id="first_name" label="First Name" variant="outlined" />
						<br/>
					<TextField onChange={updateRegisterForm} id="last_name" label="Last Name" variant="outlined"  />
						<br/>
					<TextField onChange={updateRegisterForm} id="username" label="Username" variant="outlined" />
						<br/>
					<TextField onChange={updateRegisterForm} id="password" label="Password" type="password" variant="outlined" />
						<br/>
					<TextField onChange={updateRegisterForm} id="verify_password" label="Re-Enter Password" type="password" variant="outlined" />
						<br/>	
					<TextField onChange={updateRegisterForm} id="email" label="E-mail" variant="outlined" />
				</form>

				{/* <Link to="/home" className={classes.link}>  */}
					<Button onClick={register} variant="contained">REGISTER</Button>
				{/* </Link> */}

				{	props.errorMessage ? <Alert severity="error" variant="outlined">{props.errorMessage}</Alert> : <></> }
			</Grid>
		</Card>	
		</>
		)
	}

	export default RegisterComponent;