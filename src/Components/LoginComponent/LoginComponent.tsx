import React from 'react';
import { User } from '../../models/user';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ILoginProps {
	// authUser: User;
	// errorMessage: String;
	// loginAction: (username: string, password: string) => void;
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

	const login = async () => {

		console.log("Login Button Clicked");

	}

	return (
		<>
		<div className={classes.loginContainer}>
				<br/>
			<Grid className={classes.root}>
				<form className={classes.form} noValidate autoComplete="off" >
					<TextField id="outlined-basic" label="Username" variant="outlined" />
						<br/>
					<TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
				</form>

				<Link to="/login" className={classes.link}> 
					<Button onClick={login} variant="contained">LOGIN</Button>
				</Link>

			</Grid>

		</div>	
		</>
	)
}

export default LoginComponent;