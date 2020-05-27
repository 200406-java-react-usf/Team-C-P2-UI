import React from 'react';
import { User } from '../../models/user';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import classes from '*.module.css';

interface ILoginProps {
	authUser: User;
	errorMessage: String;
	loginAction: (username: string, password: string) => void;
}


function LoginComponent() {


	return (
		<>
			<form className={classes.root} noValidate autoComplete="off" >
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			</form>
		</>
	)
}

export default LoginComponent;