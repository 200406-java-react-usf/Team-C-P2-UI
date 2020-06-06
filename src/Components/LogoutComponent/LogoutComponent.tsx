import React, { useEffect } from 'react';
import { User } from '../../dtos/user';
import { Typography, Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

interface ILogoutProps {
	authUser: User;
	errorMessage: string
	logoutAction: () => void;
}

/**
 * Takes in the below properties and removes the authenticated user in order to log out
 * @param props authenticated user, error message, logout action method
 */
function LogoutComponent(props: ILogoutProps) {

	useEffect(()=>{
		async function logOut() {
			await props.logoutAction();			
		}
		logOut();
	},[props]);

	return (
		<>
			<Redirect to="/login"/>

			<Grid>
				<Typography>LOGOUT SUCCESSFUL!</Typography>
			</Grid>

		</>
	)
}

export default LogoutComponent;