import React from 'react';
import { Typography, Card, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
	Container: {
		display: "block",
        justifyContent: "center",
        margin: 'auto',
        marginTop: 40,
		padding: 20,
		maxWidth: '85%',
		backgroundColor:'#48967D',
	},
	title: {

	},
	body: {

	}
  });

/**
*  Renders a component to display applicaiton summary and project team roles
*/
function HomeComponent() {

	const classes = useStyles();

	return (
		<>
			<Card className={classes.Container}>
				<Typography variant="h4"> TRAVEL RECOMMENDATIONS APP</Typography>
					<br/>
				<Typography variant="body1">
				The travel recommendations app provides a user with a place to easily organize travel plans. 
				The app allows users to add their travel tickets to a database consisting of 
				information that includes the departure and arrival time. This app leverages 
				the user’s destination to provide recommended points of interest (POI’s) for the user to visit.
				</Typography>
					<br/>
				<Typography variant="h5">The Team:</Typography>

				<Typography variant="body2">Team Lead: Josef Bostik</Typography>
				<Typography variant="body2">Git Flow Manager: Juan Valencia</Typography>
				<Typography variant="body2">Git Flow Manager: John Eng</Typography>
				<Typography variant="body2">Dev Ops Engineer: Korey Keipe</Typography>

			</Card>
		</>
	)
}

export default HomeComponent;