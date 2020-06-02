import React, { useState } from 'react';
import { User } from '../../dtos/user';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link, Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface ILoginProps {
	authUser: User;
	errorMessage: String;
	loginAction: (username: string, password: string) => void;
}

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
	
	loginContainer: {
		backgroundImage: "url('https://media.discordapp.net/attachments/713513695644483594/717045594014875718/Rainbow-Falls-6x4-B.png')",
		height: "100vh",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		alignItem: "center",
		justifyContent: "center",
		flexDirection: "column",
        // margin: 20,
        // marginTop: 40,
        // padding: 20
	},
	// root: {
	// 	'& > *': {
	// 	  margin: theme.spacing(1),
	// 	  maxwidth: '25ch',
	// 	},
	// 	textAlign: 'center',
	// 	backgroundColor: "green",
	// 	width: "50%",
	// 	margin: "auto"
		
	// 	// maxWidth: '50%'

	// }, 
	form: {
		display:'inline-block',
		justifyContent: 'center',
		margin: 'auto',
		// backgroundColor: 'white'
		
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
		minHeight: 300,
		minWidth: 275,
		margin: "Auto",
		backgroundColor: '#0A3729', 
		// backgroundColor: 'rgba(255,255,255,.5)', 
	  },
	  pos: {
		marginBottom: 12,
	  },
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
		props.authUser ? <Redirect to="/home" /> :
		<>
		<div className={classes.loginContainer}>
				
			{/* <Grid className={classes.root}>
				<form className={classes.form} noValidate autoComplete="off" >
					<TextField onChange={updateLoginForm} id="username" label="Username" variant="outlined" />
						<br/>
					<TextField onChange={updateLoginForm} id="password" label="Password" type="password" variant="outlined" />
				</form>

				<Link to="/login" className={classes.link}> 
					<Button onClick={login} variant="contained">LOGIN</Button>
				</Link>

				{	props.errorMessage ? <Alert severity="error" variant="outlined">{props.errorMessage}</Alert> : <></> }
			</Grid> */}
			<Card className={classes.root}>
				<CardContent>
					<div>
					<form className={classes.form} noValidate autoComplete="off" >
						<TextField style ={{backgroundColor:'white'}}onChange={updateLoginForm} id="username" label="Username" variant="outlined" />
							<br/><br/>
						<TextField style = {{backgroundColor:'white'}}onChange={updateLoginForm} id="password" label="Password" type="password" variant="outlined" />
					</form>
							<br/><br/>
						<Link to="/login" className={classes.link}> 
							<Button onClick={login} variant="contained">LOGIN</Button>
						</Link>
					</div>
				</CardContent>

    </Card>

		</div>	
		</>
	)
}

export default LoginComponent;