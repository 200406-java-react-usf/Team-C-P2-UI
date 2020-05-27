import React from 'react';
import { User } from '../../models/user';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface ILoginProps {
	// authUser: User;
	// errorMessage: String;
	// loginAction: (username: string, password: string) => void;
}

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
	root: {
		'& > *': {
		  margin: theme.spacing(1),
		  width: '25ch',
		}},
	link: {
		
	}
}));


function LoginComponent(props: ILoginProps) {

	const classes = useStyles();

	return (
		<>
			<form className={classes.root} noValidate autoComplete="off" >
				<TextField id="outlined-basic" label="Username" variant="outlined" />
				<TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
			</form>
			<Link to="" className={classes.link}> LOGIN </Link>
		</>
	)
}

export default LoginComponent;