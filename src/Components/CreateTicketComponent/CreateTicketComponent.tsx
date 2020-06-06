import React, { useState } from 'react';
import { createStyles, Theme, makeStyles, Grid, TextField, Button, InputLabel, Card } from '@material-ui/core';
import { User } from '../../dtos/user';
import { NewTicket } from '../../dtos/newTicket';
import { Alert } from '@material-ui/lab';
import { createTicket } from '../../remote/ticket-service';
import { Redirect, useHistory } from 'react-router-dom'

export interface ICreateTicketProps {
	authUser: User;
}

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		Container: {
			display: "flex",
			justifyContent: "center",
			margin: 'auto',
			marginTop: 40,
			padding: 20,
			maxWidth: '50%',
			backgroundColor: '#48967D'
		},
		root: {
			'& > *': {
			  margin: theme.spacing(1),
			  maxwidth: '25ch',
			},
			textAlign: 'center'
		}, 
		form: {
			justifyContent: 'center',
		},
		input: {
			paddingBottom: '1em'
		},
		link: {
			textDecoration: 'none',
			fontWeight: 'bolder'
		},
		label: {
			textAlign: 'left',
			paddingBottom: '.5em',
			marginLeft: '1em'
		},
		button: {
			backgroundColor: '#0A3729',
			color: '#FAFDFC'
		}
	}));

/**
 * Takes in an authenticated user as state and renders a component that includes the ticket creation form
 * @param props authenticated user
 */
function CreateTicketComponent(props: ICreateTicketProps) {

	const classes = useStyles();

	const [cost, setCost] = useState(0);
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [departuretime, setDeparture] = useState(new Date());
	const [arrivaltime, setArrival] = useState(new Date());
	const [errorMessage, setErrorMessage] = useState('')

	/**
	 * Updates the state of the new ticket form based on the targeted element
	 * @param e target element
	 */
	let updateTicketForm = (e: any) => {
		switch(e.target.id) {
			case 'cost':
				setCost(e.target.value);
			break;
			case 'origin':
				setOrigin(e.target.value);
			break;
			case 'destination':
				setDestination(e.target.value);
			break;
			case 'departuretime':
				setDeparture(e.target.value);
			break;
			case 'arrivaltime':
				setArrival(e.target.value);
			break;
			default:
				console.warn(`Improper binding detected on element with id: ${e.target.id}`);
		}
	}

	const history = useHistory();

	const addTicket = async () => {

		let newTicket = new NewTicket(props.authUser?.id, cost, origin, destination, departuretime, arrivaltime)
		try{
			await createTicket(newTicket);
			history.push('/tickets');
		} catch (e) {			
			setErrorMessage(e.message);
		}
		
	}

	return (
		
		<>

		{ !props.authUser ? <Redirect to="/home" /> : 
		
		<Card raised={true} className={classes.Container}>
				<br/>
			<Grid className={classes.root}>
				<form className={classes.form} noValidate autoComplete="off" >
					<TextField className={classes.input} onChange={updateTicketForm} id="cost" type="currency" label="$ Cost" variant="outlined" />
						<br/>
					<TextField className={classes.input} onChange={updateTicketForm} id="origin" type="text" label="Origin" variant="outlined" />
						<br/>
					<TextField className={classes.input} onChange={updateTicketForm} id="destination" type="text" label="Destination" variant="outlined" />
						<br/>
					<InputLabel className={classes.label}> Arrival</InputLabel>
					<TextField className={classes.input} onChange={updateTicketForm} id="arrivaltime" type="date" variant="outlined" />
						<br/>
					<InputLabel className={classes.label}> Departure</InputLabel>
					<TextField className={classes.input} onChange={updateTicketForm} id="departuretime" type="date" variant="outlined" />
						<br/>
					
				</form>
				
					<Button className={classes.button} onClick={addTicket} variant="contained">CREATE TICKET</Button>

				{errorMessage ? <Alert severity="error" variant="outlined">{errorMessage}</Alert> : <></> }
			</Grid>

			</Card>}
		</>
	)
}

export default CreateTicketComponent;